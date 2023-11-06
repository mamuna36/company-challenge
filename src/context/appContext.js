import React, { useState, createContext } from "react";
import projectsData from "../dataResources/project.json";
import userData from "../dataResources/user.json";
import deviceData from "../dataResources/device.json";

export const AppContext = createContext(null);

function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

const AppContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [users, setUsers] = useState(userData);
  const [devices, setDevices] = useState(deviceData);
  const deleteProject = (id) => {
    const updatedProjectList = projects.map((project) => {
      if (project.id === id) {
        const deletedProject = {
          ...project,
          deleted: 1,
        };
        return deletedProject;
      }
      return project;
    });
    setProjects(updatedProjectList.filter((item) => item.deleted !== 1));
  };
  const editProject = (id, updatedProjectData) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        const updatedProject = {
          ...updatedProjectData,
        };
        return updatedProject;
      }
      return project;
    });

    setProjects(updatedProjects);
  };
  const value = { users, devices, projects, deleteProject, editProject };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
