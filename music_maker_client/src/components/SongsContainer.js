import React, { Component } from "react";

import SongsForm from "./SongsForm";
import SongsList from "./SongsList";

export class SongsContainer extends Component {
  render() {
    return (
      <div className="container">
        <h4>All Songs</h4>
        <SongsList />
        <h4>Add Song</h4>
        <SongsForm />
      </div>
    );
  }
}

export default SongsContainer;
