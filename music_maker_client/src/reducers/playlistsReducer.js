export const playlistsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLAYLISTS':
            return action.payload
        
        case 'ADD_PLAYLIST':
            return [...state, action.payload]   
        default:
            return state    
    }
}