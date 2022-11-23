import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Header.css";

const pages = [
  { name: "About", url: "#nav-about" },
  { name: "Skills", url: "#nav-skills" },
  { name: "Education", url: "#nav-education" },
  { name: "Projects", url: "#nav-projects" },
  { name: "Contact", url: "#nav-contact" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container fixed id="nav-header">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: "normal",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Jonathan Hustead's Online Portfolio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="main menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.url}
                    style={{
                      padding: "4px 12px",
                      color: "black",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {index === 0 ? <PsychologyAltIcon /> : ""}
                    {index === 1 ? <AutoGraphIcon /> : ""}
                    {index === 2 ? <SchoolIcon /> : ""}
                    {index === 3 ? <DeveloperBoardIcon /> : ""}
                    {index === 4 ? <ContactMailIcon /> : ""}
                    {page.name}
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: "normal",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Jonathan Hustead
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.url}
                  style={{
                    padding: "6px 4px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {index === 0 ? <PsychologyAltIcon /> : ""}
                  {index === 1 ? <AutoGraphIcon /> : ""}
                  {index === 2 ? <SchoolIcon /> : ""}
                  {index === 3 ? <DeveloperBoardIcon /> : ""}
                  {index === 4 ? <ContactMailIcon /> : ""}
                  {page.name}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
