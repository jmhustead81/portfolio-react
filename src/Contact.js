import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div id="nav-contact" class="menu-anchor"></div>
      <Container fixed>
        <h1>Contact</h1>
        <LinearProgress color="secondary" />
        <Card>
          <CardContent>Contact me here.</CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
