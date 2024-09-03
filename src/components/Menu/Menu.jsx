import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DashboardMenus } from "../../constants/DashboardMenus";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const [activeSubMenu, setActiveSubMenu] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon color="primary" />
          </IconButton>
        </DrawerHeader>

        <List>
          {DashboardMenus.map((text, index) => (
            <ListItem
              key={text.title}
              disablePadding
              sx={{
                display: "block",
                backgroundColor: index === activeSubMenu ? "#2f2f2f" : "unset",
              }}
            >
              <ListItemButton
                onClick={() => {
                  if (open && activeSubMenu?.title === text?.title) {
                    setActiveSubMenu(null);
                  }
                  setActiveSubMenu(text);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "between",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <text.icon />
                </ListItemIcon>
                <ListItemText
                  primary={text.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {text.hasChildren && open && (
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        position: "absolute",
                        right: "-10px",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <ArrowDropDownIcon />
                  </ListItemIcon>
                )}
              </ListItemButton>
              {activeSubMenu?.title === text?.title &&
                open &&
                (console.log(text, activeSubMenu),
                (
                  <>
                    {activeSubMenu.childrenMenu.map((subText, subIndex) => (
                      <ListItemButton
                        key={subText.title}
                        sx={[
                          {
                            minHeight: 48,
                            px: 2.5,
                          },
                        ]}
                      >
                        <ListItemText
                          primary={subText.title}
                          sx={[
                            open
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                        />
                      </ListItemButton>
                    ))}
                  </>
                ))}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

// import React, { useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import {
//   Box,
//   IconButton,
//   List,
//   ListItemButton,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { useStyles } from "./useStyles";
// import ReusableCard from "../ReusableCard/ReusableCard";
// import { DashboardMenus } from "../../constants/DashboardMenus";
// import MenuIcon from "@mui/icons-material/Menu";

// function Sidebar({ drawerOpen, setDrawerOpen }) {
//   const styles = useStyles();
//   const theme = useTheme();
//   const [activeMenuItem, setActiveMenuItem] = useState(0);

//   const handleDrawerOpen = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <>
//       <Drawer
//         sx={{
//           width: drawerOpen ? 300 : 70,
//           flexShrink: 0,
//           height: "100vh",

//           "& .MuiDrawer-paper": {
//             height: "100vh",
//             width: drawerOpen ? 300 : 70,
//             background: "#000111",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={drawerOpen}
//       >
//         <List className="overflow-hidden">
//           <IconButton
//             color="secondary"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className="absolute right-2"
//           >
//             <MenuIcon />
//           </IconButton>

//           {drawerOpen ? (
//             <ReusableCard
//               className="bg-gradient-to-r from-[#1d1d1d] to-[#363636] h-[82px] mx-[16px] flex flex-row items-center relative mt-12 !mb-[12px]"
//               sx={styles.accountCard}
//             >
//               <Box className="flex flex-col">
//                 <Typography variant="boldH4">Website Dashboard</Typography>
//                 <Box className="flex flex-row justify-between">
//                   <Typography
//                     variant="subHeading2"
//                     color={theme.palette.primary.white}
//                   >
//                     Panel
//                   </Typography>
//                 </Box>
//               </Box>
//             </ReusableCard>
//           ) : null}
//           {drawerOpen ? (
//             <Box className="h-[70vh] overflow-y-auto">
//               {DashboardMenus.map((item, index) => {
//                 return (
//                   <ListItemButton
//                     key={item.route}
//                     onClick={() => setActiveMenuItem(index)}
//                     className={`h-[56px] px-6 ${
//                       index === activeMenuItem ? "bg-slate-800" : ""
//                     }`}
//                   >
//                     <item.icon />
//                     <Typography
//                       variant="semiBoldH4"
//                       className="ml-4"
//                       color={theme.palette.primary.white}
//                     >
//                       {item.title}
//                     </Typography>
//                   </ListItemButton>
//                 );
//               })}
//             </Box>
//           ) : null}
//         </List>
//       </Drawer>
//     </>
//   );
// }

// export default Sidebar;
