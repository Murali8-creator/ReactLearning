import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { Header } from './components/Header/Header.jsx';
import './index.css'

import { CoreConcepts } from './components/CoreConcepts.jsx';
import { Examples } from './components/Examples.jsx';

function App() {
  
  return (
    <div>
      <Header />
      <CoreConcepts/>
     <Examples/>
    </div>
  );
}

export default App;
