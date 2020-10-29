import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Playlist = ({ playlist, songs }) => {
  if (playlist) {
    return (
      <div className="container">
        <h5>Playlist Name:</h5>
        {playlist.name} <br></br>
        {playlist.description}
        <h5>Playlist Songs:</h5>
        {songs.map((song) => (
          <li key={song.id}>
            <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> -
            {song.artist} - {song.album}
          </li>
        ))}
      </div>
    );
  } else {
    return <div>...loading</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    playlist: state.playlists.find(
      (playlist) => playlist.id.toString() === props.match.params.id
    ),
    songs: state.songs.filter(
      (song) => song.playlist_id.toString() === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(Playlist);
