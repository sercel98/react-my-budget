import React from "react";
import Spend from "./Spend";
import PropTypes from "prop-types";

const List = ({ spends }) => {
  return (
    <div className="gastos-realizados">
      <h2>Spends</h2>

      {spends.map((spend) => (
        <Spend key={spend.id} spend={spend} />
      ))}
    </div>
  );
};

List.propTypes = {
  spends: PropTypes.array.isRequired,
};

export default List;
