/* React */
// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* Components */
import Navbar from './components/Navbar/Navbar'
import Stepper from './components/Form/Stepper'
import Home from './components/Home/Home'

/* CSS */
import styles from "./App.module.css"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.thediv}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/formulario' element={<Stepper/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
