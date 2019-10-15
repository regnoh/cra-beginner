import React from "react";
import PropTypes from "prop-types";

export default WrappedComponent => {
  const withCopyright = ({ ...props }) => (
    <WrappedComponent {...props} copyright="&copy; 2019 React Beginner" />
  );

  withCopyright.propTypes = {};

  return withCopyright;
};
