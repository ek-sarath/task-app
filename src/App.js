import React, { useState } from 'react';
import BubbleSortApp from './components/BubblesortApp';
import './App.css';
import Visualisation from './components/Visualisation';

const App = () => {
  const [sortedArray, setSortedArray] = useState([]);

  return (
    <div>
      <h1>Bubble Sort App</h1><br />
      <BubbleSortApp setSortedArray={setSortedArray} /> <br/><br/>
      <Visualisation sortedArray={sortedArray} />
    </div>
  );
};

export default App;












// import React from 'react';
// import BubbleSortApp from './components/BubblesortApp';
// import './App.css';
// import Visualisation from './components/Visualisation';

// const App = () => {
//   return (
//     <div>
//       <h1>Bubble Sort App</h1><br/>
//       <BubbleSortApp /><br/><br/>
//       <Visualisation />
//     </div>
//   );
// };

// export default App;
