import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import RouteContainer from "./routes/RouteContainer.tsx";
fetch("/api/v1/test")
  .then((response) => response.json())
  .then((data) => console.log(data));
// Uncomment the line below to see the data from the test route in the console
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteContainer />
  </StrictMode>
);
