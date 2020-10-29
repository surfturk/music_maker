import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer" class="green">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">
                "When the power of love overcomes the love of power the world
                will know peace."
              </h5>
              <p className="grey-text text-lighten-4"> - Jimi Hendrix</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/playlists">
                    Playlists
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/songs">
                    Songs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container" class="grey-text text-lighten-4">
            © 2020 Music Maker
            <a
              className="grey-text text-lighten-4 right"
              href="https://open.spotify.com/artist/776Uo845nYHJpNaStv1Ds4"
              target="_blank"
            >
              Check out Jimi on Spotify
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
