import SkillBar from "react-skillbars";
import "./Skills.css";

function Skills() {
  const skills = [
    { type: "Java", level: 100 },
    { type: "React", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Spring", level: 50 },
    { type: "Docker", level: 25 },
    { type: "HTML", level: 20 },
    { type: "NoSQL", level: 0 },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <div>
      <h1>Skills</h1>
      <SkillBar skills={skills} colors={colors} height={15} />
    </div>
  );
}

export default Skills;
