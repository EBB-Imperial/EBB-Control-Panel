import React from 'react';

function Maze(props) {
  const mazeMatrix = props.td;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <div>
          {mazeMatrix.map((row, rowIndex) => (
            <div key={rowIndex} style={{ lineHeight: '0' }}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: cell === 1 ? 'black' : 'white',
                    margin: '0',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Maze;
