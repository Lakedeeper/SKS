function Forms() {
  return (
    <div
      style={{
        marginRight: "10px",
        marginLeft: "170px",
      }}
    >
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
          <tr>
            <th scope="row">1</th>
            <td>Doğu</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>
              <div className="ReviewButtonAdmin">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Review
                </button>
              </div>
            </td>
          </tr>
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
                src="https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fkalp-damar-cerrahisinde-perfuzyon-44723.jpg%3Ft%3D1711322825&w=828&q=75"
                alt=""
              />
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Event Name
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
              <p>
                Club name: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolorum, harum!
              </p>
              <p>Event Type: </p>
              <p>Event Name: </p>
              <p>Day: </p>
              <p>Time: </p>
              <p>Subject: </p>
              <p>Number Of Participant </p>
              <p>The place: </p>
              <p>Club Manager: </p>
            </div>
            <div className="modal-footer">
              <button
                style={{ backgroundColor: "red", color: "white" }}
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                Red
              </button>
              <button
                style={{ backgroundColor: "green", color: "white" }}
                type="button"
                className="btn"
              >
                Onay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
