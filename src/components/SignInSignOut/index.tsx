import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { UserContext } from "../../app-context/user-context";

interface SingInSignOutProps {
  signedIn: boolean;
  signOut: () => Promise<void>;
  setUserObject: () => Promise<void>;
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
            Sign Out {user.username}
          </Button>
        ) : (
          <span>
          <Button variant="contained" onClick={() => props.setUserObject()}>
            Sign in
          </Button>
          <small>This is a fake sign in. All it does is set the user object back to the one defined in the <em>./src/app-context/user-context.tsx</em></small></span>
        )}
      </Typography>
    </React.Fragment>
  );;
};
