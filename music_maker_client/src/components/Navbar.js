import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';




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