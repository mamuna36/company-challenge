import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useAppContext } from "./context/appContext";
import FormControl from "@mui/material/FormControl";

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

const EditProjectModal = ({ editModal, setEditModal, projectToEdit }) => {
  const handleClose = () => setEditModal(false);
  const { editProject } = useAppContext();
  const [formData, setFormData] = useState(projectToEdit);
  return (
    <Modal
      keepMounted
      open={editModal}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style} component="form">
        <div>
          <FormControl>
            <TextField
              id="outlined-helperText"
              label="project-title"
              defaultValue={formData.title}
              name="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </FormControl>
        </div>
        <div>
          <DatePicker
            label="begin-date"
            dateFormat='DD/MM/YYYY'
            value={dayjs(projectToEdit.beginDate)}
            onChange={(newValue) => {
              setFormData({ ...formData, beginDate: dayjs(newValue) });
            }}
          />
          <DatePicker
            label="expiration-date"
            dateFormat='DD/MM/YYYY'
            value={dayjs(projectToEdit.expirationDate)}
            onChange={(newValue) => {
              setFormData({ ...formData, expirationDate: dayjs(newValue) });
            }}
          />
        </div>
        <div>
          <Button
            size="small"
            onClick={() => {
              editProject(projectToEdit.id, { ...formData });
              setEditModal(false);
            }}
          >
            edit
          </Button>
          <Button size="small" onClick={() => setEditModal(false)}>
            cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditProjectModal;
