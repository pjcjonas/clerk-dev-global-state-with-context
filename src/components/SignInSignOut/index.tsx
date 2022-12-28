import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { UserContext } from "../../app-context/user-context";

interface SingInSignOutProps {
  signedIn: boolean;
  signOut: () => Promise<void>;
  openSignIn: () => Promise<void>;
}

export const SignInSignOut: React.FunctionComponent<SingInSignOutProps> = (
  props: SingInSignOutProps
): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {user ? (
          <Button variant="contained" onClick={() => props.signOut()}>
            Sign Out {user.firstName}
          </Button>
        ) : (
          <Button variant="contained" onClick={() => props.openSignIn()}>
            Sign in
          </Button>
        )}
      </Typography>
    </React.Fragment>
  );;
};
