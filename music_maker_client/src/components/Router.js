import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import PlaylistsContainer from "./PlaylistsContainer";
import Playlist from "./Playlist";
import SongsContainer from "./SongsContainer";
import Song from "./Song";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/Playlists" component={PlaylistsContainer} />
        <Route path="/Playlists/:id" component={Playlist} />
        <Route exact path="/Songs" component={SongsContainer} />
        <Route path="/Songs/:id" component={Song} />
      </Switch>
    </div>
  );
};

export default Router;
