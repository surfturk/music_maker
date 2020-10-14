export const songsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SONGS':
            return action.payload
        case 'ADD_SONG'    
        default:
            return state    
    }
}