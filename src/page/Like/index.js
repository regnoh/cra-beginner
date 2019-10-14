import React, { Component } from "react";
import { Button } from "../../components";

export default class Like extends Component {
  state = {
    isLiked: false
  };
  onClick = () => {
    this.setState(preState => ({ isLiked: !preState.isLiked }));
  };
  render() {
    const { isLiked } = this.state;
    return (
      <div>
        isLiked: {isLiked ? "👍" : "👎"}
        <Button onClick={this.onClick}>{isLiked ? "unlike" : "like"}</Button>
      </div>
    );
  }
}
