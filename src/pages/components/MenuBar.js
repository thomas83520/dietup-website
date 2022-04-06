import { Container, Typography, Box, Button, Divider,List,ListItem,ListItemIcon,ListItemText,Drawer } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import { useHistory,NavLink } from "react-router-dom";

const route = [
  { label: "Présentation", route: "/" },
  { label: "Tarifs", route: "/tarifs" },
  { label: "Roadmap", route: "/roadmap" },
  { label: "Contact", route: "/contact" },
];

const LinkBehavior = React.forwardRef((props, ref) => {
    return (
      <NavLink
        exact
        ref={ref}
        {...props}
        activeStyle={{
          color: "darkgreen",
          textDecoration:"underline"
        }}
      />
    );
});

export default function MenuBar() {
  const history = useHistory();


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {route.map((route) => (
          <ListItem key={route.label}>
            <Button
            LinkComponent={LinkBehavior}
            to={route.route}
            key={route.label}
            activeClassName="selected"
            >
              {route.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleClick = (page) => {
    history.push(page);
  };
  return (
    <Box>
      <Box
        position="relative"
        display="flex"
        p={2}
        justifyContent={{xs:"center",md:"space-between"}}
        alignItems="center"
      >
        <Logo />
        <Box
          position="absolute"
          sx={{left:"1%", transform: "translate(0%,0%)" }}
          display={{ xs: "flex", md: "none" }}
        >
        
          <MenuIcon onClick={toggleDrawer('left', true)}/>
          <Drawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </Box>
        <Box display={{ xs: "none", md: "flex" }}>
          {route.map((route) => (
            <Button
            LinkComponent={LinkBehavior}
            to={route.route}
            key={route.label}
            activeClassName="selected"
            >
              {route.label}
            </Button>
          ))}
          <Button href="https://app.dietup.fr/" target="_blank" variant="contained" size="small" px={2}>
            Espace pro
          </Button>
        </Box>
      </Box>

      <Divider light />
    </Box>
  );
}
