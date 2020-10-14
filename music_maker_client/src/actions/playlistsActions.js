export const fetchPlaylists = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/playlists')
        .then(resp => resp.json())
        .then(playlists => {
            console.log(playlists)
            dispatch({ type: 'FETCH_PLAYLISTS', payload: playlists})
        })
    }
}

export const addPlaylist = playlist => {
    return dispatch => {
        fetch('http://localhost:3001/playlists', {
            method: 'POST',
            body: JSON.stringify(playlist),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(playlist => dispatch({ type: 'ADD_PLAYLIST', payload: playlist}))
     
      }

    }
