import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import "./About.css";

function About() {
  return (
    <div>
      <div id="nav-about" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <PsychologyAltIcon
            className="header-icon"
            sx={{ width: 32, height: 32 }}
          />
          About
        </h1>
        <LinearProgress color="secondary" name="about-decorative" />
        <Card>
          <CardContent>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar
                  alt="Jonathan Hustead"
                  src="/images/profile.jpg"
                  sx={{ width: 96, height: 96 }}
                />
                <Link
                  href="https://www.linkedin.com/in/jmhustead"
                  target="_blank"
                  rel="noreferrer"
                  className="about-btn"
                  title="Visit my LinkedIn Page"
                >
                  <LinkedInIcon sx={{ width: 28, height: 28 }} />
                </Link>
                <Link
                  href="https://github.com/jmhustead81"
                  target="_blank"
                  rel="noreferrer"
                  className="about-btn"
                  title="Visit my Public GitHub Repository"
                >
                  <GitHubIcon sx={{ width: 28, height: 28 }} />
                </Link>
                <Link
                  href="/docs/Resume_Jonathan-Hustead_Front-End-Software-Engineer.pdf"
                  target="_blank"
                  className="about-btn"
                  title="Download my Résumé"
                >
                  <FileDownloadIcon sx={{ width: 28, height: 28 }} />
                </Link>
              </Grid>
              <Grid item xs>
                <h3>
                  I am a front-end focused software engineer who will improve
                  your website by making it look nicer, run faster, and appeal
                  to a much larger audience in a much shorter timeframe than
                  you'd expect.
                </h3>
                <p>
                  I've been creating webpages since Web 1.0 in the late 1990's.
                  In middle school, I taught myself HTML, CSS, and basic
                  JavaScript so I could build websites to advertise my projects.
                  A few years later, I delved deeper into the setup process and
                  learned a bit of Linux so I could setup remote servers and PHP
                  to customize content management systems like Joomla. By the
                  end of high school, my passion for programming, configuring,
                  designing, and maintaining websites set my university path.
                  Formal classes and the emergence of Web 2.0 were vital to my
                  later understanding of usage patterns, accessibility (ADA
                  compliance), and responsive design. Over the past decade, I've
                  helped dozens of clients create hundreds of e-commerce,
                  statistical, professional, and personal webpages that do
                  everything from create online communities to share vital
                  statistics.
                </p>
                <h4>I'm excited to see what's next!</h4>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default About;
