import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Nav } from "./components/common/nav";
import { MainRoutes } from "./components/common/routes";

const theme = createTheme();

const App: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (location: string = "wellcome") => {
    navigate(`/${location}`);
  };

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Nav handleClick={handleClick} />
        </Container>
        <Container maxWidth="sm">
          <MainRoutes />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
