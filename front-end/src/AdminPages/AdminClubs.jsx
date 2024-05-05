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
                <button style={{padding:'2px',borderRadius:'16px'}}>
                  Review</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>yusuf</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>
              <div className="ReviewButtonAdmin">
                <button style={{padding:'2px',borderRadius:'16px'}}>
                  Review</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ECE</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>ARSLAN</td>
            <td>
              <div className="ReviewButtonAdmin">
                <button style={{padding:'2px',borderRadius:'16px'}}>
                  Review</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default AdminClubs