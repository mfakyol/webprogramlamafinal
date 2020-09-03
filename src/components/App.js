import React from "react";
import "../helpers/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExampleComponent from "./ExampleComponent";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Route to="/" exact component={ExampleComponent}></Route>
      </Router>
    </div>
  );
}

export default App;
