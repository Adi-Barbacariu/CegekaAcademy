import React from "react";
import Nav from "../Nav";
import Main from "../Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
      </div>
    </Router>
  );
};

export default App;
