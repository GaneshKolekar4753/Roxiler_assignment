import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

export default function DataTable({ data }) {
  const column = data;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ bgcolor: "#F7AA39" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {column.map((row, index) => {
                return (
                  <>
                    <TableRow key={index}>
                      <TableCell key={row.id}>{row.title}</TableCell>
                      <TableCell key={row.id}>{row.price}</TableCell>
                      <TableCell key={row.id}>{row.description}</TableCell>
                      <TableCell key={row.id}>{row.category}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={column.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
}
