import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { alpha } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorElSettings, setAnchorElSettings] = React.useState(null);

  const openProfile = Boolean(anchorElProfile);
  const openNotifications = Boolean(anchorElNotifications);
  const openSettings = Boolean(anchorElSettings);

  const handleProfileClick = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleNotificationsClick = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };
  const handleSettingsClick = (event) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElProfile(null);
    setAnchorElNotifications(null);
    setAnchorElSettings(null);
  };

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction={"row"}>
          {theme.palette.mode === "light" ? (
            <Tooltip title="Switch to Dark Mode">
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
              >
                <LightModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Switch to Light Mode">
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}

          {/* Notifications Menu */}
          <Tooltip title="Check notifications">
            <IconButton
              color="inherit"
              onClick={handleNotificationsClick}
            >
              <NotificationsOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElNotifications}
            open={openNotifications}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'notifications-button',
            }}
          >
            <MenuItem onClick={handleClose}>invoices</MenuItem>
            <MenuItem onClick={handleClose}>latest notifications</MenuItem>
            <MenuItem onClick={handleClose}>View all notifications</MenuItem>
          </Menu>

          {/* Settings Menu */}
          <Tooltip title="Edit settings">
            <IconButton
              color="inherit"
              onClick={handleSettingsClick}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElSettings}
            open={openSettings}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'settings-button',
            }}
          >
            <MenuItem onClick={handleClose}>Language</MenuItem>
            <MenuItem onClick={handleClose}>Preferences</MenuItem>
            <MenuItem onClick={handleClose}>Manage settings</MenuItem>
          </Menu>

          {/* Profile Menu */}
          <Button
            id="basic-button"
            aria-controls={openProfile ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            onClick={handleProfileClick}
            sx={{ color: "inherit", width: "inherit" }}
          >
            <IconButton color="inherit">
              <Tooltip title="Your profile">
                <Person2OutlinedIcon />
              </Tooltip>
            </IconButton>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElProfile}
            open={openProfile}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

