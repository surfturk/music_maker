import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux'

import SongContainer from './SongsContainer'
import {fetchPlaylists} from '../actions/playlistsActions'

import Router from './Router'
import Navbar from './Navbar'



const App = () => {
 const dispatch = useDispatch()
    useEffect( ()=> {
    dispatch(fetchPlaylists())
    })


    return (
        <div>   
            <Navbar />
            <Router />

            <SongContainer />
        </div>
    )
}

export default App;