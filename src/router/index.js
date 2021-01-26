import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/layouts/Main";
import Page from "../components/views/Page/Page";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="" /* <----- admin/:path? */>  
          <Main>
            <Switch>
              <Route path="/" exact component={Page} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
