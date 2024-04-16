import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InViewProvider } from "./Components/Context/ViewContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Components/Context/PersonalProvider.jsx";
import { AuthProvider } from "./Components/Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InViewProvider>
        <StateProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </StateProvider>
      </InViewProvider>
    </BrowserRouter>
  </React.StrictMode>
);
