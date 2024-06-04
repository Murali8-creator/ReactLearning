import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { useContext, useState } from 'react';
import { SelectedProject } from './components/SelectedProject';
import { Tasks } from './components/Tasks';
import TaskContextProvider, { TaskContext } from './store/task-context';
import ProjectContextProvider, {
  ProjectContext,
} from './store/project-context';

function App() {
 

  function Content() {
    const projectCtx = useContext(ProjectContext);
    const { selectedProjectId } = projectCtx;
    
    let content;
    if (selectedProjectId === null) {
      content = <NewProject />;
    } else if (selectedProjectId === undefined) {
      content = <NoProjectSelected />;
    } else {
      content = (
        <SelectedProject>
          <Tasks />
        </SelectedProject>
      );
    }

    return (
      <>
      {content}
      </>
    )
  }

  return (
    <main className='h-screen flex gap-8'>
      <ProjectContextProvider>
        <ProjectsSidebar />
        <TaskContextProvider>
          <Content />
        </TaskContextProvider>
      </ProjectContextProvider>
    </main>
  );
}

export default App;
