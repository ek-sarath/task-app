import React from 'react';
import {useSelector} from 'react-redux';

const Visualisation = () => {
  const maxBarHeight = 200;
  const barWidth = 30;
  const sortedArray = useSelector((state)=>state.bubble.array)
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    height: `${maxBarHeight}px`,
  };

  return (
    <div className='Visualisation'>
      <h1>Visualization</h1>
      <div style={containerStyle}>
        {sortedArray?.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${(value / Math.max(...sortedArray)) * maxBarHeight}px`,
              width: `${barWidth}px`,
              backgroundColor: '#3498db',
              margin: '0 5px',
              display: 'inline-block',
            }}
          >
            {value}
          </div>
        ))}
      </div> <br/>
    </div>
  );
};

export default Visualisation;