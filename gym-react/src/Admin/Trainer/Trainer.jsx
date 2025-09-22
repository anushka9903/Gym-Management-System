import { Box, IconButton, Modal } from "@mui/material";
import React from "react";
import AddTrainerForm from "./AddTrainerForm";
import TrainerTable from "./TrainerTable";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0',
    outline:"none",
    boxShadow: 24,
    p: 4,
  };
const Trainer = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="px-5 pt-10 py-5 lg:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">Trainers</h1>
        <IconButton onClick={handleOpen}>
          <i class="fas fa-pen"></i>
        </IconButton>
      </div>

      <div className="mt-10">
        <TrainerTable/>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddTrainerForm handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
};

export default Trainer;
