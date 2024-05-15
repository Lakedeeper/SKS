import { useState, useEffect } from "react";
import axios from "axios";

function Forms() {
  const [pendingForm, setPendingFrom] = useState([]);
  const [publishForm, setPublishForm] = useState([]);
  const [publishedForm, setPublishedForm] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");

        const pendingForms = response.data.filter(
          (form) => form.state.trim() === "pending"
        );
        console.log(pendingForms);
        setPendingFrom(pendingForms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");

        const pendingForms = response.data.filter(
          (form) => form.state.trim() === "publish"
        );
        console.log(pendingForms);
        setPublishForm(pendingForms);
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
    if (model.state.trim() === "pending") {
      console.log("pending");
      try {
        const updatedForm = { ...model, state: "clubOnay" };
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
            setPublishForm(publishForms);

            const publishedForms = response.data.filter(
              (form) => form.state.trim() === "published"
            );
            setPublishedForm(publishedForms);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchUpdatedForms();
      } catch (error) {
        console.error("Error updating form:", error);
      }
    } else if (model.state.trim() === "publish") {
      console.log("publish");
      try {
        const updatedForm = { ...model, state: "published" };
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
            setPublishForm(publishForms);

            const publishedForms = response.data.filter(
              (form) => form.state.trim() === "published"
            );
            setPublishedForm(publishedForms);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchUpdatedForms();
      } catch (error) {
        console.error("Error updating form:", error);
      }
    } else {
      console.log("nothing");
    }
  };

  const RedButton = async (model) => {
    try {
      const updatedForm = { ...model, state: "red" };
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
          setPublishForm(publishForms);

          const publishedForms = response.data.filter(
            (form) => form.state.trim() === "published"
          );
          setPublishedForm(publishedForms);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchUpdatedForms();
    } catch (error) {
      console.error("Error updating form:", error);
    }
  };

  return (
    <div
      style={{
        marginRight: "10px",
        marginLeft: "170px",
      }}
    >
      <p style={{ margin: "20px 10px", fontSize: "30px" }}>Pending</p>
      <table
        className="table table-success table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Date</th>
            <th style={{ color: "black" }}>.</th>
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
                    data-bs-target="#exampleModal"
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

      <p style={{ margin: "20px 10px", fontSize: "30px" }}>Publish</p>
      <table
        className="table table-success table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Date</th>
            <th style={{ color: "black" }}>.</th>
          </tr>
        </thead>
        <tbody>
          {publishForm.map((form, index) => (
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
                    data-bs-target="#exampleModal"
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

      <p style={{ margin: "20px 10px", fontSize: "30px" }}>Published</p>
      <table
        className="table table-success table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Date</th>
            <th style={{ color: "black" }}>.</th>
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
                    data-bs-target="#exampleModal"
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
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={selectedForm ? selectedForm.image_url : ""}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedForm ? selectedForm.event_name : "Event Name"}
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
              {selectedForm ? (
                <>
                  <p>Club name: {selectedForm.club_name}</p>
                  <p>Event Type: {selectedForm.event_type}</p>
                  <p>Event Name: {selectedForm.event_name}</p>
                  <p>Starting Day: {selectedForm.start_of_event}</p>
                  <p>Ending Day: {selectedForm.end_of_event}</p>
                  <p>Time: {selectedForm.time}</p>
                  <p>Subject: {selectedForm.subject}</p>
                  <p>
                    Number Of Participants:{" "}
                    {selectedForm.number_of_participants}
                  </p>
                  <p>The place: {selectedForm.place}</p>
                  <p>Club Manager: {selectedForm.club_manager}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {selectedForm?.state.trim() !== "published" ? (
              <div className="modal-footer">
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  onClick={() => RedButton(selectedForm)}
                >
                  Red
                </button>
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
    </div>
  );
}

export default Forms;
