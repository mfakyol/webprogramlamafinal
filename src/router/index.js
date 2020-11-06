import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExampleComponent from '../components/views/ExampleComponent'
//Instructor
import Main from "../components/layouts/Main";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="" /* <----- admin/:path? */>  
          <Main>
            <Switch>
              <Route path="/" exact component={ExampleComponent} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
