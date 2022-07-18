import React from 'react';
import './App.css';
import {Outlet, Route, Routes} from "react-router";
import {Link} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Circles from "./pages/loaders/Circles";
import Infinity from "./pages/loaders/Infinity";
import Awesome from "./pages/checkboxes/Awesome";
import Glow from "./pages/checkboxes/Glow";
import Kbd from "./pages/kbd/kbd";
import TestPage from "./pages/Test/TestPage";
import {ClockPage} from "./pages/clock/clockpage";
import {Footer} from "./components";


function App() {
    return (<div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='circles' element={<Circles/>}/>
                <Route path='infinity' element={<Infinity/>}/>
                <Route path='awesome' element={<Awesome/>}/>
                <Route path='glow' element={<Glow/>}/>
                <Route path='kbd' element={<Kbd/>}/>
                <Route path={'clock'} element={<ClockPage/>}/>
                <Route path='test' element={<TestPage/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>

        </Routes>
    </div>);
}

function Layout() {
    return ((<>
            <Outlet/>
            <Footer/>
        </>)
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;
