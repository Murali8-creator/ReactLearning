import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { useState } from 'react';
import { SelectedProject } from './components/SelectedProject';
import { Tasks } from './components/Tasks';
import { TaskContext } from './store/task-context';
import { ProjectContext } from './store/project-context';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

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

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected/>;
  } else {
    content = (
      <SelectedProject>
        <Tasks/>
      </SelectedProject>
    );
  }

  const taskCtxValue = {
    tasks : projectsState.tasks,
    addTask : handleAddTask,
    deleteTask : handleDeleteTask,
  }

  const projectCtxValue = {
    projects : projectsState.projects,
    createProject : handleCreateProject,
    addProject : handleAddProject,
    deleteProject : handleDeleteProject,
    selectProject : handleSelectProject,
    cancelProject : handleCancelAddProject,
    selectedProject : selectedProject,
  }

  return (
    <main className='h-screen flex gap-8'>
      
      <ProjectContext.Provider value={projectCtxValue}>
      <ProjectsSidebar />
    
      </ProjectContext.Provider>

      <ProjectContext.Provider value={projectCtxValue}>
      <TaskContext.Provider value={taskCtxValue}>
      {content}
      </TaskContext.Provider>
      </ProjectContext.Provider>

    </main>
  );
}

export default App;
