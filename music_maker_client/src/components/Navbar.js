import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <div className = 'NavBar container'>
                <ul>
                    <li> <NavLink to='/'>Home</NavLink> </li>
                    <li> <NavLink to='/about'>About</NavLink> </li>
                    <li> <NavLink to='/Playlists'>Playlists</NavLink> </li>
                    
                </ul>
            </div>
        )
    }
}
export default Navbar