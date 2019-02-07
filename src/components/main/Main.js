import React, { Component } from "react";
import LearningList from "../timeline/LearningList";
import { connect } from "react-redux";
import { fetchLearnings } from "./../../store/actions/timelineActions";

class Main extends Component {
  render() {
    const { learnings } = this.props;
    return (
      <div>
        <LearningList learnings={learnings} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  learnings: state.timeline.learnings
});

export default connect(
  mapStateToProps,
  fetchLearnings
)(Main);
