import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./Timeline.css";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const LearningList = ({ learnings }) => {
  return (
    <VerticalTimeline>
      {learnings &&
        learnings.map((learning, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={learning.Timestamp}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdStar />}
            >
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to={"/learning/" + learning.Id}
              >
                {learning.Title}
              </Typography>
              <h4 className="vertical-timeline-element-subtitle">
                {learning.Location}
              </h4>
              <p>{learning.Description}</p>
            </VerticalTimelineElement>
          );
        })}
    </VerticalTimeline>
  );
};

export default LearningList;
