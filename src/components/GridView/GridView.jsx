// src/components/GridView.js
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import axios from "axios";

const GridView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/students") // Replace with an actual public API
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell className="text-primary-link" align="left">
                <Link to={`/tile-view/${student.id}`}>{student.name}</Link>
              </TableCell>
              <TableCell align="left">{student.age}</TableCell>
              <TableCell align="left">{student.gender}</TableCell>
              <TableCell align="left">{student.phone}</TableCell>
              <TableCell align="left">{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GridView;
