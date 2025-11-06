import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.tsx";
import Provider from "./Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>,
);
