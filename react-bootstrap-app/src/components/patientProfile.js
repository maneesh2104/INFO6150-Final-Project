import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 170 },
  { id: 'doctor', label: "Name of Doctor", minWidth: 100 },
  { id: 'button', label: "Button", minWidth: 100 },

  
];
console.log("Twillio page is coming")
var mail = "";
var key = "";
var dict = {}
if(localStorage.getItem("patient_email") != undefined){
mail = localStorage.getItem("patient_email");
dict = {patient_email: mail};
  console.log("patinet logged in")
}
if(localStorage.getItem("doctor_email") != undefined){
  mail = localStorage.getItem("doctor_email");
  dict = {doc_email: mail};
  console.log("doctor logged in")
}


const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(dict)
};

fetch('http://localhost:3000/appoinment/search/', requestOptions)
  .then(response => response.json())
  .then(data => handleData(data));

function handleData(data) {
    console.log(data);
    if (data.message) {
        //Show error
        //handleClickOpen();
    }
    else {
      console.log("Sucess")
        // this.props.history.push({
        //     pathname: '/doctor-search',
        //     state: { detail: data }
        // })
        //   history.push('/sign-in');
    }

}

function createData(date,time,doctor) {
    const button=(
        <Button onClick={()=>onclick()}> Click Here</Button>

    );
  
  return { date, time, doctor, button};
}

const rows = [
  createData('04/04/2021', '10 PM', "Dr Maneesh", ),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
        <br></br>
        <br>
        </br>
        <br></br>
        <br></br>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}