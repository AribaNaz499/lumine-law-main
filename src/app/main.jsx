import { Provider } from "../lib/chakra-components/ui/provider.jsx";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);