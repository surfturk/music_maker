import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'





export class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper green ">
                <div className = 'NavBar container'>
                    <ul>
                       <li> <NavLink to='/'>Home</NavLink> </li>
                        <li> <NavLink to='/about'>About</NavLink> </li>
                        <li> <NavLink to='/Playlists'>Playlists</NavLink> </li>
                        <li> <NavLink to='/Songs'>Songs</NavLink> </li>
                        
                    </ul>
                
             </div>
            </nav>
            
        )
    }
}
export default Navbar