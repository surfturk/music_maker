import React, { Component } from 'react'

export class SongsForm extends Component {

    state = {
      title: '',
      artist: '',
      album: '',
      playlist_id: null
    }

    render() {
        return (
            <form>
                <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                <label>Artist:</label>
                <input type='text' value={this.state.artist} onChange={this.handleChange} name='artist'/>
                <label>Album:</label>
                <input type='text' value={this.state.album} onChange={this.handleChange} name='album'/>

                <input type='hidden' value={this.state.playlist_id} onChange={this.handleChange} name='playlist_id'/>
                
                <input type='submit' value="Create Song" />
            </form>
        )
    }
}

export default SongsForm
