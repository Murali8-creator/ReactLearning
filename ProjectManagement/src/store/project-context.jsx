import { createContext, useState } from "react";

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

export default function ProjectContextProvider({children}){
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
      });

      function handleSelectProject(id) {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: id,
          };
        });
      }
    
      function handleCreateProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: null,
          };
        });
      }
    
      function handleAddProject(projectData) {   
        setProjectsState((prevState) => {
          const newProject = {
            ...projectData,
            id: Math.random(),
          };
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: [...prevState.projects, newProject],
          };
        });
      }
    
      function handleCancelAddProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
          };
        });
      }
    
      function handleDeleteProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: prevState.projects.filter(
              (project) => project.id !== prevState.selectedProjectId
            ),
          };
        });
      }
    
      const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
      );

      const projectCtxValue = {
        projects : projectsState.projects,
        createProject : handleCreateProject,
        addProject : handleAddProject,
        deleteProject : handleDeleteProject,
        selectProject : handleSelectProject,
        cancelProject : handleCancelAddProject,
        selectedProject : selectedProject,
        selectedProjectId : projectsState.selectedProjectId,
      }

      return <ProjectContext.Provider value={projectCtxValue}>
        {children}
      </ProjectContext.Provider>
    
}