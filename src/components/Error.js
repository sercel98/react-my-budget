import React from "react";
const Error = ({ errorMessage }) => {
  return <p className="alert alert-danger error"> {errorMessage} </p>;
};

export default Error;
