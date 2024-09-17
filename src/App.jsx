import React from 'react'
import NavBar from './Components/NavBar'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/products'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/products' element = {<Products />}/>
        <Route path='/gallery' element = {<Gallery />}/>
        <Route path='/contact' element = {<Contact />}/>

      </Routes>
          
    </>

  )
}
