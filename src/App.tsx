import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CVPage from './CVPage';
import { useMediaQuery } from 'react-responsive'
import Demo from './Demo';
import EtuSivu from './components/EtuSivu';

function App() {
  const narrow : boolean = useMediaQuery({maxWidth: 799})
  //console.log('minWidth: 800',narrow)

  return (
    <BrowserRouter>
      <div className="App" style={{padding: 10}}>
        <NavBar />
        <Switch>
          <Route path="/Kotisivu/CV">
            <CVPage narrow={narrow} />
          </Route>
          <Route path="/Kotisivu/Demo">
            <Demo />
          </Route>
          <Route path="/Kotisivu">
            <EtuSivu />
          </Route>
          <Route path="/">
            <Redirect to="/Kotisivu" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
