import React, { Component } from "react";

export class Like extends Component {
  state = {
    likes: 0,
  };

  onClick = (e) => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Add Like</button>
        <p>{this.state.likes}</p>
      </div>
    );
  }
}

export default Like;
