import React from "react";

export const composeProviders = (...Providers: any) => (Child: any) => (
  props: any
) =>
  Providers.reduce(
    (acc: any, Provider: any) =>
      <Provider>{acc}</Provider>,
    <Child {...props} />
  );
