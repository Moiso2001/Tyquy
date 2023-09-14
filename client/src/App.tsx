/* React */
// import React from 'react'


/* Components */
import Home from './components/Home/Home'

/* CSS */
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.thediv}>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
