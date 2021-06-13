import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Top Navbar component
const Nav = (props) => {
  return(
      <div className = "Navbar">
      <div className = "leftSide">
        <div class = "navLinks">
          {props.items.map(link => {
            return <a key ={link.id}>
              <Link to = {link.url}>{link.text}</Link>
            </a>
          })}
        </div>
      </div>

      <div className = "rightSide">
        <input type = "text" placeholder = "Search Employees and Rooms..."/>
        <button> Search </button>
      </div>
   </div>
 )
}

export default Nav
