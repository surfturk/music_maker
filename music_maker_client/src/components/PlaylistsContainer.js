import React, { Component } from "react";

import PlaylistsForm from "./PlaylistsForm";
import PlaylistsList from "./PlaylistsList";

class PlaylistsContainer extends Component {
  render() {
    return (
      <div className="playlistForm container">
        <h4>All Playlists</h4>
        <PlaylistsList />
        <h4>Add Playlist</h4>
        <PlaylistsForm />
      </div>
    );
  }
}

export default PlaylistsContainer;
