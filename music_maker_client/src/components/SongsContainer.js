import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSongs } from '../actions/songsActions'
import SongsForm from './SongsForm'

 export class SongsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchSongs();
    }
    
    
    render() {
        return (
            <div>
                
                <SongsForm />
            </div>
        )
    }
}

export default connect(null, { fetchSongs })(SongsContainer)
