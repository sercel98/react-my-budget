import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Form = ({ saveNewSpend, saveCreateSpend }) => {
  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const addSpend = (e) => {
    e.preventDefault();

    if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    const spend = {
      id: shortid.generate(),
      name: name,
      quantity: quantity,
    };

    saveNewSpend(spend);
    saveCreateSpend(true);
    saveName("");
    saveQuantity(0);
  };
  return (
    <form onSubmit={addSpend}>
      <h2>Add your spendings here</h2>
      {error ? (
        <Error errorMessage="All fields are required. Please, verify the value of your spend" />
      ) : null}
      <div className="campo">
        <label>Spend Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Eg. Transport"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Quantity spent</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Eg. 1000"
          value={quantity}
          onChange={(e) => saveQuantity(e.target.value)}
        />
      </div>
      <input type="submit" value="Add spend" className="u-full-width" />
    </form>
  );
};

Form.propTypes = {
  saveNewSpend: PropTypes.func.isRequired,
  saveCreateSpend: PropTypes.func.isRequired,
};

export default Form;
