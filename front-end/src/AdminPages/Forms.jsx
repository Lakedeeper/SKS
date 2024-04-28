function Forms() {
  return (
    <div
      style={{
        border: "1px solid red",
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
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <div>
                <button>incele</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Forms;
