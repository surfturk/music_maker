import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Like from "./Like";

const PlaylistsList = ({ playlists }) => {
  return (
    <div>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Like />
            <NavLink to={`/playlists/${playlist.id}`}>
              {playlist.name}
            </NavLink>{" "}
            - {playlist.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { playlists: state.playlists };
};

export default connect(mapStateToProps)(PlaylistsList);
