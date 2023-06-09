import { useLayoutEffect } from "react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  ResultsCount,
  VerticalResults,
  LocationBias,
  Pagination,
} from "@yext/search-ui-react";
import { VideosCard } from "../components/VideosCard";

export function VideosPage() {
  const searchActions = useSearchActions();
  const query = useSearchState((state) => state.query.input);

  useLayoutEffect(() => {
    query && searchActions.setQuery(query);
    searchActions.setVertical("videos");
    searchActions.executeVerticalQuery();
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex">
        <div className="flex-grow">
          <div className="flex items-baseline">
            <ResultsCount />
          </div>
          <VerticalResults
            CardComponent={VideosCard}
            customCssClasses={{
              verticalResultsContainer: "grid grid-cols-3 gap-4",
            }}
          />
          <Pagination />
          <LocationBias />
        </div>
      </div>
    </div>
  );
}
