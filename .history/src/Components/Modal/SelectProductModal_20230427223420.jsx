import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import CheckboxList from "../ListItem";
import Duallist from "react-duallist";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const available = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const selected = [
    { label: "Alabama", value: "AL" },
    { label: "California", value: "CA" },
  ];
  const onMove = () => console.log("onMove");

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isSelectProductModal}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
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
