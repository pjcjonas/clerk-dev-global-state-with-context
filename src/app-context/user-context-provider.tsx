import React, { useEffect, useState } from "react";
import { AppState, UserContext } from "./user-context";

interface Props {
  children: React.ReactNode;
}

export const UserContextProvider: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  // Using react hooks, set the default state
  const [state, setState] = useState<AppState>({});

  // Declare the update state method that will handle the state values
  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState });
  };

  return (
    // Context wrapper that will provider the state values to all its children nodes
    <UserContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </UserContext.Provider>
  );
};
