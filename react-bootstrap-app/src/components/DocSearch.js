import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "./../../src/"
import DocMap from './DocMap'
import { useHistory } from 'react-router-dom';


import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import doc1 from '../static/images/doc1.png'

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
  
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },

  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13), 
  },
  papermod: {
      height: "150px",
      width: "95%",
      marginLeft: "10px"
  },
  btnAppointment: {
      margin: "55px",   
      marginLeft: "150px"   
  },
  mapGrid: {
    width: "100%",
  }
  
}));

export default function CustomizedTabs(props) {
  console.log("local storge")
  console.log(localStorage.getItem("patient_email"));
  const classes = useStyles();
  //console.log(props.location.state.detail)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const looper = ['1','1','1','1','1',];

  const history = useHistory();
  const handleClick = (doc) => {
      console.log("I am here")
      history.push({
        pathname: '/book-appoinment',
        state: { detail: doc}
      })
    }
  

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="All Appointments" />
          <AntTab label="In-person" />
          <AntTab label="Remote" />
        </AntTabs>
    </div>
    <br></br>

      
    <Grid container spacing={2} className={classes.mapGrid}>
    <Grid item md={8}>
    {props.location.state.detail.map(doc=>(

     
     <div>
      
     <Paper elevation={3} className={classes.papermod}>
      <div className={classes.root}>
      
      <div className="docInfo">
        
        <div className="DocPic">
            <Avatar alt="DocPic" src={doc1} className={classes.large} />
        </div>

        <div className="docText">
            <h5 >{doc.name}</h5>
            <p>{doc.specality}</p>
            <p>{doc.address}</p>
        </div>

      </div>

        <div className={classes.root}>
            <Button variant="contained" color="primary" className={classes.btnAppointment} onClick={() => {handleClick(doc)}}>
                Book Appointment
            </Button>
        </div>

        </div>
        </Paper>

        <br></br>
        </div> 

    ))}  
    </Grid>

    <Grid item md={4}>
    
    <DocMap location={props.location.state.detail} ></DocMap>

    </Grid>

    </Grid>
    

    </div>
  );
}

