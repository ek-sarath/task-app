import React, { useState } from 'react';
 
const BubbleSortApp = () => {
  const [inputArray, setInputArray] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [sortedArray, setSortedArray] = useState([]);
 
  const bubbleSort = (arr, order) => {
    const n = arr.length;
    let swapped;
 
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if ((order === 'asc' && arr[i] > arr[i + 1]) || (order === 'desc' && arr[i] < arr[i + 1])) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
 
    return arr;
  };
 
  const handleSort = () => {
    const arrayToSort = inputArray.split(',').map(Number);
    const sorted = bubbleSort([...arrayToSort], sortOrder);
    setSortedArray(sorted);
  };
 
  return (
    <div className='BubbleSort'>
      <label>
        Enter numbers :
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
      </label> <br/><br/>
 
      <label>
        Sort order:
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label><br/><br/>
 
      <button onClick={handleSort}>Sort</button><br/><br/>
 
      <div>
        <strong>Sorted Array:</strong> {sortedArray.join(', ')}
      </div>
    </div>
  );
};
 
export default BubbleSortApp;