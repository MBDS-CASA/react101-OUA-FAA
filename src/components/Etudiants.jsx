import React, { useState } from "react";
import data from "../data/data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  TextField,
} from "@mui/material";

export default function Etudiants() {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("lastname"); // tri par nom de famille par défaut
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Filtrage selon prénom, nom ou cours
  const filteredData = data.filter(
    (row) =>
      row.student.firstname.toLowerCase().includes(search.toLowerCase()) ||
      row.student.lastname.toLowerCase().includes(search.toLowerCase()) ||
      row.course.toLowerCase().includes(search.toLowerCase())
  );

  // Tri
  const sortedData = filteredData.sort((a, b) => {
    let aValue, bValue;

    if (orderBy === "firstname") {
      aValue = a.student.firstname.toLowerCase();
      bValue = b.student.firstname.toLowerCase();
    } else if (orderBy === "lastname") {
      aValue = a.student.lastname.toLowerCase();
      bValue = b.student.lastname.toLowerCase();
    } else if (orderBy === "course") {
      aValue = a.course.toLowerCase();
      bValue = b.course.toLowerCase();
    } else if (orderBy === "grade") {
      aValue = a.grade;
      bValue = b.grade;
    }

    if (order === "asc") return aValue > bValue ? 1 : -1;
    else return aValue < bValue ? 1 : -1;
  });

  // Pagination
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper style={{ padding: "1rem" }}>
      <TextField
        label="Rechercher"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "lastname"}
                  direction={orderBy === "lastname" ? order : "asc"}
                  onClick={() => handleSort("lastname")}
                >
                  Nom
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "firstname"}
                  direction={orderBy === "firstname" ? order : "asc"}
                  onClick={() => handleSort("firstname")}
                >
                  Prénom
                </TableSortLabel>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.unique_id}>
                <TableCell>{row.student.lastname}</TableCell>
                <TableCell>{row.student.firstname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Paper>
  );
}
