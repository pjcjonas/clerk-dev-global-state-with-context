import React from "react";

/**
 * Application state interface
 */
export interface AppState {
  user?: any;
  clerk?: any;
  updateState?: (newState: Partial<AppState>) => void;
}

/**
 * Default application state
 */
const defaultState: AppState = {
  user: null,
  clerk: null,
  updateState: (newState: Partial<AppState>) => {},
};

/**
 * Creating the Application state context for the provider
 */
export const UserContext = React.createContext<AppState>(defaultState);
