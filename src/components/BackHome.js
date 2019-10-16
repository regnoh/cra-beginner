import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class BackHome extends Component {
  backHome = () => {
    this.props.history.push({
      pathname: "/home",
      state: {
        id: this.props.match.params.id
      }
    });
  };
  render() {
    return <button onClick={this.backHome}>返回首页</button>;
  }
}
export default withRouter(BackHome);
