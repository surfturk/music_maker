import React from 'react'
import { connect } from 'react-redux'

const PlaylistsList = ({ playlists }) => {
    return (
        <div>
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
