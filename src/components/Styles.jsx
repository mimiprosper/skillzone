import React from 'react'
import { NavLink } from 'react-router-dom'

const Styles = () => {
    const navStyleLink = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive? 'none' : 'underline'
        }
    }
  return (
    <nav>
        <NavLink style={navStyleLink} to='/'>Home</NavLink>
        <NavLink style={navStyleLink} to='/about'>About</NavLink>
    </nav>
  )
}

export default Styles