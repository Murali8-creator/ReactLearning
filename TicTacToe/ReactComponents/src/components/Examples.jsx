import React from 'react';
import { TabButton } from './TabButton/TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';

export const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton) {
    
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = "please click any button";

  if(selectedTopic){
    tabContent = <>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </>;
  }
  return (
    <main>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => handleSelect('jsx')}
            isSelected={selectedTopic === 'jsx'}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => handleSelect('props')}
            isSelected={selectedTopic === 'props'}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => handleSelect('state')}
            isSelected={selectedTopic === 'state'}
          > 
            State
          </TabButton>
        </menu>
        <div id='tab-content'>{tabContent}</div>
      </section>
      <h2>Time to get started!</h2>
    </main>
  );
};
