import React from "react";
import { connect } from "react-redux";

function LearningDetails(props) {
  const { learning } = props;
  return (
    <div>
      <h1>{learning.Title}</h1>
    </div>
  );
}

const mapStateToProps = (state, _props) => {
  const id = parseInt(_props.match.params.id);
  const learningObj = state.timeline.learnings;
  const learning = learningObj ? learningObj.find(obj => obj.Id === id) : null;
  return {
    learning: learning
  };
};

export default connect(mapStateToProps)(LearningDetails);
