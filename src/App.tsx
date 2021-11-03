import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CVPage from './CVPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/CV">
            <CVPage />
          </Route>
          <Route path="/">
            TEST AA
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
