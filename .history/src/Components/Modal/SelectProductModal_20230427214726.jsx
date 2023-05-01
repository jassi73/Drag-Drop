import { Box, Button } from "@mui/material";

import Duallist from "react-duallist";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

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
  const available = ["jassi", "done"];
  return (
    <Modal
      open={isSelectProductModal}
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={style}>
        <Duallist
          available={available}
          // selected={selected}
          // onMove={this.onMove}
          // leftLabel={leftLabel}
          // rightLabel={rightLabel}
          sortable={true}
          searchable={true}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button onClick={() => handleClose()}>Close</Button>
      </Box>
    </Modal>
  );
};

export default SelectProductModal;
