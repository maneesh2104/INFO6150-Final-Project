import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Button from '@material-ui/core/Button'
import AppointmentApp from './AppointmentApp';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    // paddingLeft: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingRight: "100%",
    paddingLeft: "-100px",
    width: "100%"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
 
  allignment:{
      backgroundColor: "blue",
      justifyContent: "center"
  },

  header:{
    width: "100%",
    textAlign: "center",
    // marginLeft: "auto",
    // marginRight: "auto"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-04-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardHeader

        title={props.name}
        subheader={props.quali}
        className={classes.header}
        />

      <CardMedia
        className={classes.media}
        image="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.address}
        </Typography>
      </CardContent>
      <CardActions classes={{root: classes.root}, {alignment: classes.allignment}} disableSpacing>
        <div className="button-wrapper">
        <Button  variant="contained" color="primary" onClick={handleExpandClick}>
        Show Available Timings
    </Button>
        </div>


       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </MuiPickersUtilsProvider>
          <br></br>
          <br></br>
            <FormControl component="fieldset">
      <FormLabel component="legend">Time</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="10:00PM" />
        <FormControlLabel value="male" control={<Radio />} label="11:00PM" />
        <FormControlLabel value="other" control={<Radio />} label="12:00PM" />
      </RadioGroup>
    </FormControl>
       
        </CardContent>
      </Collapse>
    </Card>
  );
}
