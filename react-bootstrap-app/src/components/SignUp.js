import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


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
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "Atleast 3 letters").required("First name is required"),
    lastName: Yup.string().min(3, "Atleast 3 letters").required("Last name is required"),
    email: Yup.string().email("Enter Valid Email").required("Email is required"),
    password: Yup.string().min(7, "Atleast 7 characters").required("Password is required").matches(
      /^[A-Za-z]\w{7,14}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
    ),
    termsAndConditions:Yup.string().oneOf(["true"],"Accept Terms and Conditions")
  })


  const initialValues = {
    firstName: "",
    lastName: '',
    email: '',
    password: '',
    termsAndConditions:false

  }
  const onSubmit = (values, props) => {
    console.log(values)
    console.log(props)
    callSignUpApi(values)
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(false)
    },2000)
  }



  function updateLName(str) {
    setlName(str);
  }

  function updatefName(str) {
    setfName(str);
  }

  function updateEmail(str) {
    setEmail(str);
  }

  function updatePassword(str) {
    setPassword(str);
  }

  function callSignUpApi(event) {
    console.log(event.firstName)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: event.firstName, last_name: event.lastName, email: event.email, password: event.password })
    };

    fetch('http://localhost:3000/user/signup', requestOptions)
      .then(response => response.json())
      .then(data => handleData(data));
    event.preventDefault();

  };

  function handleData(data) {
    if (data.message) {
      handleClickOpen();
    }
    else {
      history.push('/sign-in');
    }

  }

return (

  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>


      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <br></br>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                
                <Field as={TextField}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  helperText={<ErrorMessage name="firstName" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}


                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  helperText={<ErrorMessage name="lastName" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}


                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  helperText={<ErrorMessage name="email" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={<ErrorMessage name="password" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                required
                  control={<Field as={Checkbox} name="termsAndConditions" checked={props.values.termsAndConditions} color="primary" />}
                  label="I accept the Terms and Conditions."
                  
                />
                <FormHelperText>{<ErrorMessage name="termsAndConditions" >{ msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>}</FormHelperText>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
            > {props.isSubmitting?"Loading":"Sign Up"}
              
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Form>

        )}



      </Formik>
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
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
  </Container>
);
}
