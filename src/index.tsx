import React from "react";
import ReactDOM from "react-dom/client";
import App from "./MainView.tsx";
import { TaskProvider } from "./context/TaskContext.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
