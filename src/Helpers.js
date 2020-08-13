export const checkBudget = (budget, remainigBudget) => {
  let className;

  if (budget / 4 > remainigBudget) {
    className = "alert alert-danger";
  } else if (budget / 2 > remainigBudget) {
    className = "alert alert-warning";
  } else {
    className = "alert alert-success";
  }
  return className;
};
