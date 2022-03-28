import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to={`/section/${'History'}`}>History</Link>
        <Link to={`/section/${'Technology'}`}>Technology</Link>
        <Link to={`/section/${'Mythology'}`}>Mythology</Link>
        <Link to={`/section/${'Mystery'}`}>Mystery</Link>
    </div>
  )
}

export default Navbar