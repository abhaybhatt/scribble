import React, { useState } from 'react'
import './App.css';
import Canvas from './Components/Canvas/Canvas';
import Toolbar from './Components/Toolbar/Toolbar';

function App() {
  const[brush,setBrush] = useState({ color: "#030303", size: 5})
  console.log(brush)
  return (
    <div className="App">
      <Toolbar setBrush={setBrush} brush={brush} />
      <Canvas brush={brush} />
    </div>
  );
}

export default App;
