import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "date-fns";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import { addLearning } from "../../store/actions/timelineActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  grid: {
    maxWidth: "80%",
    margin: "20px auto"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class NewLearning extends Component {
  state = {
    Id: null,
    Title: "",
    Description: "",
    Location: "",
    Duration: null,
    Timestamp: new Date()
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.id]: evt.target.value
    });
  };

  handleDateChange = date => {
    this.setState({ Timestamp: date });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // formatted date to timestamp
    const timestamp = parseInt(this.timestampFormat(this.state.Timestamp));
    const learning = { ...this.state, Timestamp: timestamp, Id: timestamp };

    this.props.addLearning(learning);
    this.props.history.push("/timeline");
  };

  timestampFormat = date => {
    return format(date, "t");
  };

  generateRandomKey = () => {
    // logic to generate random partition key for dynamoDB
  };

  render() {
    const { classes } = this.props;
    const { Timestamp } = this.state;

    return (
      <div>
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={24} className={classes.grid}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  New Learning
                </Typography>
                <hr />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Title"
                  name="Title"
                  label="Title"
                  placeholder="Learning Title"
                  helperText="Your learning title - e.g. 'Modern React with Redux 2019 on Udemy'"
                  onChange={this.handleInputChange}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rowsMax="4"
                  id="Description"
                  name="Description"
                  label="Description"
                  placeholder="Learning Description"
                  helperText="Write something about your learning"
                  onChange={this.handleInputChange}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="Location"
                  name="Location"
                  label="Location"
                  placeholder="Location"
                  helperText="City, Country, Online Portal"
                  onChange={this.handleInputChange}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="number"
                  id="Duration"
                  name="Duration"
                  label="Duration"
                  placeholder="0"
                  helperText="Duration in minutes"
                  onChange={this.handleInputChange}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    margin="normal"
                    label="Date"
                    value={Timestamp}
                    onChange={this.handleDateChange}
                    style={{ marginRight: 10 }}
                  />
                  <TimePicker
                    margin="normal"
                    label="Time"
                    value={Timestamp}
                    onChange={this.handleDateChange}
                    style={{ marginRight: 10 }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                {/* <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Clear
                </Button> */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </React.Fragment>
      </div>
    );
  }
}

NewLearning.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    addLearning: learning => dispatch(addLearning(learning))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(NewLearning));
