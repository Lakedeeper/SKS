import React from 'react'
import '../AdminPages/AdminClubs.css'

function AdminClubs() {
  return (
    <div>

<table
        className="table table-success table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Mail Adress</th>
            <th scope="col">Date</th>     
            <th style={{color:'black'}}>.</th>
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
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Review
              </button>
              <button style={{marginLeft:'5px',backgroundColor:'red'}}>Delete</button>
              </div>
            </td>
          </tr>
         
        </tbody>
      </table>

      <button type="button" class="btn btn-warning" style={{marginLeft:'8px'}}>+ Add Club </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Club Name:</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ModalFormBody" style={{display:'flex',flexDirection:'column'}}>
      <p>Club name:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum!</p>
      <p>Club Manager </p>
      <p>Mail Address: </p>
      <p>Description: </p>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AdminClubs