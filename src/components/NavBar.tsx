import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  const handleMenuItemClick = () => {
    toggleDrawer(false);
  };

  const list = () => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1300,
        transition: "transform 0.3s ease-in-out",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(false)} sx={{ alignSelf: "flex-end", marginBottom: 2 }}>
        <CloseIcon sx={{ fontSize: 40, color: "white" }} />
      </IconButton>

      <List
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {["Home", "Vision", "Mission", "The Future", "Why VR Matters", "HapSphere", "More Products"].map((text) => {
          const id = text.toLowerCase().replace(/\s+/g, "-");

          return (
            <ListItem key={id} disablePadding>
              <ListItemButton
                sx={{
                  padding: 2,
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                component="a"
                href={`#${id}`} // Use the processed ID for href
                onClick={handleMenuItemClick}
              >
                <ListItemText primary={text} sx={{ textAlign: "center", color: "white" }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: 4,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1200,
        }}
      >
        <img src="/assets/Logo-icon.svg" alt="Logo" style={{ height: 30 }} />

        <div style={{ flexGrow: 1 }} />

        <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)} aria-label="menu" sx={{ color: "white" }}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 2,
          }}
        >
          {list()}
        </Box>
      )}
    </div>
  );
};

export default NavBar;
