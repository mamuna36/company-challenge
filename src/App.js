import "./App.css";
import { useState } from "react";
import ItemsList from "./ItemsList";
import EditProjectModal from "./EditProjectModal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppContextProvider } from "./context/appContext";

function App() {
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [editModal, setEditModal] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <AppContextProvider>
          <ItemsList
            openEditModal={setEditModal}
            setProjectToEdit={setProjectToEdit}
          />
          {editModal && (
            <EditProjectModal
              editModal={editModal}
              setEditModal={setEditModal}
              projectToEdit={projectToEdit}
            />
          )}
        </AppContextProvider>
      </div>
    </LocalizationProvider>
  );
}

export default App;
