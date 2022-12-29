import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { AdminPage } from "./components/AdminPage";
import { WelcomePage } from "./components/WelcomePage";

const theme = createTheme();

const App: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (location: string) => {
    navigate(`/${location}`);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => handleClick("")}>
              Home
            </Button>
            <Button variant="contained" onClick={() => handleClick("admin")}>
              Admin
            </Button>
          </Stack>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
