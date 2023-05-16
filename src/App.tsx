import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { Navbar } from "./components/Navbar";
import { PeoplePage } from "./pages/PeoplePage";
import { ProductsPage } from "./pages/ProductsPage";
import { LocationsPage } from "./pages/LocationsPage";
import UniversalPage from "./pages/UniversalPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyticsProvider } from "@yext/search-ui-react";
import acquireSessionId from "./utils/acquireSessionId";
import { config } from "./config/searchConfig";
import { HelpArticlesPage } from "./pages/HelpArticlesPage";
import { VideosPage } from "./pages/VideosPage";

const searcher = provideHeadless(config);

searcher.setSessionTrackingEnabled(true);
const sessionId = acquireSessionId();
sessionId && searcher.setSessionId(sessionId);

function App() {
  return (
    <div className="p-4">
      <SearchHeadlessProvider searcher={searcher}>
        <AnalyticsProvider {...config}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<UniversalPage />} />
              <Route path="help_articles" element={<HelpArticlesPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="locations" element={<LocationsPage />} />
              <Route path="videos" element={<VideosPage />} />
            </Routes>
          </BrowserRouter>
        </AnalyticsProvider>
      </SearchHeadlessProvider>
    </div>
  );
}

export default App;
