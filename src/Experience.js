import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <div id="nav-experience" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <WorkHistoryIcon
            className="header-icon"
            sx={{ width: 32, height: 32 }}
          />
          Experience
        </h1>
        <LinearProgress color="secondary" name="experience-decorative" />
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
            <p>
              Oversee all UI and UX design elements by working directly with
              development and design teams. Set page templates and design
              patterns for team. Create full front-end layouts and architecture
              using .NET, .NET Core, MVC, AngularJS, jQuery, and KendoUI.
              Prototype functionality with stakeholders before connecting to
              APIs to pull real data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            date="June 2016 - June 2018"
            icon={<NextWeekIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Marketing Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Optimum Healthcare IT
              <br />
              Jacksonville, FL
            </h4>
            <p>
              Paired with the Creative Director and worked on internal and
              external sites using jQuery, HTML, CSS, and PHP with Wordpress.
            </p>
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
              Jacksonville, FL
            </h4>
            <p>
              Helped a startup team by establishing and making UI and UX
              elements to show to stakeholders using AngularJS, MVC, and jQuery.
            </p>
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
            <p>
              Worked directly with IT, design, SEO, and marketing teams to
              establish design and layout needs. Created prototype pages and
              styles to establish brands across hundreds of sports merchandise
              e-commerce stores.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

export default Experience;
