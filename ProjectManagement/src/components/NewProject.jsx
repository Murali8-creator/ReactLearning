import React from 'react'
import { Input } from './Input.jsx';

export const NewProject = () => {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
           <Input label="Title"/>
           <Input isTextArea label="Description"/>
           <Input label="Due Date"/>
           
        </div>
        </div>
  )
}

export default NewProject;