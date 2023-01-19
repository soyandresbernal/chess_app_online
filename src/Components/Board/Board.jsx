import React, { useState, useEffect, useRef } from 'react';
import './Board.css';

const Board = () => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(800);

  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    drawBoard(ctx, width, height);
  }, [width, height]);

  return (
    <div className='Board-Wrapper'>
      <h1 className='text-3xl relative w-full h-full'>
        Chess Tactic
      </h1>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className='absolute w-full h-full grid grid-cols-8 grid-rows-8'
      ></canvas>
      <div className='absolute w-full h-full grid grid-cols-8 grid-rows-8'>
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className={`col-span-1 row-span-1 ${
              (i + Math.floor(i / 8)) % 2 === 0
                ? 'bg-white'
                : 'bg-black'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

function drawBoard(ctx, width, height) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      ctx.fillStyle = (i + j) % 2 === 0 ? 'white' : 'black';
      ctx.fillRect(i * 100, j * 100, 100, 100);
    }
  }
}

export default Board;
