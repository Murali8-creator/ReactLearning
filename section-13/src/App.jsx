import { useState,memo } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigurationCounter from './components/Counter/ConfigurationCounter.jsx';

function App() {
  log('<App /> rendered');

  
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
  }

  

  return (
    <>
      <Header />
      <main>
       <ConfigurationCounter onSet={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0}/>
      </main>
    </>
  );
}

export default App;
