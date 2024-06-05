import {createContext, useContext, useState} from 'react';
import { ProjectContext } from './project-context';


export const TaskContext = createContext({
    tasks : [],
    addTask : () => {},
    deleteTask : () => {},
});

export default function TaskContextProvider({children}){
    const [projectsState, setProjectsState] = useState({
        tasks: [],
      });

      const {selectedProjectId} = useContext(ProjectContext);

      function handleAddTask(text) {
        setProjectsState((prevState) => {
          const taskId = Math.random();
          const newTask = {
            text: text,
            projectId: selectedProjectId,
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

      const taskCtxValue = {
        tasks : projectsState.tasks,
        addTask : handleAddTask,
        deleteTask : handleDeleteTask,
      }


      return <TaskContext.Provider value={taskCtxValue}>{children}</TaskContext.Provider>
}