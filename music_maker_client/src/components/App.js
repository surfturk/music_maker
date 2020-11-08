import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";

import { fetchPlaylists } from "../actions/playlistsActions";
import { fetchSongs } from "../actions/songsActions";

import Router from "./Router";
import Navbar from "./Navbar";

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { fetchPlaylists, fetchSongs })(App);
