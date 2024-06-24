import React from 'react'
import { useAccordianContext } from './Accordion'
import { useAccordianItemContext } from './AccordionItem';

const AccordianContent = ({children}) => {
  const {openItemId} = useAccordianContext();
  const id = useAccordianItemContext();

  const isOpen = openItemId === id;
  return (
    <>
     <div className={`accordion-item-content ${isOpen ? 'open' : ''}`}>{children}</div>
    </>
  )
}

export default AccordianContent