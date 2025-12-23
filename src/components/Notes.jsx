import React, { useState } from "react";
import data from "../data/data.json";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TableSortLabel,
  TablePagination, TextField
} from "@mui/material";

export default function Notes() {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("titre");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredData = data.filter(
    (note) =>
      note.course.toLowerCase().includes(search.toLowerCase()) ||
      note.student.firstname.toLowerCase().includes(search.toLowerCase()) ||
      note.student.lastname.toLowerCase().includes(search.toLowerCase())  );

  const sortedData = filteredData.sort((a, b) => {
    if (order === "asc") return a[orderBy] > b[orderBy] ? 1 : -1;
    else return a[orderBy] < b[orderBy] ? 1 : -1;
  });

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
        onChange={handleSearch}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "titre"}
                  direction={orderBy === "titre" ? order : "asc"}
                  onClick={() => handleSort("titre")}
                >
                  Titre
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "note"}
                  direction={orderBy === "note" ? order : "asc"}
                  onClick={() => handleSort("note")}
                >
                  Note
                </TableSortLabel>
              </TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prenom</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((note) => (
              <TableRow key={note.unique_id}>
                <TableCell>{note.course}</TableCell>
                <TableCell>{note.grade}</TableCell>
                <TableCell>{note.student.firstname}</TableCell>
                <TableCell>{note.student.lastname}</TableCell>
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
