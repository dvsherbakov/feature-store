import React from 'react';
import './App.css';

import {GlowingButton} from "./components";


function App() {
    return (
        <div className="App">
            <GlowingButton color={'#1e9bff'} title={'Some title'}/>
            <GlowingButton color={'#6eff3e'} title={'Other title'}/>
        </div>
    );
}

export default App;
