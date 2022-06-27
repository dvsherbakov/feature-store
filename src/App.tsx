import React from 'react';
import './App.css';
import {LoginForm} from "./components";
import {CenterViewContainer} from "./components/Containers/CenterViewContainer";


function App() {
    return (<div className="App">
        <CenterViewContainer background={'#1d2b3a'}>
            <LoginForm/>
        </CenterViewContainer>
    </div>);
}

export default App;
