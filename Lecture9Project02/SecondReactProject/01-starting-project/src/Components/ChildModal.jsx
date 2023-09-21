import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 0,
  px: 0,
  pb: 3,
};

export default function ChildModal({ openState, closeOpenState }) {
  const handleClose = () => {
    closeOpenState(false);
  };
  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
      <Modal
        open={openState}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            sx={{
              width: 800,
              height: 50,
              bgcolor: "#390641",
              color: "white",
            }}
          >
            <h2 id="child-modal-title">Invalid Input</h2>
          </Box>

          <p id="child-modal-description">Please enter valid name and age!!</p>
          <Button
            sx={{ bgcolor: "#390641", color: "white", textAlign: "right" }}
            onClick={handleClose}
          >
            Okey
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
