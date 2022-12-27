import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Clerk from "@clerk/clerk-js";
import { UserContext } from "./app-context/user-context";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const clerkFrontendApi = import.meta.env.VITE_CLERK_API_URI;
const clerk = new Clerk(clerkFrontendApi);

const LoginStatus: React.FunctionComponent = (): JSX.Element => {
  const { user } = useContext(UserContext);
  console.log(">> ", user);
  return (
    <React.Fragment>
      <Typography variant="body1">
        Login status:{" "}
        {user && user.id ? `Signed in as ${user.firstName}` : `signed out`}
      </Typography>
    </React.Fragment>
  );
};

const WelcomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Typography variant="body1">This is the Welcome page.</Typography>
      <LoginStatus />
    </React.Fragment>
  );
};

const AdminPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Typography variant="body1">This is the Admin page.</Typography>
      <LoginStatus />
    </React.Fragment>
  );
};

const App: React.FunctionComponent = (): JSX.Element => {
  const { user, updateState } = useContext(UserContext);
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
    await clerk.load();
    setClerkLoaded(clerk.isReady());
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

  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        {clerkLoaded ? (
          <React.Fragment>
            <React.Fragment>
              
              <Typography variant="h6" gutterBottom>
                {signedIn ? (
                  <Button variant="contained" onClick={() => signOut()}>
                    {user?.firstName} Sign Out
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => clerk.openSignIn()}>
                    Sign in
                  </Button>
                )}
              </Typography>

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
        ) : "Loading..."}
      </BrowserRouter>
    </Container>
  );
};

export default App;
