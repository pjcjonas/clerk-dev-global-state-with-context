import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SignedIn, useClerk } from "@clerk/clerk-react";

interface NavProps {
  handleClick: (path: string) => void;
}

export const Nav: React.FunctionComponent<NavProps> = (
  props: NavProps
): JSX.Element => {
  const { signOut } = useClerk();
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => props.handleClick("wellcome")}>
        Home
      </Button>
      <Button variant="contained" onClick={() => props.handleClick("admin")}>
        Admin
      </Button>
      <SignedIn>
        <Button
          variant="contained"
          color="error"
          onClick={() => signOut(() => props.handleClick("wellcome"))}>
          Sign Out
        </Button>
      </SignedIn>
    </Stack>
  );
};
