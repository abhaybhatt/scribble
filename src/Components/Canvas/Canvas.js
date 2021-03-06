import React, { useEffect, useRef, useState } from 'react'
import './Canvas.css'


const Canvas = ({ brush }) =>{
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const[isDrawing, setIsDrawing] = useState(false)

    useEffect(()=>{
        const canvas = canvasRef.current
        canvas.width = window.innerWidth ;
        canvas.height = window.innerHeight ;
        
        const context = canvas.getContext("2d")
        
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5
        contextRef.current = context
    },[])
    const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    
    contextRef.current.beginPath();
    
    if( contextRef.current.lineWidth !== brush.size){
      contextRef.current.lineWidth = brush.size
    }
    if (contextRef.current.strokeStyle !== brush.color) {
      contextRef.current.strokeStyle = brush.color;
    }
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
    return(
        <canvas 
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            />
    )
}
export default Canvas