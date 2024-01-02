import React, { useState } from 'react';
import BubbleSortApp from './components/BubblesortApp';
import './App.css';
import Visualisation from './components/Visualisation';

const App = () => {
  const [sortedArray, setSortedArray] = useState([]);

  return (
    <div>
      <BubbleSortApp setSortedArray={setSortedArray} /> <br/><br/>
      <Visualisation sortedArray={sortedArray} />
    </div>
  );
};

export default App;