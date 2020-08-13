import React, { Fragment } from "react";
import { checkBudget } from "../Helpers";
import PropTypes from "prop-types";

const BudgetPanel = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: ${budget} </div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: ${remaining}
      </div>
    </Fragment>
  );
};

BudgetPanel.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default BudgetPanel;
