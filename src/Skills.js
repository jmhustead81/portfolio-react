import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import SkillBar from "react-skillbars";
import LinearProgress from "@mui/material/LinearProgress";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import "./Skills.css";

function Skills() {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 100 },
    { type: "jQuery", level: 100 },
    { type: "Bootstrap", level: 100 },
    { type: "KendoUI", level: 100 },
    { type: "MVC", level: 100 },
    { type: ".NET/Core", level: 90 },
    { type: "AngularJS", level: 85 },
    { type: "Wordpress", level: 65 },
    { type: "Photoshop", level: 50 },
    { type: "Linux", level: 50 },
    { type: "ReactJS", level: 35 },
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
      <div id="nav-skills" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <AutoGraphIcon
            className="header-icon"
            sx={{ width: 32, height: 32 }}
          />
          Skills
        </h1>
        <LinearProgress color="secondary" aria-label="skills-decorative" />
        <Card id="skills-card">
          <CardContent>
            <SkillBar
              skills={skills}
              colors={colors}
              animationDelay={500}
              height={20}
              animationDuration={1500}
            />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Skills;
