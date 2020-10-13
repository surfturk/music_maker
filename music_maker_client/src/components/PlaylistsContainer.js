

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPlaylists } from '../actions/playlistsActions'
import PlaylistsForm from './PlaylistsForm'
import PlaylistsList from './PlaylistsList'

class PlaylistsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchPlaylists()
    }

    render() {
       console.log(this.props)
        return (
            <div>
                Playlists Container
                
                <PlaylistsForm />
            </div>
        )
    }
}

export default connect(state => ({playlists: state.playlists}), { fetchPlaylists })(PlaylistsContainer);
