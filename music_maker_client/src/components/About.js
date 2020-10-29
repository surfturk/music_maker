import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const About = () => {
  return (
    <Container maxWidth="xl">
      <Typography component="div" variant="h4">
        Get ready to rock and build your own playlists!{" "}
      </Typography>
      <Typography variant="p">
        Welcome to Music Maker, the premier music playlist creator. With this
        app, you are able to create playlists and songs. <br />
        Start out in the playlists section and choose a name and description for
        your playlist.
        <br />
        Once you've created a playlist, head over to the songs section. <br />
        Here you can create songs and attach them to a playlist of your choice.
        <br /> Just choose a song title, artist, album and select a playlist.
        Boom! You are up and running.
      </Typography>
    </Container>
  );
};

export default About;
