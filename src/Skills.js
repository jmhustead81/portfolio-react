import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import SkillBar from "react-skillbars";
import LinearProgress from "@mui/material/LinearProgress";
import "./Skills.css";

function Skills() {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 100 },
    { type: "Javascript", level: 100 },
    { type: "jQuery", level: 100 },
    { type: "Bootstrap", level: 100 },
    { type: "MVC", level: 100 },
    { type: "AngularJS", level: 85 },
    { type: ".NET / Core", level: 85 },
    { type: "APIs", level: 75 },
    { type: "Razor Views", level: 75 },
    { type: "Responsive", level: 100 },
    { type: "Cross-browser", level: 100 },
    { type: "Agile", level: 100 },
    { type: "SCRUM", level: 100 },
    { type: "E-commerce", level: 70 },
    { type: "Wordpress", level: 65 },
    { type: "Photoshop", level: 50 },
    { type: "ReactJS", level: 25 },
    { type: "PHP", level: 25 },
  ];

  const colors = {
    bar: "#018a5c",
    title: {
      text: "#20a0a1",
      background: "#180350",
    },
  };

  return (
    <div>
      <div id="nav-skills" class="menu-anchor"></div>
      <Container fixed>
        <h1>Skills</h1>
        <LinearProgress color="secondary" />
        <Card>
          <CardContent>
            <SkillBar
              skills={skills}
              colors={colors}
              height={20}
              animationDuration={2000}
            />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Skills;
