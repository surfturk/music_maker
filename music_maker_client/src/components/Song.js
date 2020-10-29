import React from "react";
import { connect } from "react-redux";

const Song = ({ song }) => {
  if (song) {
    return (
      <div className="container">
        <h4>Song:</h4>
        {song.title} <br></br>
        {song.artist} <br></br>
        {song.album} <br></br>
        <h4>Appears on playlist:</h4>
        {song.playlist.name}
        <br></br>
      </div>
    );
  } else {
    return <div>...loading</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    song: state.songs.find(
      (song) => song.id.toString() === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(Song);
