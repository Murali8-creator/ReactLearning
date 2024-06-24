import React, { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordianTitle from './AccordianTitle';
import AccordianContent from './AccordianContent';

const AccordianContext = createContext();

export function useAccordianContext(){
    const ctx = useContext(AccordianContext);

    if(!ctx){
        throw new Error('Accordion-related components must be wrapped by <Accordian>')
    }

    return ctx;
}

const Accordion = ({ children, className }) => {

    const [openItemId, setOpenItemId] = useState();

    function toggleItem(id){
        setOpenItemId(prevId => prevId === id ? null : id);
    }
    
    const contextValue = {
        openItemId,
        toggleItem,
    }

  return (
    <>
      <AccordianContext.Provider value={contextValue}>
        <ul className={className}>{children}</ul>
      </AccordianContext.Provider>
    </>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordianTitle;
Accordion.Content = AccordianContent;

export default Accordion;
