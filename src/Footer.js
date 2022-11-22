import Container from "@mui/material/Container";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <Container fixed id="nav-footer">
          <p>
            Copyright © {new Date().getFullYear()} Jonathan Hustead. All rights
            reserved.
          </p>
          <div>
            Made using:
            <ul>
              <li>React: https://reactjs.org/</li>
              <li>Create React App: https://create-react-app.dev/</li>
              <li>Material UI: https://mui.com/</li>
              <li>
                React Skillbars: https://crisboarna.github.io/react-skillbars/
              </li>
              <li>
                React Vertical Timeline:
                https://www.npmjs.com/package/react-vertical-timeline-component
              </li>
              <li>LightGallery: https://www.lightgalleryjs.com/</li>
            </ul>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
