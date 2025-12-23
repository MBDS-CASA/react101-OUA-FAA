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

export default function Matieres() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Liste unique des cours
  const courses = [...new Set(data.map((item) => item.course))];

  // Filtrage selon la recherche
  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(search.toLowerCase())
  );

  // Tri
  const sortedCourses = filteredCourses.sort((a, b) => {
    if (order === "asc") return a > b ? 1 : -1;
    else return a < b ? 1 : -1;
  });

  // Pagination
  const paginatedCourses = sortedCourses.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleSort = () => setOrder(order === "asc" ? "desc" : "asc");

  return (
    <Paper style={{ padding: "1rem" }}>
      <h2>Matières</h2>

      <TextField
        label="Rechercher une matière"
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
                  active
                  direction={order}
                  onClick={handleSort}
                >
                  Nom de la matière
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedCourses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredCourses.length}
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
