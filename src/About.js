import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import "./About.css";

function About() {
  return (
    <div>
      <Container fixed id="nav-about">
        <h1>About</h1>
        <LinearProgress color="secondary" />
        <Card>
          <CardContent>About me here.</CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default About;
