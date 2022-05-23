import React from 'react';
import './App.css';
import {GlowCheckbox} from "./components/";

function App() {
  return (
    <div className="App">
     <GlowCheckbox onChange={()=>{console.log('change')}}/>
    </div>
  );
}

export default App;
