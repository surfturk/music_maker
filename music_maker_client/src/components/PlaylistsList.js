import React from 'react'
import { connect } from 'react-redux'
import PlaylistsContainer from './PlaylistsContainer'

const PlaylistsList = ({ playlists }) => {
    return (
        <div>
             <PlaylistsContainer />
            {playlists.map(playlist => 
            <ul>
                <li key={playlist.id}>{playlist.name} - {playlist.description}</li>
            </ul>)}
        </div>
    )
}

    const mapStateToProps = state => {
        return { playlists: state.playlists}
    
}

export default connect(mapStateToProps)(PlaylistsList);
