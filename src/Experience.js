import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <div id="nav-experience" className="menu-anchor"></div>
      <Container fixed>
        <h1>Experience</h1>
        <LinearProgress color="secondary" />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element-work vertical-timeline-element-work-latest"
            date="August 2018 - Present"
            icon={<BusinessCenterIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Staff Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SS&C Advent
              <br />
              Jacksonville, FL
            </h4>
            <p>Details here.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date="June 2016 - June 2018"
            icon={<Diversity3Icon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Marketing Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Optimum Healthcare IT
              <br />
              Jacksonville Beach, FL
            </h4>
            <p>Details here.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date="June 2015 - June 2016"
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior UI Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Clearsense
              <br />
              Jacksonville Beach, FL
            </h4>
            <p>Details here.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date="May 2010 - June 2015"
            icon={<WorkOutlineIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Lead Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fanatics
              <br />
              Jacksonville, FL
            </h4>
            <p>Details here.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

export default Experience;
