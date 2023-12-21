import React from 'react';
import BubbleSortApp from './components/BubblesortApp';
import './App.css';
import Visualisation from './components/Visualisation';

const App = () => {
  return (
    <div>
      <h1>Bubble Sort App</h1><br/>
      <BubbleSortApp /><br/><br/>
      <Visualisation />
    </div>
  );
};

export default App;
