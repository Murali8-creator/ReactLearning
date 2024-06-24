import React, { createContext, useContext } from 'react';
import { useAccordianContext } from './Accordion';
import AccordianTitle from './AccordianTitle';
import AccordianContent from './AccordianContent';



const AccordianItemContext = createContext();

export function useAccordianItemContext() {  
    const ctx = useContext(AccordianItemContext);
    
    if(!ctx){
        throw new Error('AccordionItem-related components must be wrapped by <Accordian.Item>')
    }
    return ctx;
}


const AccordionItem = ({id, className, children }) => {
 
  return (
    <>
    <AccordianItemContext.Provider value={id}>
    <li className={className}>{children}</li>
    </AccordianItemContext.Provider>
    </>
  );
};

export default AccordionItem;
