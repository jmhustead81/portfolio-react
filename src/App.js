import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
