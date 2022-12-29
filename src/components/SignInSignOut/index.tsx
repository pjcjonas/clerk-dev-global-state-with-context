import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const SignInSignOut: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <Button variant="contained" onClick={() => false}>
          Sign Out
        </Button>
        <Button variant="contained" onClick={() => false}>
          Sign in
        </Button>
      </Typography>
    </React.Fragment>
  );
};
