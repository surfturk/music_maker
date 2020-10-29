import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const SongsList = ({ songs }) => {
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink> -{" "}
            {song.artist} - {song.album}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongsList);
