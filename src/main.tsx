import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { config } from "./config/searchConfig";
import "./index.css";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import acquireSessionId from "./utils/acquireSessionId";

const searcher = provideHeadless(config);

searcher.setSessionTrackingEnabled(true);
const sessionId = acquireSessionId();
sessionId && searcher.setSessionId(sessionId);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
