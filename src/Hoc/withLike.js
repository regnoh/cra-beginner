import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../components";
export default WrappedComponent => {
  class withLike extends Component {
    state = {
      isLiked: false,
      isUnLiked: false
    };
    onChangeLike = () => {
      this.setState(pre => ({ isLiked: !pre.isLiked }));
    };
    onChangeUnLike = () => {
      this.setState(pre => ({ isUnLiked: !pre.isUnLiked }));
    };
    render() {
      const { isLiked, isUnLiked } = this.state;
      return (
        <div>
          <WrappedComponent {...this.props} />
          <Button onClick={this.onChangeLike}>{isLiked ? "👍" : "👍🏻"}</Button>
          <Button onClick={this.onChangeUnLike}>
            {isUnLiked ? "👎" : "👎🏻"}
          </Button>
        </div>
      );
    }
  }

  withLike.propTypes = {};

  return withLike;
};
