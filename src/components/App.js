import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import DrinksIndexContainer from "./DrinksIndexContainer";
import DrinkShow from "./DrinkShow";

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DrinksIndexContainer} />
          <Route exact path="/drink/:id" component={DrinkShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
