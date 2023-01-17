import { useEffect } from 'react';

export default function useDrawCanvas(
  canvasRef,
  width,
  height
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawCanvas(context, width, height);
  }, [canvasRef, width, height]);
}

function drawCanvas(context, width, height) {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, width, height);
}
