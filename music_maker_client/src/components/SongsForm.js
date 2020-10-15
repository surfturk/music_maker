import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select';

import { addSong } from '../actions/songsActions' 

export class SongsForm extends Component {

    state = {
      title: '',
      artist: '',
      album: '',
      playlist_id: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    
    

    handleSubmit = e => {
       e.preventDefault()
       this.props.addSong(this.state)
       this.setState({
        title: '',
        artist: '',
        album: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Title:</label>
               <input type='text' value={this.state.name} onChange={this.handleChange} name='title'/>
               <label>Song Artist:</label>
               <input type='text' value={this.state.artist} onChange={this.handleChange} name='artist'/>
                 <label>Song Album:</label>
               <input type='text' value={this.state.album} onChange={this.handleChange} name='album'/> 
               
               <Select id="select" onChange={this.handleChange} value={this.state.playlist_id} name="playlist_id">
                {this.props.playlists.map(playlist => <option key={playlist.id} value={playlist.id}> {playlist.name}</option>)}
               </Select>
                 
                <input type='submit' value="Create Song" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { playlists: state.playlists }
}

export default connect(mapStateToProps, { addSong })(SongsForm)
