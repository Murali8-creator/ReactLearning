import React, { useState } from 'react'
import { useContext } from 'react';
import { TaskContext } from '../store/task-context';

export const NewTask = () => {
   const addTaskCtx = useContext(TaskContext);
  
   const [enteredTask, setEnteredTask] =  useState('');

   function handleChange(e){
    setEnteredTask(e.target.value);
   }
   function handleClick(){
    if(enteredTask.trim()===''){
        return;
    }
    addTaskCtx.addTask(enteredTask);   
    setEnteredTask("");
   }
  return (
    <div className='flex items-center gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask} onChange={handleChange}/>
        <button onClick={handleClick} className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}
