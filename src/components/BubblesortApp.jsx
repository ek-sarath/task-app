import React, { useState } from 'react';

const BubbleSortApp = ({setSortedArray}) => {
  const [inputArray, setInputArray] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedArray, setSortedArrayState] = useState([]);
  const [sortingTime, setSortingTime] = useState(0);

  const bubbleSort = async (arr, order) => {
    const start = performance.now();

    const n = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if ((order === 'asc' && arr[i] > arr[i + 1]) || (order === 'desc' && arr[i] < arr[i + 1])) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;

          await new Promise(resolve => setTimeout(resolve, 500));
          setSortedArrayState([...arr]);
        }
      }
    } while (swapped);

    const end = performance.now();
    setSortingTime(end - start);

    return arr;
  };

  const handleSort = async () => {
    const arrayToSort = inputArray.split(',').map(Number);
    const sorted = await bubbleSort([...arrayToSort], sortOrder);
    setSortedArray(sorted);
  };

  return (
    <div className='BubbleSort'>
      <label>
        Enter numbers:
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
      </label><br /><br />

      <button onClick={handleSort}>Sort</button> <br/><br/>

      <div>
        <strong>Sorted Array:</strong> {sortedArray.join(', ')}
      </div> <br/><br/>

      <div>
        <strong>Sorting Time:</strong> {sortingTime.toFixed(2)} ms
      </div>
    </div>
  );
};

export default BubbleSortApp;