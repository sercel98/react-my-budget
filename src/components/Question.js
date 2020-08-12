import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = ({ saveBudget, changeRemaining, changeShowQuestion }) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, changeError] = useState(false);

  const defineBudget = (e) => {
    saveQuantity(parseInt(e.target.value));
  };

  const addBudget = (e) => {
    e.preventDefault();
    console.log(quantity);
    if (quantity < 1 || isNaN(quantity)) {
      changeError(true);
      return;
    }
    changeError(false);
    saveBudget(quantity);
    changeRemaining(quantity);
    changeShowQuestion(false);
  };

  return (
    <Fragment>
      <h2>Enter your monthly budget</h2>
      {error ? (
        <Error errorMessage="The budget is invalid, please correct." />
      ) : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="How much money do you earn in a month?"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </Fragment>
  );
};

export default Question;
