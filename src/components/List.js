import React from "react";
import Spend from "./Spend";

const List = ({ spends }) => {
  return (
    <div className="gastos-realizados">
      <h2>Spends</h2>

      {spends.map((spend) => (
        <Spend spend={spend} />
      ))}
    </div>
  );
};

export default List;
