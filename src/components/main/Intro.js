import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80vh"
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Intro(props) {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <div>
        <Typography variant="h5" gutterBottom>
          Write down all of your acquired learnings.
        </Typography>
      </div>
      <div>
        <Typography variant="overline" gutterBottom>
          Microlearning. Computer-based training. Online Courses. Readings.
          Research. Meetups. Tutorials. Seminars. Whatever.
        </Typography>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          component={Link}
          to="/timeline"
        >
          Get Started
        </Button>
      </div>
      <div />
    </div>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
