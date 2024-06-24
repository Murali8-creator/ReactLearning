import React from 'react';
import { useAccordianContext } from './Accordion';
import { useAccordianItemContext } from './AccordionItem';

const AccordianTitle = ({ children}) => {
    const {toggleItem} = useAccordianContext();
    const id = useAccordianItemContext();

  return (
    <>
      <h3 className='accordion-item-title' onClick={() => toggleItem(id)}>
        {children}
      </h3>
    </>
  );
};

export default AccordianTitle;
