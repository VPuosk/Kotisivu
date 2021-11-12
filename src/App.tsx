import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CVPage from './CVPage';
import { useMediaQuery } from 'react-responsive'

function App() {
  const narrow : boolean = useMediaQuery({maxWidth: 799})
  console.log('minWidth: 800',narrow)

  return (
    <BrowserRouter>
      <div className="App" style={{padding: 10}}>
        <NavBar />
        <Switch>
          <Route path="/CV">
            <CVPage narrow={narrow} />
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
