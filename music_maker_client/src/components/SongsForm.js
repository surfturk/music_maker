import React, { Component } from 'react'
import { connect } from 'react-redux'

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
       this.props.addSongs(this.state)
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
               
               <input type='hidden' value={this.state.playlist_id} onChange={this.handleChange} name='playlist_id'/> 
                 
                <input type='submit' value="Create Song" />
            </form>
        )
    }
}

export default connect(null, { addSong })(SongsForm)
