import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          <Route path="/CV">
            <CVPage narrow={narrow} />
          </Route>
          <Route path="/Demo">
            <Demo />
          </Route>
          <Route path="/">
            <EtuSivu />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
