import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/other">Other</Link></li>
        </ul>
    )
}

export default Header
