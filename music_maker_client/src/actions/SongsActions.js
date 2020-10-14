

export const fetchSongs = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/songs')
        .then(resp => resp.json())
        .then(songs => dispatch({ type: 'FETCH_SONGS', payload: songs}))
    }
}

export const addSong = song => {
    return dispatch => {
        fetch('http://localhost:3001/songs', {
            method: 'POST',
            body: JSON.stringify(song),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(song => dispatch({ type: 'ADD_SONG', payload: song}))
     
      }

    }