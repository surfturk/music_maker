import React, { Component } from 'react'
import { connect }  from 'react-redux'

import { addPlaylist } from '../actions/playlistsActions'

 class PlaylistsForm extends Component {
    
    state = {
        name: '',
        description: '',
        number_of_songs: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    

    handleSubmit = e => {
       e.preventDefault()
       this.props.addPlaylist(this.state)
       this.setState({
        name: '',
        description: '',
        number_of_songs: ''
       })
    }

    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>

               <label>Playlist Name:</label>
               <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
               <label>Playlist Description:</label>
               <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
               <label>Playlist Song Count:</label>
               <input type='text' value={this.state.number_of_songs} onChange={this.handleChange} name='number_of_songs'/>
               <input type='submit' value='Create Playlist'/>
           </form>
        )
    }
}

export default connect(null, { addPlaylist })(PlaylistsForm)


