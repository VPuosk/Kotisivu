import React from "react";
import YOopinnot from "./YOopinnot";
import CVNavBar from "./CVNavBar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MuutOpinnot from "./MuutOpinnot";
import OmaSivu from "./OmaSivu";

const CVPage = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <CVNavBar />
      <Switch>
        <Route exact path={path}>
          <OmaSivu />
        </Route>
        <Route path={`${path}/HY`}>
          <YOopinnot />
        </Route>
        <Route path={`${path}/Muut`}>
          <MuutOpinnot />
        </Route>
      </Switch>
    </div>
  )
}

export default CVPage