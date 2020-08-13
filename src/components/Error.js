import React from "react";
import PropTypes from "prop-types";

const Error = ({ errorMessage }) => {
  return <p className="alert alert-danger error"> {errorMessage} </p>;
};

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
