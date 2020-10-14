import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSongs } from '../actions/SongsActions'

 export class SongsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchSongs();
    }
    
    
    render() {
        return (
            <div>
                Songs Container
            </div>
        )
    }
}

export default connect(null, { fetchSongs })(SongsContainer)
