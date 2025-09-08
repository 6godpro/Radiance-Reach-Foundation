import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App.tsx";
import "@fontsource/poppins/index.css"

createRoot(document.getElementById("root")!).render(
    <Provider>
      <App />
    </Provider>
);
