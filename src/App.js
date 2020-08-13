import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetPanel from "./components/BugdetPanel";

function App() {
  const [budget, saveBudget] = useState(0);
  const [remainingBudget, changeRemaining] = useState(0);
  const [showQuestion, changeShowQuestion] = useState(true);
  const [spends, saveSpends] = useState([]);
  const [spend, saveNewSpend] = useState({});
  const [creatSpend, saveCreateSpend] = useState(false);

  useEffect(() => {
    if (creatSpend) {
      saveSpends([...spends, spend]);
      const remaining = remainingBudget - spend.quantity;
      changeRemaining(remaining);
      saveCreateSpend(false);
    }
  }, [spend, spends, creatSpend, remainingBudget]);

  return (
    <div className="container">
      <header>
        <h1>My Finance</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              changeShowQuestion={changeShowQuestion}
              changeRemaining={changeRemaining}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  saveNewSpend={saveNewSpend}
                  saveCreateSpend={saveCreateSpend}
                />
              </div>
              <div className="one-half column">
                <List
                  spends={spends}
                  budget={budget}
                  remaining={remainingBudget}
                />
                <BudgetPanel budget={budget} remaining={remainingBudget} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
