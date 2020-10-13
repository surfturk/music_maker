import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import PlaylistsList from '../components/PlaylistsList'
import About from '../components/About'

export const Router = () => {
    return (
        <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/Playlists' component={PlaylistsList} />
        </Switch>
       </div>
    )
}

export default Router;