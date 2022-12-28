import React, { useContext } from "react";
import { UserContext } from "../../app-context/user-context";
import { Typography } from "@mui/material";

export const LoginStatus: React.FunctionComponent = (): JSX.Element => {
  const { user } = useContext(UserContext);
  return (
    <React.Fragment>
      <Typography variant="body1">
        Login status:{" "}
        {user && user.id ? `Signed in as ${user.firstName}` : `signed out`}
      </Typography>
    </React.Fragment>
  );
};
