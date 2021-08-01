import React from "react";
import { CreateGateWay, CreateDevice, GatwaysList, GatewayInfo } from "pages";
import { Switch } from "react-router-dom";
import { IsPublicRoute } from "routes/isPublicRoute";

const routesInfo = [{
  path: "/",
  component: GatwaysList
},
{
  path: "/gateway",
  component: GatwaysList
},
{
  path: "/gateway/create",
  component: CreateGateWay
},
{
  path: "/device/create",
  component: CreateDevice
},
{
  path: "/gateway/:id",
  component: GatewayInfo
}
]
export const Routes = () => {
  return (
    <Switch>
      {routesInfo.map(route =>
        <IsPublicRoute
          key={route.path}
          redirectOnError="/"
          path={route.path}
          exact
          component={route.component}
        />
      )}
    </Switch>
  );
};
