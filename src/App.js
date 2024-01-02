import React from 'react';
import './App.css';
import BubbleSortApp from './components/BubblesortApp';
import Visualisation from './components/Visualisation';

const App = () => {

  return (
    <div>
      <BubbleSortApp/> <br/>
      <Visualisation/>
    </div>
  );
};

export default App;