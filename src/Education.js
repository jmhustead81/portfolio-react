import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import SchoolIcon from "@mui/icons-material/School";
import "./Education.css";

function Education() {
  return (
    <div>
      <div id="nav-education" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <SchoolIcon className="header-icon" sx={{ width: 32, height: 32 }} />
          Education
        </h1>
        <LinearProgress color="secondary" name="education-decorative" />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element-education vertical-timeline-element-education-latest"
            date="2007"
            icon={<ManageAccountsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Management Information Systems
            </h4>
            <p>University of Central Florida, Orlando, FL</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2005"
            icon={<PermDeviceInformationIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Information Technology
            </h4>
            <p>University of Central Florida, Orlando, FL</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

export default Education;
