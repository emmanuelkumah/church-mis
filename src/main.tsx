import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import RouteContainer from "./routes/RouteContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteContainer />
  </StrictMode>
);
