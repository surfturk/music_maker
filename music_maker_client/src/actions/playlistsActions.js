export const fetchPlaylists = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/playlists")
      .then((resp) => resp.json())
      .then((playlists) => {
        dispatch({ type: "FETCH_PLAYLISTS", payload: playlists });
      });
  };
};

export const addPlaylist = (playlist) => {
  console.log("b");
  return (dispatch) => {
    console.log("c");
    fetch("http://localhost:3001/playlists", {
      method: "POST",
      body: JSON.stringify(playlist),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((playlist) => {
        console.log("d");
        return dispatch({ type: "ADD_PLAYLIST", payload: playlist });
      });
    console.log("e");
  };
  console.log("f");
};
