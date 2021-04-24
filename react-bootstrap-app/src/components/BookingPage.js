import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from '../components/CardComponent';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PayPal from './Paypal';
import { useHistory } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(3, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  ta: {
    marginTop: "15px",
    paddingLeft: "15px",
    paddingTop: "10px",
    width: "100%",
    fontSize: "15pxu"
  },
  docform: {
     height:"90%",
     marginTop:"85px"
     
  },
  doccard: {
    margin: "3%",
    marginTop:"85px",
    
  }
  
}));
const initialValues = {
  name: "",
  age: '',
  reason: '',
  address: '',
  msg:""

}
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Atleast 3 letters").required("First name is required"),
  age: Yup.number("Age should be in numbers").required("Age is required"),
  reason: Yup.string().required("Reason is required"),
  address: Yup.string().required("Address is required"),
  
  msg:Yup.string()
})

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
      console.log("I am here")
      history.push('/book-appoinment');
    }


  return (
    <div>
    
    <Grid elevation={6} container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid className={classes.doccard} xs={6}>
          <div>
            
              
              <CardComponent/>
              <br/>
              <br/>
              
          </div>
          
      </Grid>
      
      
    <Grid className={classes.docform}  item xs={6} sm={8} md={5} component={Paper} elevation={6} square> 
    
        <div className={classes.paper}>
        
        
          <Typography component="h1" variant="h5">
            Few more details
          </Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onClick={() => {handleClick()}}>
          <Form >
          <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Patient Name"
              id="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="name" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
            />
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Age"
              name="age"
              autoComplete="email"
              autoFocus
              helperText={<ErrorMessage name="age" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
            />
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="reason"
              label="Reason"
              id="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="reason" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
            />
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label="Contact Address"
              id="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="address" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
            />

            <Field as={TextareaAutosize}  name="message" rowsMin={6} cols={75} placeholder="Message to doctor" 
            helperText={<ErrorMessage name="msg" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>}/>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Pay Now
            </Button>

            
          </Form>
          </Formik>
        </div>
      </Grid>

    </Grid>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </div>
    
  );
}