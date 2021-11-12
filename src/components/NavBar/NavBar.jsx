import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Link to='/weather/about'>About</Link>
            <Link to='/weather/home'>Home</Link>
        </div>
    )
}

export default NavBar
