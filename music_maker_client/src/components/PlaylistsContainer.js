

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPlaylists } from '../actions/playlistsActions'
import PlaylistsForm from './PlaylistsForm'

class PlaylistsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchPlaylists()
    }

    render() {
        return (
            <div>
                Playlists Container
                <PlaylistsForm />
            </div>
        )
    }
}

export default connect(null, { fetchPlaylists })(PlaylistsContainer);
