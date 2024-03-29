import React from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Circles from './pages/loaders/Circles'
import Infinity from './pages/loaders/Infinity'
import Awesome from './pages/checkboxes/Awesome'
import Glow from './pages/checkboxes/Glow'
import Kbd from './pages/kbd/kbd'
import TestPage from './pages/Test/TestPage'
import { ClockPage } from './pages/clock/clockpage'
import { Footer, WaterContainer } from './components'
import { NeonPage } from './pages/neonPage/neonPage'
import { SliderPage } from './pages/slider/SliderPage'
import { ColoredFormPage } from './pages/coloredFormPage/ColoredFormPage'
import { DataPickerPage } from './pages/dataPicker/DataPickerPage'
import { CubesPage } from './pages/cubesPage/CubesPage'
import BowlPage from './pages/bowl/BowlPage'
import { GlowCubePage } from './pages/glowCube/GlowCubePage'
import { PineAnimatePage } from './pages/pineAnimatePage/pineAnimatePage'
import { CircularProgressPage } from './pages/circularProgress/circularProgressPage'
import Pixels from './pages/loaders/Pixels'
import {SolarSystem} from "./pages/SolarSystem/SolarSystem";
import {SpinnerPage} from "./pages/spinner/SpinnerPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='circles' element={<Circles />} />
          <Route path='pixels' element={<Pixels />} />
          <Route path='infinity' element={<Infinity />} />
          <Route path='awesome' element={<Awesome />} />
          <Route path='glow' element={<Glow />} />
          <Route path='kbd' element={<Kbd />} />
          <Route path='clock' element={<ClockPage />} />
          <Route path='test' element={<TestPage />} />
          <Route path='neon' element={<NeonPage />} />
          <Route path='slider' element={<SliderPage />} />
          <Route path='water' element={<WaterContainer text={'Water'} />} />
          <Route path='colored-form' element={<ColoredFormPage />} />
          <Route path='dp' element={<DataPickerPage />} />
          <Route path='cubes' element={<CubesPage />} />
          <Route path='glow-cube' element={<GlowCubePage />} />
          <Route path='bowl' element={<BowlPage />} />
          <Route path='pine' element={<PineAnimatePage />} />
          <Route path='cpb' element={<CircularProgressPage />} />
          <Route path='solar' element={<SolarSystem/>} />
          <Route path='spinner' element={<SpinnerPage/>} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  )
}

export default App

// {imageUrl && <img src={URL.createObjectURL(imageUrl)} alt=''/>}
