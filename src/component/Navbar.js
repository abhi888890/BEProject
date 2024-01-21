import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <div className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/Preference" >Preference</a></li>
          <li><a href="/Domain">Domain</a></li>
          <li><a href="History">History</a></li>
          <li><a href="Login">Login</a></li>
      </div>
      <div className="dashboard">
        Abhi
      </div>
    </div>
  )
}
