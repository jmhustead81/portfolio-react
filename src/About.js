import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import "./About.css";

function About() {
  return (
    <div>
      <div id="nav-about" className="menu-anchor"></div>
      <Container fixed>
        <h1>About</h1>
        <LinearProgress color="secondary" />
        <Card>
          <CardContent>
            <Avatar
              alt="Jonathan Hustead"
              src="/images/profile.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Link
              href="https://www.linkedin.com/in/jmhustead"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://github.com/jmhustead81"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link href="#" title="Resume">
              <HistoryEduIcon fontSize="large" />
            </Link>
            <h3>
              A web programmer with an incessant drive for perfection, who
              excels at improving himself, his team, and company.
            </h3>
            <p>
              I've been creating websites and games since middle school. Out of
              necessity, I taught myself HTML, CSS, and SQL to get the word out
              of my latest projects. After countless hours of setting up remote
              servers over SSH, transferring files over SFTP, and configuring
              CMS settings in high school I decided to pursue my passion with
              formal college training. Ever since I graduated with my Masters,
              I've continued learning new web design best practices through
              books, forums, and conferences. Lately, e-commerce and stat
              dashboards have empowered me to help consumers and patients get
              the products and care they need - at the push of a button.
            </p>
            <h3>Specialities</h3>
            <h4>Web Development</h4>
            <p>
              Nearly two decades of experience, since the dawn of AOL to the
              dream of Web 3.0 and everything inbetween.
            </p>
            <h4>UI and UX Design</h4>
            <p>
              Built for the users, made for simplicity and elegance, and backed
              by the power of the latest web frameworks.
            </p>
            <h4>Unceasing Improvement</h4>
            <p>
              Interactions can always be easier, faster, and more intuitive. My
              endless mission is to identify how, and make it happen.
            </p>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default About;
