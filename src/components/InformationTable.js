import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../features/userSlice'

const style = {
    table: {
        borderCollapse: "collapse",
        margin: "10px 10px",
      },
      tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px"
      },
}

function InformationTable() {

    const users = useSelector(selectUserData); // from the store
    console.log(users)

   

  return (
    <table style={style.table} className="informationTable">
        <thead>
        <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
        </tr>
        </thead>
        <tbody>
        {
        users.map((user,index) => (
            <tr key={index}>
                <td style={style.tableCell}>{user.firstname}</td>
                <td style={style.tableCell}>{user.lastname}</td>
                <td style={style.tableCell}>{user.phoneNumber}</td>
            </tr>
        ))
      }
        </tbody>
  </table>
  )
}

export default InformationTable