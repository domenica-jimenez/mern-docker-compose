import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/pages/App/App";
import ThemeRegistry from "./theme/ThemeRegistry";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeRegistry>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeRegistry>
  </React.StrictMode>
);

reportWebVitals();
