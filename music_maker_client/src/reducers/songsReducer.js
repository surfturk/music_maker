export const songsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS":
      return action.payload;
    case "ADD_SONG":
      return [...state, action.payload];
    default:
      return state;
  }
};
