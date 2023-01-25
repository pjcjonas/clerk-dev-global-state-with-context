import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const clerkApiKey = import.meta.env.VITE_CLERK_API_URI;
console.log(clerkApiKey);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={clerkApiKey}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode> 
);

