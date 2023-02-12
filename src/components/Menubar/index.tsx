import { ArrowDropDown } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkItem } from "../../shared/styled";
import DrawerComp from "../Drawer";

export default function MenubarAlternative() {
  const [chosenTab, SetChosenTab] = useState(null);

  const navigate = useNavigate()

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const links = [
    <LinkItem to="/dashboards/indicators">Dashboards</LinkItem>,
    <LinkItem to="/signup">Sienge</LinkItem>,
    <LinkItem to="/signup">Contato</LinkItem>,
  ];
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  type TMenuItems = {
    Dashboards: string[],
    Sienge: string[]
  }

  const menuItems = {
    Dashboards: [
      {
        title: "Comercial/Marketing",
        path: "/dashboards/comercial",
        cName: "dropdown-link",
      },
      {
        title: "Indicadores de Segurança",
        path: "/dashboards/indicadores",
        cName: "dropdown-link",
      },
    ],
    Sienge: [
      {
        title: "Notas Fiscais",
        path: "/invoices",
        cName: "dropdown-link",
      },
      {
        title: "Títulos",
        path: "/titles",
        cName: "dropdown-link",
      },
    ],
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(41,109,189,1) 9%, rgba(107,117,214,0.9192051820728291) 52%, rgba(103,82,187,0.9023984593837535) 100%)",
        }}
      >
        <Toolbar>
          <Grid
            container
            sx={{ placeItems: "center", justifyContent: "space-between" }}
          >
            {isMatch ? (
              <Grid xs={2} container>
                <DrawerComp links={links} />
              </Grid>
            ) : (
              <Grid xs={5} display="flex" sx={{ mr: "auto" }}>
                {Object.keys(menuItems).map((item, index) => (
                  <>
                    <Button
                      color="inherit"
                      onClick={(e) => handleClick(index, e)}
                    >
                      {item} <ArrowDropDown></ArrowDropDown>
                    </Button>
                    <Menu
                      anchorEl={anchorEl && anchorEl[index]}
                      keepMounted
                      open={anchorEl && Boolean(anchorEl[index])}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      {menuItems[item as keyof TMenuItems].map((menuitems, menuindex) => (
                        <MenuItem
                          key={menuindex}
                          onClick={() => {
                            handleClose()
                            navigate(menuitems.path)
                          }
                          }
                        >
                          {menuitems.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ))}
              </Grid>
            )}

            <Grid item xs={2}>
              <Box display="flex">
                <Button variant="contained" sx={{ ml: "auto" }}>
                  Logout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
