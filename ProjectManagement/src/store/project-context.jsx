import { createContext } from "react";

export const ProjectContext = createContext({
    projects:[],
    SelectedProjectId : undefined,
    createProject : () => {},
    addProject: () => {},
    deleteProject: () => {},
    selectProject: () => {},
    cancelProject: () => {},
    selectedProject:undefined,
});