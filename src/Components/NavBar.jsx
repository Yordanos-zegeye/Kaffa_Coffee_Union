import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contact'>Contact</Link>

    </div>
  )
}
