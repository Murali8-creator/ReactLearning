import {createContext, useState} from 'react';


export const TaskContext = createContext({
    tasks : [],
    addTask : () => {},
    deleteTask : () => {},
});

export default function TaskContextProvider({children}){
    const [projectsState, setProjectsState] = useState({
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

      const taskCtxValue = {
        tasks : projectsState.tasks,
        addTask : handleAddTask,
        deleteTask : handleDeleteTask,
      }


      return <TaskContext.Provider value={taskCtxValue}>{children}</TaskContext.Provider>
}