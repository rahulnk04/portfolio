import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import RahulLogo from "../../../images/RahulLogo.png";
import { useNavigate } from "react-router-dom";

const pages = [
  { page: "Home", link: "/home" },
  { page: "Resume", link: "/resume" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Fragment>
      <AppBar position="sticky" sx={{ background: "slateblue" }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="dense">
            <Avatar
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                width: 76,
                height: 26,
              }}
              alt="Remy Sharp"
              src={RahulLogo}
              variant="rounded"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                {pages.map((page, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(page.link);
                    }}
                  >
                    <Typography textAlign="center">{page.page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              sx={{
                // flexGrow: 1,
                display: { xs: "flex", md: "none" },
                width: "90px",
                height: "30px",
              }}
              alt="Remy Sharp"
              src={RahulLogo}
              variant="rounded"
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.link);
                  }}
                  sx={{ color: "white", display: "block" }}
                >
                  {page.page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
