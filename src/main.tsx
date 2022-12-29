import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const clerkApiKey = import.meta.env.VITE_CLERK_API_URI;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider frontendApi={clerkApiKey}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
