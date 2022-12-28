import { Typography } from "@mui/material";
import React from "react";
import { LoginStatus } from "../LoginStatus";

export const AdminPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Typography variant="body1">This is the Admin page.</Typography>
      <LoginStatus />
    </React.Fragment>
  );
};
