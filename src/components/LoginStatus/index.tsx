import React from "react";
import { Typography } from "@mui/material";
import {
  useUser
} from "@clerk/clerk-react";

export const LoginStatus: React.FunctionComponent = (): JSX.Element => {
  const {user} = useUser();
  return (
    <React.Fragment>
      <Typography variant="body1">
        Login status:{" "}
        {user ? `Signed in as ${user.firstName}` : 'You are signed out'}
      </Typography>
    </React.Fragment>
  );
};
