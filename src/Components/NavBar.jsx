import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex gap-4 justify-end m-5 text-cyan-500 text-base'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/about' className='hover:underline'>About</Link>
        <Link to='/products' className='hover:underline'>Products</Link>
        <Link to='/gallery' className='hover:underline'>Gallery</Link>
        <Link to='/contact' className='hover:underline'>Contact</Link>

    </div>
  )
}
