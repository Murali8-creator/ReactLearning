import React from 'react'

import { CORE_CONCEPTS } from '../data'
import Concept from './Concept/Concept.jsx'

export const CoreConcepts = () => {
  return (
    <>
    <section id='core-concepts'>
    <ul>

      {CORE_CONCEPTS.map((conceptItem) => (<Concept key={conceptItem.title} {...conceptItem} />))}
      {/* <Concept
        image={CORE_CONCEPTS[0].image}
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
      />
      <Concept {...CORE_CONCEPTS[1]} />
      <Concept {...CORE_CONCEPTS[2]} />
      <Concept {...CORE_CONCEPTS[3]} />
     */}
    </ul>
  </section>
  </>
  )
}
