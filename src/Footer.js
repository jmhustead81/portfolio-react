import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <Container fixed>
          <div>Copyright © {new Date().getFullYear()} Jonathan Hustead.</div>
          <Typography align="center" variant="caption">
            Site design inspired by the&nbsp;
            <Link
              href="https://www.planetside2.com/empires?empire=vs"
              target="_blank"
              rel="noreferrer"
              title="Vanu Sovereignty"
            >
              Vanu Sovereignty
            </Link>
            .
          </Typography>
          <Typography
            align="center"
            variant="caption"
            id="footer-madewith-link"
          >
            &nbsp;&nbsp;Built with&nbsp;
            <Link
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              title="React"
            >
              React
            </Link>
            .
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
