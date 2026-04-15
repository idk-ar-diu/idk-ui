import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./base.css";
import { DemoApp } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DemoApp />
  </StrictMode>
);
