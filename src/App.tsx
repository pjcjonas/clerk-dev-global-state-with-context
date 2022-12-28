import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./app-context/user-context";
import { Container } from "@mui/material";
import { SignInSignOut } from "./components/SignInSignOut";
import { AdminPage } from "./components/AdminPage";
import { WelcomePage } from "./components/WelcomePage";



const App: React.FunctionComponent = (): JSX.Element => {
  const { user, clerk, updateState } = useContext(UserContext);
  const [signedIn, setSignedIn] = useState(false);
  const [clerkLoaded, setClerkLoaded] = useState(false);

  useEffect(() => {
    initialise();
  }, [user]);

  const initialise = async (): Promise<void> => {
    await loadClerk();
    await checkUser();
  };

  const loadClerk = async (): Promise<void> => {
    if (clerk) {
      await clerk.load();
      setClerkLoaded(clerk.isReady());
    }
  };

  const checkUser = async (): Promise<void> => {
    if (clerk.user && clerk.user !== null) {
      console.log(clerk.user);
      setSignedIn(true);
      // @ts-ignore
      updateState({ user: clerk.user });
    }
  };

  const signOut = async (): Promise<void> => {
    await clerk
      .signOut(handleOnSignout, { sessionId: clerk.session?.id })
      .catch((reason: any) => {
        handleOnSignoutError(reason);
      });
  };

  const handleOnSignout = async (): Promise<void> => {
    setSignedIn(false);
    // @ts-ignore
    updateState({ user: null });
  };

  const handleOnSignoutError = async (reason: any): Promise<void> => {
    console.error(reason);
  };

  const openSignIn = async (): Promise<void> => {
    clerk.openSignIn();
  };

  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        {clerkLoaded ? (
          <React.Fragment>
            <React.Fragment>
              <SignInSignOut
                signOut={signOut}
                signedIn={signedIn}
                openSignIn={openSignIn}
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
        ) : (
          "Loading..."
        )}
      </BrowserRouter>
    </Container>
  );
};

export default App;
