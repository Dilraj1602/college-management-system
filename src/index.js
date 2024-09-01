import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Appcontext"; // Use the correct provider name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppContextProvider> Use the correct provider component */}
        <App />
      {/* </AppContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
