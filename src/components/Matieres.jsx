import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../data/data.json';

export default function Matieres() {
  const matieres = [...new Set(data.map(item => item.matiere))];

  return (
    <>
      <h2>Matières</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom de la matière</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {matieres.map((matiere, index) => (
              <TableRow key={index}>
                <TableCell>{matiere}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
