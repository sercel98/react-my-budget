import React from "react";
import PropTypes from "prop-types";

const Spend = ({ spend }) => {
  return (
    <li className="gastos">
      <p>
        {spend.name}
        <span className="gasto">$ {spend.quantity}</span>
      </p>
    </li>
  );
};

Spend.propTypes = {
  spend: PropTypes.object.isRequired,
};

export default Spend;
