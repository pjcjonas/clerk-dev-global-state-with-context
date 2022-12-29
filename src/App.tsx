import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SignInSignOut } from "./components/SignInSignOut";
import { AdminPage } from "./components/AdminPage";
import { WelcomePage } from "./components/WelcomePage";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <React.Fragment>
          <React.Fragment>
            <SignInSignOut />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </React.Fragment>
        </React.Fragment>
      </BrowserRouter>
    </Container>
  );
};

export default App;
