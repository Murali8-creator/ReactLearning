import React from 'react'

export const Button = ({children,handleSave, ...props}) => {
  return (
    <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave} {...props}>{children}</button>
  );
}
