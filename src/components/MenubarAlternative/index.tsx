import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

export default function MenubarAlternative() {
  const [chosenTab, SetChosenTab] = useState(null);
  const links = ["Títulos", "Notas Fiscais", "Logout"];
  return (
    <>
      <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(41,109,189,1) 9%, rgba(107,117,214,0.9192051820728291) 52%, rgba(103,82,187,0.9023984593837535) 100%)"}}>
        <Toolbar >
          <Grid container sx={{placeItems:"center", justifyContent:"space-between"}}>
            <Grid xs={2} container gap={1}>
              <MenuOutlinedIcon></MenuOutlinedIcon>
              <Typography>Menu</Typography>
            </Grid>
            <Grid xs={5}>
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
            <Grid item xs={2}  >
              <Box display="flex">
                <Button variant="contained" sx={{ml:"auto"}} >Login</Button>
                <Button variant="contained" sx={{ml:1}}>Signup</Button>
              </Box>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
