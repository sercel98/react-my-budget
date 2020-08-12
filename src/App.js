import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [budget, saveBudget] = useState(0);
  const [remainingBudget, changeRemaining] = useState(0);
  const [showQuestion, changeShowQuestion] = useState(true);
  const [spends, saveSpends] = useState([]);

  const addNewSpend = (newSpend) => {
    saveSpends([...spends, newSpend]);
  };

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
            <div class="row">
              <div class="one-half column">
                <Form addNewSpend={addNewSpend} />
              </div>
              <div class="one-half column">
                <List
                  spends={spends}
                  budget={budget}
                  remaining={remainingBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
