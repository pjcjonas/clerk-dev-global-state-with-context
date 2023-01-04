import { Route, Routes } from "react-router-dom";
import React from "react";
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { AdminPage } from "../AdminPage";
import { WelcomePage } from "../WelcomePage";

export const MainRoutes: React.FunctionComponent = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/wellcome"
        element={
          <React.Fragment>
            <WelcomePage />
          </React.Fragment>
        }
      />
      <Route
        path="/admin"
        element={
          <React.Fragment>
            <SignedIn>
              <AdminPage />
            </SignedIn>
            <SignedOut>
              <SignIn afterSignInUrl="/admin" />
            </SignedOut>
          </React.Fragment>
        }
      />
    </Routes>
  );
};
