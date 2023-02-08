import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import DrawerComp from "../Drawer";

export default function MenubarAlternative() {
  const [chosenTab, SetChosenTab] = useState(null);

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const links = ["Títulos", "Notas Fiscais", "Histórico"];
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
              <Grid xs={5} display="flex" sx={{ mr:"auto" }}>
                <Tabs
                  textColor="inherit"
                  indicatorColor="secondary"
                  value={chosenTab}
                  onChange={(e, tabValue) => SetChosenTab(tabValue)}
                >
                  {links.map((value) => {
                    return <Tab label={value} />;
                  })}
                </Tabs>
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
