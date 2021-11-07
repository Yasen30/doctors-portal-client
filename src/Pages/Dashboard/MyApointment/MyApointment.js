import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UseAuth from "../../../Hooks/UseAuth";

const MyApointment = ({ date }) => {
  const { user, token } = UseAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date]);
  const filterElement = appointments.filter(
    (data) => data.email === user?.email
  );

  const filterDate = filterElement.filter(
    (data) => data.date === date.toLocaleDateString()
  );
  return (
    <div>
      <h2>Appointments:{filterDate.length} </h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterDate.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.servicesName}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyApointment;
