import React from 'react'
import Home from './pages/Home' 
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import NavBar from "./Components/Navbar"
import './css/app.css'
import { MovieProvider } from './contexts/MovieContext'
const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favourites' element={<Favourites />} />
      </Routes>
    </main>

    </MovieProvider>

  )
}

export default App