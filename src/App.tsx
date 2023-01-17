import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { DummyUser, UserContext } from "./app-context/user-context";
import { Container } from "@mui/material";
import { SignInSignOut } from "./components/SignInSignOut";
import { AdminPage } from "./components/AdminPage";
import { WelcomePage } from "./components/WelcomePage";

const App: React.FunctionComponent = (): JSX.Element => {
  const { updateState } = useContext(UserContext);
  const [signedIn, setSignedIn] = useState(false);

  const signIn = async (): Promise<void> => {
    setSignedIn(true);
    await updateState({user:DummyUser});
  }

  const signOut = async (): Promise<void> => {
    await updateState({user:undefined})
    setSignedIn(false);
  };

  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        
          <React.Fragment>
            <React.Fragment>
              <SignInSignOut
                signOut={signOut}
                signedIn={signedIn}
                setUserObject={signIn}
              />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route
                  path="/admin"
                  element={
                    signedIn ? <AdminPage /> : <Navigate replace to="/" />
                  }
                />
              </Routes>
            </React.Fragment>
          </React.Fragment>
      </BrowserRouter>
    </Container>
  );
};

export default App;
