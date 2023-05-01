import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import CommentIcon from "@mui/icons-material/Comment";

export default function ListCheckBox() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          //  justifyContent: "",
        }}
      >
        <div style={{ display: "flex" }}>
          <Checkbox
            edge="start"
            //  checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            //  inputProps={{ "aria-labelledby": labelId }}
          />
          <Typography>Content</Typography>
        </div>
        <List sx={{ marginLeft: "40px" }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Checkbox
                edge="start"
                //  checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                //  inputProps={{ "aria-labelledby": labelId }}
              />
              <Typography>Content</Typography>
            </div>
          </ListItem>
        </List>
        <List sx={{ marginLeft: "40px" }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Checkbox
                edge="start"
                //  checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                //  inputProps={{ "aria-labelledby": labelId }}
              />
              <Typography>Content</Typography>
            </div>
          </ListItem>
        </List>
        <List sx={{ marginLeft: "40px" }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Checkbox
                edge="start"
                //  checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                //  inputProps={{ "aria-labelledby": labelId }}
              />
              <Typography>Content</Typography>
            </div>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
