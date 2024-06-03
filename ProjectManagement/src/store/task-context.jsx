import {createContext} from 'react';


export const TaskContext = createContext({
    tasks : [],
    addTask : () => {},
    deleteTask : () => {},
});

export default function TaskContextProvider(){
    
}