import React from "react";
import Project from "./Item";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useAppContext } from "./context/appContext";

const ItemsList = ({
  openEditModal,
  setProjectToEdit
}) => {
  const {projects } = useAppContext();
  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={2} p={4}>
        {projects.map((project) => {
          return (
            <Project
            project={project}
              key={project.id}
              openEditModal={openEditModal}
              setProjectToEdit={setProjectToEdit}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemsList;
