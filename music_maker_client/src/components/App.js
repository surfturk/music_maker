import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux'


import {fetchPlaylists} from '../actions/playlistsActions'
import {fetchSongs} from '../actions/songsActions'

import Router from './Router'
import Navbar from './Navbar'



const App = () => {
 const dispatch = useDispatch()
    useEffect( ()=> {
    dispatch(fetchPlaylists())
    dispatch(fetchSongs())
    })
       


    return (
        <div>   
            <Navbar />
            <Router />
        </div>
    )
}

export default App;