import React from "react";
import { Redirect, Route } from "react-router-dom";


interface IsPublicProps {
  redirectOnError: string;
  component: any;
  [propName: string]: any;
}

const IsPublicRoute = ({
  redirectOnError,
  component: Component,
  ...rest
}: IsPublicProps) => {

  return (
    <Route
      {...rest}
      render={(props) =>
        <Component {...props} />
      }
    />
  );
};

export { IsPublicRoute };
