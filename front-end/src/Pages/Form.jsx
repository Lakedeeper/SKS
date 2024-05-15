import { useState, useEffect } from "react";
import axios from "axios";

import "./Form.css";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import DoDisturbIcon from '@mui/icons-material/DoDisturb';
// import EditIcon from '@mui/icons-material/Edit';

function Form() {
  const [pendingForm, setPendingFrom] = useState([]);
  const [clubOnayForm, setClubOnayForm] = useState([]);
  const [publishedForm, setPublishedForm] = useState([]);
  const [rejectedForm, setRejectedForm] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  const [formData, setFormData] = useState({
    club_name: "",
    event_type: "",
    event_name: "",
    start_of_event: "",
    end_of_event: "",
    time: "",
    event_subject: "",
    number_of_participants: "",
    event_place: "",
    image: "",
    state: "pending",
  });

  const [formEdit, setFormEdit] = useState({
    id: "",
    club_name: "",
    event_type: "",
    event_name: "",
    start_of_event: "",
    end_of_event: "",
    time: "",
    event_subject: "",
    number_of_participants: "",
    adress: "",
    image: "",
    state: "",
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormEdit({
      ...formEdit,
      [name]: value,
    });
    console.log("edit", formEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/forms", {
        ...formData,
        adress: formData.event_place,
        number_of_participants: parseInt(formData.number_of_participants),
      });
      console.log("Success:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("selectedForm", selectedForm);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");

        const pendingForms = response.data.filter(
          (form) => form.state.trim() === "pending"
        );
        const redForms = response.data.filter(
          (form) => form.state.trim() === "red"
        );

        console.log(pendingForms);
        setRejectedForm(redForms);
        setPendingFrom(pendingForms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");

        const pendingForms = response.data.filter(
          (form) => form.state.trim() === "clubOnay"
        );
        console.log(pendingForms);
        setClubOnayForm(pendingForms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData3 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");

        const pendingForms = response.data.filter(
          (form) => form.state.trim() === "published"
        );
        console.log(pendingForms);
        setPublishedForm(pendingForms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  const OnayButton = async (model) => {
    try {
      const updatedForm = { ...model, state: "publish" };
      const response = await axios.put(
        `http://127.0.0.1:8000/api/forms/${model.id}/`,
        updatedForm
      );
      console.log(response.data);

      const fetchUpdatedForms = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/forms");

          const pendingForms = response.data.filter(
            (form) => form.state.trim() === "pending"
          );
          setPendingFrom(pendingForms);

          const publishForms = response.data.filter(
            (form) => form.state.trim() === "publish"
          );
          setClubOnayForm(publishForms);

          const publishedForms = response.data.filter(
            (form) => form.state.trim() === "published"
          );
          setPublishedForm(publishedForms);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchUpdatedForms();
      window.location.reload();
    } catch (error) {
      console.error("Error updating form:", error);
    }
  };

  const HandleEdit = (model) => {
    console.log("model", model);
    setFormEdit({
      id: model.id,
      club_name: model.club_name,
      event_type: model.event_type,
      event_name: model.event_name,
      start_of_event: model.start_of_event,
      end_of_event: model.end_of_event,
      time: model.time,
      event_subject: model.event_subject,
      number_of_participants: model.number_of_participants,
      adress: model.adress,
      image: model.image,
      state: "clubOnay",
    });
  };

  const HandleEdit2 = () => {
    const updatedData = {
      ...formEdit,
      number_of_participants: parseInt(formEdit.number_of_participants, 10),
    };

    axios
      .put(`http://127.0.0.1:8000/api/forms/${formEdit.id}`, updatedData)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error updating the data:", error);
      });
  };
  return (
    <>
      <div className="allPageForm">
        <div className="containerForm">
          <div className="headerForm">
            <div className="LogoForm">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX///8Asa0AAAAArqoArKgpubbN7+73/f0Asq78/PwAtbGC1dP4+Pj7/v719fWU2tjv7+9z0c67u7vIyMjf399Tx8XS0tLY2Njp6eni4uJ8fHyFhYWsrKzs+fnj9fSZmZk5OTloaGggICBGRkaSkpLDw8NxcXFNTU0MDAwYGBiXl5ej396KioqmpqZ+fn6zs7MwMDBbW1s6OjpHR0e64uFVVVUnJyfW8/Of3dxaxcJlysc6w8C05OO54eCl2diK09B7qKfN5+cLWzIZAAAgAElEQVR4nNVd52LisLIGG9OLaaaaXgMEyFJCOZt73v+lrjWSbEmWG5Bkz/zYTQi29Vmj6RrFYt9PhZRp9gglV3f6o2mmCj/w9G8m83y///0q129aNqsmLFJV+C+RzWZvt/LX3/s9af72IB+m86p8tZClVURxN+HPs9rtUv5M/vZgI5LZ+2/upibkwKRQEwmtfOiZ/xtc27uXLtmEC5wqkgtnIlv/up9/e/hBlFpdtCw7egInq12v5ZVD5etV0+IJAaqqprVL6d9dl6neSmMGDLjq13LpfvZkvvPdwgrvhLkskS2d/0WU5v2adaZDTaRv5b/3ZC/MlefD36+6xdjO1dnL33+NXc9lLa0yk1e+98xUhOsLZi+ZYzhAjWuXf0i+mvebPQFq+nZdPcpjqXv5Zq9iNaGtwrDA99P5s24PStW+Ds+Nqpcs3ZyZ1L5+fyLNnBZXCbx4/fwKjWb2ys5EauXfncfeNW4P5bLyQZfJoH9qtXzIG9+vms2sdW9Z/N10LtFhWAI+6SdYGutOJR9bj0aTYtibJ1c3ijGb+x1eLXxq9uoLkC2Zk6Io1ZaC/g3/APNAV6SF8ecVZOquJYjwvNyDvtxA2Npr9G830lOSVMeq6YcF9IOUvFLxUj8E670mYENzuGxEe04hSVe6Wg98kS+kQg6rd1W9hcBn0URR5q3Y9His1TbGZtiK8KxUkigjNX2NYkM8Q4U7FTD1VfC3m4Zh9CtFuv4MNJG1aA9MXsgLza5+BKOZs58XZmn0EYeu7V/zltAZuRAaGd97pOx3ev0BczWJhbga91bFeVbrbRDCifP7ToZwN37zVyPmF3mtWgi2eYpSX8QCrXuqqEx1zK6z6ZJHOJcgBFk77zZ0nyf3Lmmseq/fKlTPV7Lovd1UvcPwpEXGKRghcLL1+XBS8Z5Kyqrq7Rv1/z1LWMWTQY2ZxYXcKFs7HuG7BOFMobQYtL0xmnX6fh8bfiClckTClDztxEyHh4M++uAkTcz6xlIwbBroK6fZB0HZ9zZe6TRev8Uct6xsPIE+TNIcWCMUtN3Y+ujd+dXiyEWF/8YU4ZrFGpXJCCAOvafxfMEQvcXA43QmhnBZvgKxuK+i+RIk/xxZbM6vFRfCzATBMtCPRbwiZ97DSJVAqKrayy0cvAQtHSj9a202BlzWglpOhb8NgxDqaJYVeif4ZeM3Esypae+18hCt0phDD5K/6d3OSRnB2rIGtxeVt4Cw5UIIuqLD/F1Rxk2fsZyJwPl6pYFTIsavlEOLR6rUp7LXjxDuHU1XdDkYHZtJgUCw+hroqTKGWH4ZxFQOm0xlD76ooDHtmnhwLvsLITw6c4IQ9rkvIJNg7nxhKhhBMiplXypS6Ssreb4yEIGVWHMsExJoij4cDehCaAiIgE2H/kMq3LG8ubzEviEA0z4GIUziINaVsheSlCNHAzZFhMgxZlfmNARCyzzWMMQXzGLqqnrKGEp4JVZn3IKj1MUTzPy62LLX7tEcMxrwPUiYYsLaS709DRHPoJr117CA4mMpHRlw3bu9PC1AI3aiqyNhyk4hwzm920tmkQD0NkQx6XNicc2rLkmTUVjhWLVew5j9M+h4Rofq8PUwPrL5EogY4C3Q7+zbtvO+IuoyMFlG4OQWuyNhgoofjLpHBLpDwuwSwpa4entGaZSwnncBrKw7vMuaURyab3i7srEDr2E2mayHLikCknTv/F4bKC514klkFp/Qi5+gBl0saiCeXPBLpcNAVEYTjle3C/aPM25+hjyTFtugW+UKP9MSQ1gEYu5RiHfQq64Z7OKR8kq5iUdvY1mzL6AytvHteN8oDx9uKGMXQZDKpzBjtHkZhQiLm/jXA+gsSgLAtKgmKnSsnDTIwNi2hu3MLt4Z8dGqzMbLxejP+1QY4gZ/+biuWDObr8CM8pKIkjFbKhJ1e8YewUOeRk+TXtuwFspiUpktZ/xqg3iMtaCasxEFOWD0eCaTz+czLkHb7M9PhLN3O/LTWBJObWHuGLklUA/mIUCbSSkFvmb6U/wcSUaksWuim4reP9gmjTbG+NHehBGJzU17x67TjvuixoT8rS1x/w/ZMPpMQlhP5ERjuzj2kuXAcNg9b3TQBIaO+2Yalb0tiLfueX6338BWdvkKRlqP6i6Sy1yf6wsHYaZYZIcDYyACplkNnUbDt8pU39br9VZ34Wu9L4E/0b8nQ3ZtLId1RqQHYikj06U6lXX5RuV9Pp9tHf0OCuMj2nOCiPJnu4rE8VAeoyrgGGckaWPWQU9Ilm8RBH/bUt6EdcY2y4KvrohBjGeI8ueu6gq7coR1htsw8SHsMEn9pY0i0JxCLCJNsZMuFUIFSqEGQfgT0Tt+rKc9nkwDy4Vfincfxm6NRYj2m90qw63H8uudk4fD/esrB/T193A4nHu+A2q8EVUJVs4QSeql97dBbCRCR4p7GrwRD/+5KiL8oPrLQ7wkP3PXOq3CtOv2strtmvOsumxSDdLXM9TE8HWLYSmmQ2pF7PN6B35r4xESbuOZEcuDlJdLOLiV+VnPQiGKjNDH6VupJykVzmD1MQM5ZhC28VviPeRnhPWH7/B0vyxWdbPpElho7Xk45Gby8+YFjoWp3mRlRtuRMqYxuRa25nzthyTcLBcCXyyVlWtCOW2tJ7/J/nDO1dMJhvyQqtlLziUIjTYfoFP2/io2hyon1DDyFHg0G9YImnqJuKRAuaz/TMZvd28fCJZiQBlHCvNpsCN1R4KXC6z51jF1Qqfl7+kAdk3cPr3eK0jSoNgN9oUC5SlEBtQL+yYqHek3a8jAQqHAtn8SnlJBC1iRqOTyUzoFeSRqjn6RfiCw3gJNcFAsacLNecT5mZkyl/jclj84G45YZRFEgQjjkFOSYKwsFC5DR0nfc75yCrTc1X8UJhgHxGVuzIbdfGyLLIuua55sVze0mWY9P4BRESWubjU1kS/DyofwerGl4q8U0USrGtb1UI1WaRHTVxTVLRywGIS3Qy2E4aZRzI8051Jd0UEj4CfxCkvMbxCwWNPESAcRvc5Mie9WEaYRBRBP76HCfjbCWwiE7vQnWFE74W5VkhTnFlASvUK//APEf1VaXAWzhHhj+wdPIy8za/1+N1KVmmZp2ZBbTNJcbnC6cy1D3XYA/nBaEnjQy9606Jzm+LhrmYIwR03spQ38/IZQCD/DIRQTZyiIyukK4+iYxZy9YcLF3p4iaApizVQ/Bt2MLaBbOGw/jFiRxj3cQpgMi9Ayc7hh7hVGVxRpcHZudERRVwJ7xctrgeen8cuDQCYbK9tCMPr0sIOL0qwJMxEWIbKMmXHqa2fBV/CiUQaWoEe+HBd8BI2R8FqJIIlI7Ami7ZygqoH5K1aKYLrnAgkVbalmCHVhU/qLgZinck7vkKgzruF8EycRFLrHSgRBSp2mpkTVVdGKX7iNp8KXa9uWhBD3mGHUhTOL7oLSYpdG1YmJU11waQ/kRqFLpZNYADlkux/d3cIV7myg1TgXL0zlwvJe1vQ1v90QxSx21Y460voO5Nvw0a9P0AeySYTgsSNIM62GmyGh2kVweK034zdv7IBvZjiF6BBnIGdIqFkZQWQDmcuodEBAWIAL/ytBmGMEKZDhNmRijYUrmJC8lr3owjOlWk+FVIjMS2EgEkNxuSYRgNEMyxwhz4F1ohtggZ/CGOSjj64AxVzCpt505ubsAYRcclCH2M24SvLENgkWKzBjwu1i3BMwBOcDSKKNxERX2yM15EErFtEjCONxJrFQISK0ywE8Cg6sIFBsgkQMo2UNcr3gHA0jzWEsxgohC+E15NZg9ionOZTpjGC+0OKbN94hV7Vwm8ZYKYiyBmxWNlRV3JLqgyW7kyc/kjpqoRGe79d0ZEZ1lk4NVk1jhO1Uo7tu9yUmCKTN0qLpBjKWjwHrb5QNnNW4ccvSSAitxx8i6UREYrgeyiLARs7IIywYDK9MIfLvClTp1M2dEVZFzvYgCkA3wljsK/Ik8hWDOpKkJ7/QCSiMLI8GTFLN/d0tMeJ3GwMZFB+8sfpDCAWxAe6if1kY2J+8XQPiRxam0mn6dbcfwsKchYs7eSC8X66lS3R5Gme1GHgW/oE3yYQhizgrN1cbtN5JKpoDqCcg/ArdaIGfRCaCBqGHZcAGFLToOJWYTEjtXExNp+BJGUTce5YT9GHpAXhAjlYEn6ATwEklkSchevHX8/sGNXj30TzgVInzlp5BmHbkxiaEMEDlC2xICpwav10GsdZ6OBzOWN1zTYQgHs8zCFVnVRVnwaxkXnhESN2rl0jFDOdHRvkEQjb4Yix8dmQQguXhSNO/8bCJKUqkOOAnEdYdwbFv+wwN011l693Mq0zd+1JS86SsJ4inELL6zQjeTQxK37ZCIaudjgIwZorJM4bKXiieQxjXHFkfQmVxRlpS9H2fo5SXI/8kQt+0tIs4fYHMqMQL9xGtPGA8idA7DCqjHuvpQ73NC/e7ecV9n0Uoj6B5EA7rkV8CYv2R6ewRe3sWoXqNMImQgyGGGxrQ44XEEvrvNyGMVkX611mIJX+T7R9CqEbZkYdquIlPj6Yz+8oNi9/FpZLgiw9hQw1+RP5apLq+IDp8l6SJJyKwaQpMU7QQezex+OJZ8lL5zyOMVCYLvIleCcxmQAFDJPJMEj6PMJ6NMI4cjbihSp4oZrdZ8qWvmyeIFyCMR2DTO5Wgf91Rm4ALg9No34cwQrOBMwKGcpBfER2L3MODfAHCSEqfpNmw7g9/XeqSiDRxPMLokUSBogh9FNy3bDW8xS38ZWZJksL+CuUQWxPgZZSHpihmDZIIlrqApKUkFuxJBSmFGbp6wCXnz5Dqt1tXIPTa0z3ItsnyiRHJDJE3szjMfCQczCF07eLxphy2vXvpl6jDlL8AQks1gaRE7rGQsHOjenjbBPGVNecoKi2N50dE6Bm7gHF93S1CQqKHfohWr8CTR2ReRhDnXoEjEC0+8AhCbvWknkEYD4+QTB5M5fOexY8hlCToPRHGwZJdiTmMfxxhhNnoZf83EYZfUYDwSkXq0wh9df4rEYZ3oKDs5IbTTs8jTPpvp3ghwvBuEBgzGGHo/SOoz6+UAhTA78whWCGREebSWRkFKPHEf16HMLz9BZngyAh9BYrnqPjcZCrohfwqwke8Q3HTXCqnPQ7xmxBmarTM+gGE7tYohfMTbvQLEaIuCMWivp3sB6cRTZw/MDRX3wmE8fF0d/gkGYPQrS2KjelmPTw6e34pwnv0ch9pjUcYb0t+uwj6EGr1IKbv0vjbIdfIganhjI7QI3hUegwg0YeB+9gAIZLZdZnVVhwqLurE8nrxMYTyuMP5QW8fIayOlsfKfHecTSqGrheLRdRUxF1hw9qlnCgQAe4G8+F+Mj1CS8QoOyYIeYixRxHeccPQvVPUvhgcj511p1+xiC2cJAjvLu/JLoEaDNfdqmE0ai3rRaHi8XEmZkaeQ68CgccRNlHp7PyoyIjdDdrDFaU9lweM0b01uYmHtmonPRZxP8HrESYsDxiBG7o6HwCxW7MINADKWrNow+Hi3VXtgGZ26FOG8FMI0xbCVmffn0oBcjWLBxzNJ06UQ6hMfOhetsX+oN8M8pJ+ACFOIeqxooGoWq1O+5P28ThYuBGCiEm6o4lvirwwLmMYRdgB9KsIvWJt1pLKG5XJkC14I5l8cKLYpBVCKKvI6VjMa3inP38KYYSwYB2ba3h7OvP5xkIiqd4sog3P7UyAq/v9CCPEvCGa3yM7Y5kQHdpoISlubJAd4+eooua1CKPkLdKkigZKMZjrUINAWS+PId58GLkq8bUII3TzLNDCZyi9ZBXiTtrNK6NvZ9Dd8Sv8cPCJhx4DiAe0A5HfMUL+AWdIY6TuhFWIsLuImraZvK43a5X22JY+yfDjyUEMx2MA6E/RfShb0OTfg/Zdr2iW+yxWKujIZNiBlVfprmfjEdY0FGGEKEtg8DayYI5TCzpjWZETfw8jR+uEQF1wmzWNhSIhu4g9tGcXHJ7+T1SEtlqDTRcD3zpTJDBwgOiiimXsNdE7VBRml0p4B+rlCG33F9tsO0DYWo8/2oar8rsH0VKYObvuxKHmG7Hclx/j4fCt399sNradE55NX4+QMinqtDncwN6BDe55thc3nDFVX/aK5DA2kNnXaLRauvh2/FMULAWmGKIipHtmW38sPwmPy/b1dgJEqBPCc276bZiR0SGsKgtSXlE3PttKzZIUpIdixVlGQufaT6ZOCF0cpeqvF1bWBCXdowbubGlh2V0nwFM9MZKC2/oJTlCCoKpHTc6EHVlQ5XFEs8bRaWiDHoqNEZHYbjTgyDP23lAFTUXvSo1ms0N1Q6ghBZQVRDXcbMmFGuEqwy7pAAI2JlqPrH6EymcaWz3HoxachLRNX4zQqfrJzxjmxKEZ1FiV3ZeVY+NPoDkilEVhk+/HEbIbJpjmjWQPVHHB71CGUn2qXFIcXk/Kb+xAViHcSnwpQv5mFWp30eMmNvw6RDFBZv/wKh4it1odMmf7hfODX4pQMEqmwKjjN+KsIw05Yv68oo4FGa8WWAjdRF03mLZ3obT+KxG6+pwUa0bXILIF78Fm+z+UeUOtgEzTrE98gOx3/uN8Eipu+tI59HHutzA69iiwM+wZZTQgLERX625KxQ3pHMb28S2FCO+/EKFfUi3TdpQGoYNYrQfRYflJQNaituPnrL4xQ+RxX4iQ2QfsbmneRGKGPUmr4J4y6DgoK78t0s5viEm5EFyIUtEXInQ8A2vBbF0Y9RkXWsJ9grmHl8TYPiHay38uskEojfEyhIyYae6U4PMvIN3E8zVsXHZtZqjssdbp5xGjLgT3JFjYvG4OHTGDAtajoD2k0HCAl5x4KzCncZoV7FqeOvlYc6RIjrQL5NOXIXRWVAM5E0F71VG2ydXIFJQ+myJ/GxCbAc0cdCl0s0ZQpvpFCFWmGSbS89BHsLjx7n5QojstWMIKhJE1WAMuK8AQSBxLutwGJaJeg5BtioHs0SPIGUMZe/X/g3YD7t14ZcGFQl1gTkQBwlk4svZQKX+V8RqETKMZ/USPhc4gyTCXr0fUrlvSxRQVRXOe/hYzKKIKp+71qXPjpC/ElyBkbC84CxJ3G0DZFY/DIHCfVom/CyqEmVq9QoFkwMilbG+M2WNS7n5tnzyNCEJhALJDhUAu7jF6tAWDLiY7e3CZ5N1CGFS6tQQ6wnxgdQ/9Idl4+t27u4KmBcS3vC90ZpcxTIrkrIR5AxLVpF1iVek0OVOk7qHbiR0g8xKrtiTVNzjyw65xn+4K/yfr7Rfi0vPd7pbFMhs+DApp5vXcYSqLcz/YVw5NWtPS7VEgY2V7w8CuQZKUnts0DtmmZvBgQ9dU3QbIDSfD9jsiFlaRDo4SmKTyY7xAYbjanFn3QPO212lr21E7bANvY1St7JTpYLc4GrFJOxPrzDKxyWazHO+aUyUfq8wMab+nni2+3O6OfebOjvDRu6CpAYXXxm2uT7JD4H1NWmt85w4nwHzNp6pSHb8bzVpH0YuxkaLH1pZA3rz1R9vTZKpkYt1hVdYN3JbP0oNr9S0JkS4h9YRS0wPG2IKiR8+Dg6DeydXwG7yvxRybOMMWu6iN4djnAGaE8IgqcyZKLDYdjTbWHCrdyltf2S/1CkHonkNaMi50EnaOHWy9k2kcb/EUsvcAYznh6cznZOK0YSeiTgJ/6gPF4wgminBanClDQHg8fuxibX2tDLv95ftig+Zw8+5GmKKetVB3u2V7PjfsvlUbhTuKlwhS78joOSsRp3ZmYCaMpgrt2n36RFoIK7HhESE0PqYdxXjXLcTT/qgyAGzDblXp8pKeHI2NZAVnOG9Hym7jfDO/dfJ/XLoCN3fyjscUIEdf5+6dIcHXnSHwY2XRHii+J4Yap+p8/KcV6+9i/X5MH6/f9VjxWO3u5h+tfGc53uerg/GMDRyQ85rjauKTW0k4Xch2FmpSVuVCK1BGIW+xSwjrRM7gwd1Qx66+RZb8We6PH7NQtazh6Gwb8hdOGGQggzYQbBfCqhwPwRkavk3LYp9oFXBl330sScUvAu+eZhEb1PlRwZ7A+Cc/CeDmzF26FffmZIVx6qYGlknjXrtskKpjrWf3PFWxASW28/civbPvxvR3i0trs2kss5Ec+nEmWl6N12XNPCVjgMbNXI0hlHaoAXlCfOQOI2yKQ4nKquLoRlBvP5u23a6l+dfrXeOPYgmf01y4sJC84toaNX4RBB021STFkkBvLjETmETDTm3dP5tojABgP/T5ePlMd7k99TejWONUielrAWEyR3bRJLSVOAMzzoIJHHqIZklg9bhCAByRAA6xlcKJmj/91gghrKGdGx0O4f2SJfOnuY7+1mnNeYjjeuCcKonV6SLMzD4hfhxDtxvsB51SBAPdjxvN3WQ9sPh7G8vvbYSp80oj/Kld3YPD8hK/0CCIWJmH2Y1RAIGkeXp2xAKgAC3bPvigEksF7qqVY6caq8wrsfyQLKvzqozlp6pqqyR9Ym1Lz7HE5lQfN7cOOrEHnyoaqhwBH7XnlWwjiTvbWEPhBNbckFKxiI67RHUreXTsZbEYK1iLr67FcUuNbPnsjKw5oGcGNz7IYsAQ//i+SHzoZsgttDhIKP/yRlz4fdGuCKCCiU4KzN1UaCAS1y7lEq8dOg5LGh/EZsILY+cDMYlPQgpZM4MVp/RoKAyQjX6/i/aU9yBWn6Wvr/LlloWqzKx2K68OSddTwEtrYROxSitIcGzTu6kn3kYV/kBZrFjcTlYehxG4GBeS5qcQh72jowJNM7m6Y+pZv0hOBYxhtp+1scOgd+mhrhjizMtXwyffRmgrsAKIYr0Pae/NlVfBWUweccsHqTWbz93x5ze/WcSdVaK0ycJ6X9Atrb2LRa03jsSdf3PtqFTsLGXThTXjuwwi1uEBZopAOFSS5q6puFlUDBajfQ9RHiMnPF1iuLeIOWjmhoiTtf4uhZuwyuAbiSBjbSk8GKScw1F6exjhFC8vgpCe62ThzFAOER8pEb17CRw+JTiTU9duGiwBbIZqHlFkIWwszpOMJadyKbVwOlowMPAunmhtkDHhC/nA41aMoMNexQU/MsW9LSyYMvq0UrWPPAIl+8dl8cKxx8qIZyPQ3r5+vRdhaZP48v0SBKNIeD2Pi1k/cFzDqEYIBze7ONZMi66gmF5iRyC39A9/X3wiYIRtGAyRwOynn5vRdEZCtp7SgyKGyrizDRnisI9Rs4UynIC9dLP7VhnzYQUce5QH8YMJhLC/P2LYUs+Ac3sWtnUD8ffReG0UA3kWymAXiMOdiCEIzqP7u1seIBhrT/QmJdVrPteDYLcemsHm3MzmICfKqhwn/u5rEb2MfaX6zkKCkovA9vlJ7Fk+0QTqEA94RYgzd62YjmtZmQD4VmEIh3My28mbRetOp7PuMiK/Qm2Vzgdj38Irm/uzOY7/exdzhaHPAIgnGJ0BYvzIMhBInc3beIT+x3OYYfeIn5zpsY+F5k6NwadW+RbOEIDioZ4RaRX3ZVQ0ija4b0uujhyLHeuHRn+2pEeIThSWbIg7hd+CTQiEjd+xPZhFn+/xjI+dlKaByCh2yCcWQkVQYo6DtXljQ1gS/KLhZILNrxPlQDRZI8lSha95Jw0OMIMJeaYwEmFGjUvbMNuHZ4k2P8hYMeA/pVNXA0FLFx2suMV8s23q3O6V1kB2E0pYTTzLopgwo0q5gRTLn1weMEyXaKHaCPkKpBazkWy8YWQLvD+PgotP70E9QBDqt16X2zDCskOSzIazIPvC51UbYYVFmFmzy5M5G1YHATaU6NMUDrS8gkUxHTBHuIIEcLaU4q73JH0ZlOVo3zecvzoIkcxxzvvU2b0Fyt7xv7C/5panpPVLOkoD8wDCq1p1uWC1Div2HeIOt7NHbFCEcMAvm5vezJj9gMwNkZ10cpmn55uf9HuQiPGguZICVWn2CU3KklS/OIoA5nDT2OJD77g3U2wY1Wofm6cMIuuKd9cSwDkqNX5/3Qwi6uHWquG8lAzYYfnW2/HExqqhpGlB5IpURkJWmXFxix0Xh5DCXfUW0aUPJhPvP1DrIbb8V0d07mr9o7MOa3ZB9VKW0EK0UaRxCodIFjViUCYcpfA2dTUbbAaCMiAuuu4IjtqAIhx4gWgFICRZVCHL/zKit78EeGM6NdkEAoQnca0BFYka7EplJ6VeGb9kv9PTn6MzWYzZu68eqiEZ4wokEYQdrP34IIxlxkIyEin/kVd4uXAgb/j2yqMqBDJpff7VbxrFCCMlQEiOuuWDLUi37/vdNVqoXqdVmSSNyh+7/nqi7zHuYy9BzOXUnjYF9x4QDrGW4/OBGbt2xKs0IEUKWcOIgSepR/Z0WbzipY/s0c5nXTbqAAgtZ6EF6v2DsUDztK5SWcvDrUlSiKJeX64k3JS6E25Jlz1YtfJuC01OsVOEJE3OykwcBFHeG9KQeY8yaLz0wiONfMgsE46Jl02PeSx2Zx9IKXKrChACF2KrjnO5alWv8KNZot1Ag4T4C+lOjulQsyXPhxarm9mAc94dhDjr6K/bCfU+aSGR9u0rkCWzpNLn5rwZJ9+asrYL7MAeASp9Hg5iqkTqodXENyl5bzKvWVqkVTbDuWm14/g43+Mwb23d7/ffZr49Zgo2f6ppsVDqRyh5jdPn5/xNAEKZZpTUWyH5RdefWn+xHxGWzMMtQTFePl95npJFK8oj8YR2/xkJKqVDnfKRxaznVw3EPOfSdJ2nbz8qYNxUONiHpavq7TP5PMhU8m89bt+yHor/v5fMpHPovZq95J4zOs6li0Zvpybqh1/kT5bM3M3e/qSq6eu952UJ+N6llyxn7RNM1LjmZTP9CpmrstOGXE2k6193dy2Q3/Xne6medfq3Wa/p86f1XxCleiUt4bCrNQW3a+4eZhZ699z1oqVV5g1ly71/hD0FMnPOIgKYFmXruVWy14MaKIes36zPzp+5azbOHYiFLij/gP/wMBWSn/39kJgAAACBSURBVGWNbxaITglSs9nbrZ4rU8rVb/VsVhXPDbIm7/p5+H3hGUCp3n9zWiLhOvPI/xwz9B6y5cM/ypwSKtxzlxtaWyFaS6A1q11yv2m4PEhm8v43V9eyCY+j5+CUq6xWz/2NJnf/LUohgZJc5cr1243b16zdbuXy6oBE0Devu/8HdGC1sPewT5oAAAAASUVORK5CYII="
                alt=""
              />
            </div>
            <div className="titleForm">
              T.C. ÜSKÜDAR UNIVERSITY HEALTH, CULTURE AND SPORTS DIRECTORATE
              Student Activity Application Form
            </div>
          </div>
          <div className="formMain">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="club_name"
                className="formInput"
                placeholder="Club Name:"
                value={formData.club_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="event_type"
                className="formInput"
                placeholder="Event Type:"
                value={formData.event_type}
                onChange={handleChange}
              />
              <input
                type="text"
                name="event_name"
                className="formInput"
                placeholder="Event Name:"
                value={formData.event_name}
                onChange={handleChange}
              />
              <div className="dateAndTimeFormInput">
                <label className="fw-medium">Starting Date:</label>
                <input
                  style={{ width: "50%" }}
                  type="date"
                  name="start_of_event"
                  className="formInput"
                  placeholder="Date Of Event:"
                  value={formData.start_of_event}
                  onChange={handleChange}
                />
                <label className="fw-medium">Ending Date:</label>
                <input
                  style={{ width: "50%" }}
                  type="date"
                  name="end_of_event"
                  className="formInput"
                  value={formData.end_of_event}
                  onChange={handleChange}
                />
                <input
                  style={{ width: "40%", marginLeft: "8px" }}
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="event_subject"
                className="formInput"
                placeholder="Subject/Content of the Event:"
                value={formData.event_subject}
                onChange={handleChange}
              />
              <input
                type="text"
                name="number_of_participants"
                className="formInput"
                placeholder="The Number of Participant:"
                value={formData.number_of_participants}
                onChange={handleChange}
              />
              <input
                type="text"
                name="event_place"
                className="formInput"
                placeholder="The Place where Event will be:"
                value={formData.event_place}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                className="formInput"
                placeholder="Image (URL)"
                value={formData.image}
                onChange={handleChange}
              />
              <div className="buttonContainer">
                <button type="submit">Gönder</button>
              </div>
            </form>
          </div>
        </div>

        <div className="FormPageHistoricalEventLists">
          <div
            style={{
              marginRight: "10px",
              marginLeft: "170px",
            }}
          >
            <p
              style={{
                margin: "20px 10px",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Pending
            </p>
            <table
              className="table table-success table-striped"
              style={{ width: "100%" }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Club Name</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Date</th>
                  <th style={{ color: "black" }}></th>
                  <th style={{ color: "black" }}></th>
                </tr>
              </thead>
              <tbody>
                {pendingForm.map((form, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{form.club_name}</td>
                    <td>{form.event_name}</td>
                    <td>{form.club_manager}</td>
                    <td>{form.date}</td>
                    <td>
                      <div className="ReviewButtonAdmin">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => setSelectedForm(form)}
                        >
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              className="modal fade"
              id="exampleModal3"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <img
                      src="https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fnorodejeneratif-hastaliklar-zirvesi-45188.jpg%3Ft%3D1715551632&w=1920&q=75"
                      alt=""
                      style={{ width: "150px", height: "auto" }}
                    />
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      EventName: {selectedForm?.event_name}
                    </h1>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="modal-body ModalFormBody"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <>
                      <p>Club name:{selectedForm?.club_name}</p>
                      <p>Event Type:{selectedForm?.event_type}</p>
                      <p>Event Name:{selectedForm?.event_name}</p>
                      <p>Starting Day:{selectedForm?.start_of_event}</p>
                      <p>Ending Day:{selectedForm?.end_of_event}</p>
                      <p>Time:{selectedForm?.time}</p>
                      <p>Subject:{selectedForm?.event_subject}</p>
                      <p>
                        Number Of Participants:
                        {selectedForm?.number_of_participants}
                      </p>
                      <p>The place:{selectedForm?.event_name} </p>
                    </>
                  </div>
                  {selectedForm?.state === "clubOnay" ? (
                    <div className="modal-footer">
                      <button
                        style={{ backgroundColor: "green", color: "white" }}
                        type="button"
                        className="btn"
                        onClick={() => OnayButton(selectedForm)}
                      >
                        Onay
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {/*Update Button */}
            <div
              className="modal fade"
              id="exampleModal4"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Editting Event
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    className="modal-body ModalFormBody"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "baseline",
                    }}
                  >
                    <form action="">
                      <label htmlFor="">Club Name:</label>
                      <div>
                        {" "}
                        <input
                          type="text"
                          name="club_name"
                          className="formInput"
                          placeholder="Club Name:"
                          value={formEdit.club_name}
                          onChange={handleChange2}
                        />
                        <label htmlFor="">Event Type:</label>
                        <input
                          type="text"
                          name="event_type"
                          className="formInput"
                          placeholder="Event Type:"
                          value={formEdit.event_type}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Event Name:</label>
                        <input
                          type="text"
                          name="event_name"
                          className="formInput"
                          placeholder="Event Name:"
                          value={formEdit.event_name}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Starting Date:</label>
                        <input
                          type="date"
                          name="start_of_event"
                          className="formInput"
                          placeholder="Date Of Event:"
                          value={formEdit.start_of_event}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Ending Date:</label>
                        <input
                          type="date"
                          name="end_of_event"
                          className="formInput"
                          value={formEdit.end_of_event}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Time:</label>
                        <input
                          type="time"
                          name="time"
                          value={formEdit.time}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Subject:</label>
                        <input
                          type="text"
                          name="event_subject"
                          className="formInput"
                          placeholder="Subject/Content of the Event:"
                          value={formEdit.event_subject}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Participant:</label>
                        <input
                          type="text"
                          name="number_of_participants"
                          className="formInput"
                          placeholder="The Number of Participant:"
                          value={formEdit.number_of_participants}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">The Place:</label>
                        <input
                          type="text"
                          name="event_place"
                          className="formInput"
                          placeholder="The Place where Event will be:"
                          value={formEdit.adress}
                          onChange={handleChange2}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Image(Url):</label>
                        <input
                          type="text"
                          name="image"
                          className="formInput"
                          placeholder="Image (URL)"
                          value={formEdit.image}
                          onChange={handleChange2}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer"></div>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => HandleEdit2()}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginRight: "10px",
              marginLeft: "170px",
            }}
          >
            <p
              style={{
                margin: "20px 10px",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Club Approval
            </p>
            <table
              className="table table-success table-striped"
              style={{ width: "100%" }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Club Name</th>
                  <th scope="col">Event Name</th>

                  <th scope="col">Date</th>
                  <th style={{ color: "black" }}> </th>
                  <th style={{ color: "black" }}> </th>
                  <th style={{ color: "black" }}> </th>
                </tr>
              </thead>
              <tbody>
                {clubOnayForm.map((form, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{form.club_name}</td>
                    <td>{form.event_name}</td>
                    <td>{form.club_manager}</td>
                    <td>{form.date}</td>
                    <td>
                      <div className="ReviewButtonAdmin">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => setSelectedForm(form)}
                        >
                          Review
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="ReviewButtonAdmin">
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal4"
                          onClick={() => HandleEdit(form)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginRight: "10px",
              marginLeft: "170px",
            }}
          >
            <p
              style={{
                margin: "20px 10px",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Published
            </p>
            <table
              className="table table-success table-striped"
              style={{ width: "100%" }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Club Name</th>
                  <th scope="col">Event Name</th>

                  <th scope="col">Date</th>
                  <th style={{ color: "black" }}> </th>
                  <th style={{ color: "black" }}> </th>
                </tr>
              </thead>
              <tbody>
                {publishedForm.map((form, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{form.club_name}</td>
                    <td>{form.event_name}</td>
                    <td>{form.club_manager}</td>
                    <td>{form.date}</td>
                    <td>
                      <div className="ReviewButtonAdmin">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => setSelectedForm(form)}
                        >
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
{/* Rejected */}
            <p
              style={{
                margin: "20px 10px",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Rejected
            </p>
            <table
              className="table table-success table-striped"
              style={{ width: "100%" }}
            >
              <thead>
                <tr className="table-dark">
                  <th scope="col">#</th>
                  <th scope="col">Club Name</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Date</th>
                  <th style={{ color: "black" }}></th>
                  <th style={{ color: "black" }}></th>
                </tr>
              </thead>
              <tbody>
                {rejectedForm.map((form, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{form.club_name}</td>
                    <td>{form.event_name}</td>
                    <td>{form.club_manager}</td>
                    <td>{form.date}</td>
                    <td>
                      <div className="ReviewButtonAdmin">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => setSelectedForm(form)}
                        >
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
