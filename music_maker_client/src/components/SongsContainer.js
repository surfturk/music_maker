import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSongs } from '../actions/songsActions'
import SongsForm from './SongsForm'
import SongsList from './SongsList'

 export class SongsContainer extends Component {

    
    
    render() {
        return (
            <div className="container">
                <h4>All Songs</h4>
                <SongsList />
                <h4>Add Song</h4>
                <SongsForm />
            </div>
        )
    }
}

export default connect(null, { fetchSongs })(SongsContainer)
