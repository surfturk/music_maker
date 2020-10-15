import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import PlaylistsContainer from './PlaylistsContainer'
import Playlist from './Playlist'
import { SongsContainer } from './SongsContainer'

export const Router = () => {
    return (
        <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/Playlists' component={PlaylistsContainer} />
            <Route exact path='/Playlists/:id' component={Playlist} />
            <Route exact path='/Songs' component={SongsContainer} />

        </Switch>
       </div>
    )
}

export default Router;