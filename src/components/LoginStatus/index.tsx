import React from "react";
import { Typography } from "@mui/material";

export const LoginStatus: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Typography variant="body1">
        Login status:{" "}
        Signed in as __TODO__
      </Typography>
    </React.Fragment>
  );
};
