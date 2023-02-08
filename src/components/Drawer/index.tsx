import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

interface Props {
  links: string[];
}

export default function DrawerComp(props: Props) {
  const [openDrawer, SetOpenDrawer] = useState(false);

  const { links } = props;
  return (
    <>
      <Drawer PaperProps={{sx:{background:"rgba(107,117,214,0.9192051820728291)"}}}
        sx={{ background: "rgba(103,82,187,0.9023984593837535)" }}
        open={openDrawer}
        onClose={() => SetOpenDrawer(false)}
      >
       
        <List>
          {links.map((value, index) => {
            return (
            <ListItemButton key={index} divider sx={{background:" rgba(107,117,214,0.9192051820728291)"}}>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}}>{value}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            )
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => SetOpenDrawer(!openDrawer)}>
        <MenuOutlinedIcon sx={{ color: "white" }}></MenuOutlinedIcon>
      </IconButton>
    </>
  );
}
