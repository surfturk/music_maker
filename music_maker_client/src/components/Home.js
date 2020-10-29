import React from "react";
import ReactPlayer from "react-player";
import { Typography } from "@material-ui/core";
import "../style/App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="container">
        <Typography variant="h2" align="center">
          Welcome to Music Maker
        </Typography>
      </div>
      <div className="wrapper">
        <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=cJunCsrhJjg"
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Home;
