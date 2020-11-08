import React, { Component } from "react";
import { connect } from "react-redux";

import { addPlaylist } from "../actions/playlistsActions";

class PlaylistsForm extends Component {
  state = {
    name: "",
    description: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("a");
    this.props.addPlaylist(this.state);
    console.log("g");
    this.setState({
      name: "",
      description: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Playlist Name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <label>Playlist Description:</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />

        <input type="submit" value="Create Playlist" />
      </form>
    );
  }
}

export default connect(null, { addPlaylist })(PlaylistsForm);
