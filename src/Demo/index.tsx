import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DemoBar from "./DemoBar";
import BFS from "./BFS";
import Rivilaskuri from "./Rivilaskuri";

const Demo = () => {
  const { path } = useRouteMatch();
  console.log('demo', path)

  return (
    <div>
      <DemoBar />
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/BFS`}>
          <BFS />
        </Route>
        <Route path={`${path}/Rivilasku`}>
          <Rivilaskuri />
        </Route>
      </Switch>
    </div>
  )
}

export default Demo