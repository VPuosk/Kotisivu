import React from "react";
import HYopinnot from "./HYopinnot";
import CVNavBar from "./CVNavBar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MuutOpinnot from "./MuutOpinnot";

const CVPage = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <CVNavBar />
      <Switch>
        <Route exact path={path}>
          ETUSIVU CVPUOLI
        </Route>
        <Route path={`${path}/HY`}>
          <HYopinnot />
        </Route>
        <Route path={`${path}/Muut`}>
          <MuutOpinnot />
        </Route>
      </Switch>
    </div>
  )
}

export default CVPage