import React from "react";
import PropTypes from "prop-types";

export default WrappedComponent => {
  const withAuthor = ({ ...props }) => (
    <WrappedComponent {...props} author="Build by LXR" />
  );

  withAuthor.propTypes = {};

  return withAuthor;
};
