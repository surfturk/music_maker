import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import PlaylistsList from '../components/PlaylistsList'
import Playlist from './Playlist'
import SongsList from '../components/SongsList'

export const Router = () => {
    return (
        <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/Playlists' component={PlaylistsList} />
            <Route exact path='/Playlists/:id' component={Playlist} />
            <Route exact path='/songs' component={SongsList} />

        </Switch>
       </div>
    )
}

export default Router;