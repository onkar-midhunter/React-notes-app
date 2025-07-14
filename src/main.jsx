import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./Context/NotesContext.jsx";
import { SidebarProvider } from "./Context/SidebarContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <NotesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotesProvider>
    </SidebarProvider>
  </StrictMode>
);
