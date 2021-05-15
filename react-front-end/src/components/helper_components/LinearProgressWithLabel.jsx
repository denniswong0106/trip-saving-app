import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../Group.scss";

// function LinearProgressWithLabel(props) {
//   return (
//     <Box display="flex" alignItems="center" className="whole-bar" >
//       <Box width="100%" mr={1} >
//         <LinearProgress className="bar" variant="determinate" {...props} />
//       </Box>
//       <Box minWidth={35}>
//         <Typography className="barText" variant="body2" color="textSecondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// LinearProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and buffer variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

//new bar based on https://bit.dev/mui-org/material-ui/linear-progress
export default function LinearWithValueLabel(props) {

  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      width: '100%',
      backgroundColor: '#BAD9D9',
    },
    bar: {
      borderRadius: 0,
      backgroundColor: '#32838C',
    },
  })(LinearProgress);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <LinearProgressWithLabel value={props.value} /> */}
      <div className="whole-bar">
        <BorderLinearProgress className={classes.margin} className="bar" variant="determinate" value={props.value} />
        <p className="barText">
            {`${Math.round(props.value)}%`}
        </p>
      </div>
    </div>
  );
}