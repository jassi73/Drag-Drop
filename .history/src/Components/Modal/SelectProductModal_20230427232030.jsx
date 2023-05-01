import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import CheckboxList from "../ListItem";
import Duallist from "react-duallist";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SelectProductModal = ({ isSelectProductModal, handleClose }) => {
  const onCancel = () => handleClose();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const available = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const selected = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isSelectProductModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Choose Products"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <ul>
            <li style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Checkbox
                  edge="start"
                  //  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  //  inputProps={{ "aria-labelledby": labelId }}
                />
                <Typography>Content</Typography>
              </div>
              <ul>
                <li>
                  <div>
                    <Checkbox
                      edge="start"
                      //  checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      //  inputProps={{ "aria-labelledby": labelId }}
                    />
                    <Typography>Content</Typography>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectProductModal;
