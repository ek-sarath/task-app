import React from 'react';

const Visualisation = ({ sortedArray }) => {
  const maxBarHeight = 200;
  const barWidth = 30;

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    height: `${maxBarHeight}px`,
  };

  return (
    <div className='Visualisation'>
      <h1>Visualisation</h1>
      <h3>Graphical Representation</h3><br/>
      <div style={containerStyle}>
        {sortedArray.map((value, index) => (
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
      </div> <br/><br/>
    </div>
  );
};

export default Visualisation;






















// import React from 'react';

// const Visualisation = ({sortedArray}) => {
//   const maxBarHeight = 100;
//   const barWidth = 30;

//   return (
//     <div className='Visualisation'>
//       <h1>Visualisation</h1>
//       <h3>Graphical Representation</h3>
//       <div style={{ display: 'flex' }}>
//         {sortedArray.map((value, index) => (
//           <div
//             key={index}
//             style={{
//               height: `${(value / Math.max(...sortedArray)) * maxBarHeight}px`,
//               width: `${barWidth}px`,
//               backgroundColor: '#3498db',
//               margin: '0 5px',
//               display: 'inline-block',
//             }}
//           >
//             {value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Visualisation;














