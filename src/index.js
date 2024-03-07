import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  
 

<Auth0Provider
domain="vishnupixel.us.auth0.com"
clientId="sCOOQzU4hz3WSM9RpnFYxwBelTFB5UhB"
authorizationParams={{
  redirect_uri: window.location.origin
}}
>
<BrowserRouter>
    <App />
  </BrowserRouter>
</Auth0Provider>
);

