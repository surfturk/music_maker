

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPlaylists } from '../actions/playlistsActions'
import PlaylistsForm from './PlaylistsForm'


class PlaylistsContainer extends Component {
    

    render() {
    
        return (
            <div className="playlistForm container">
                Playlists Form
                
                <PlaylistsForm />
            </div>
        )
    }
}

export default connect(state => ({playlists: state.playlists}), { fetchPlaylists })(PlaylistsContainer);
