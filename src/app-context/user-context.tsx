import { UserResource } from "@clerk/types";
import React from "react";

export interface AppState {
  user?: UserResource | null;
  updateState?: (newState: Partial<AppState>) => void;
}

const defaultState: AppState = {
  user: null,
  updateState: (newState: Partial<AppState>) => {},
};

export const UserContext = React.createContext<AppState>(defaultState);
