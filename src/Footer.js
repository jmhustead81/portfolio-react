import Container from "@mui/material/Container";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <Container fixed>
          <p>
            Copyright © {new Date().getFullYear()} Jonathan Hustead. All rights
            reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
