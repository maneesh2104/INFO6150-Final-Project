import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';



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
    backgroundImage: 'url(https://source.unsplash.com/user/xinhui1209/likes)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  radioBoxes: {
    display: "inline"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = React.useState('Choose wisely');

  var request = require('request');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Email is required"),
    password: Yup.string().min(8, "Atleast 8 characters").required("Password is required").matches(
      /^[A-Za-z]\w{7,14}$/,
      "Mustbe between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
    ),
  })
  const initialValues = {
    firstName: "",
    lastName: '',
    email: '',
    password: ''

  }
  const onSubmit = (values, props) => {
    console.log("In onSubmit")
    callSignInApi(values)
    console.log(values)
  }

  function updateEmail(str){
    setEmail(str);
  }

  function updatePassword(str){
    setPassword(str);
  }

  function callSignInApi(event){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: event.email, password:event.password})
  };

  fetch('http://localhost:3000/user/signin', requestOptions)
      .then(response => response.json())
      .then(data => handleData(data, event));
    event.preventDefault();

  }

  function handleData(data, event){
    console.log(data)
    if(value=="true"){
      console.log("setting doctor email")
      localStorage.setItem("doctor_email", event.email)
    }
    else{
      console.log("Setting patient email")
      console.log(value)
      localStorage.setItem("patient_email", event.email)
    }
    if(data.message == "Sucessfully logged in"){
      console.log("Setting local storage")
      console.log(data.email)
      history.push('/');
    }
    else{
      handleClickOpen();
    }

  }


  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
                  <FormControl component="fieldset" error={error} className={classes.formControl}>
                <FormLabel component="legend">Are you a doctor?</FormLabel>
                <RadioGroup aria-label="quiz" className={classes.radioBoxes} name="quiz" value={value} onChange={handleRadioChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              //onChange={ (event) => updateEmail(event.target.value) }
              autoComplete="email"
              autoFocus
              helperText={<ErrorMessage name="email" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
              </ErrorMessage>}
              
            />
            <Field as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              //onChange={ (event) => updatePassword(event.target.value) }
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="password" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
              </ErrorMessage>}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              //onClick={callSignInApi}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
              Don't have an account?
              <Link href="#sign-up" variant="body2">
                  {" Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
          )}
          </Formik>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Error!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Please check the details and try again!
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Okay
          </Button>
      </DialogActions>
    </Dialog>
  
        </div>
      </Grid>
    </Grid>
  );
}