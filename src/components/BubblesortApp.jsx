import React, {useState} from 'react';
 
const BubbleSortApp = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState([]);
 
  const bubbleSort = (arr) => {
    return arr;
  };
 
  const handleSort = () => {
    const arrayToSort = inputArray.split(',').map(Number);
    const sorted = bubbleSort([...arrayToSort]);
    setSortedArray(sorted);
  };
 


  return (
    <div className='BubbleSort'>

      <label>
        Enter numbers : <input type="text" value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
      </label>
 
      <br/><br/>
 
      <label>
        Sort order : 
        <select>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </label>
 
      <br/><br/>
 
      <button onClick={handleSort}>Sort Array</button>
 
      <br/><br/><br/>
 
      <div>
        <strong>Sorted Array:</strong> {sortedArray.join(', ')}
      </div>
    </div>
  );
};
 
export default BubbleSortApp;