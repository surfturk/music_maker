import React, { Component } from 'react'
import { connect } from 'react-redux'
import SongsContainer from './SongsContainer'

const Playlist = ({playlist}) =>{
    
    if (playlist) {
        return(
            <div>
              {playlist.name} <br></br>
              {playlist.description}
            </div>
        ) 
    }
    else {
        return <div>
            ...loading
        </div>
    }

  
}

const mapStateToProps= (state, props) => {
     return{
       playlist: state.playlists.find((playlist) => playlist.id.toString() === props.match.params.id)
     }
}

export default connect(mapStateToProps)(Playlist)
