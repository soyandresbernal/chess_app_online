import React, { useState, useEffect, useRef } from 'react';
import useDrawCanvas from './DrawCanvas';
import { initBoardMatrix } from './BoardMatrix';
import './Board.css';

const Board = () => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(800);

  const canvasRef = useRef(null);
  useEffect(() => {
    initBoardMatrix();
  }, []);
  useDrawCanvas(canvasRef, width, height);

  return (
    <div className='Board-Wrapper'>
      <h1>chess Tactic</h1>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default Board;
