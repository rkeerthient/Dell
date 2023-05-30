import { useLayoutEffect } from "react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  AppliedFilters,
  ResultsCount,
  VerticalResults,
  LocationBias,
  StandardFacets,
  ApplyFiltersButton,
  Pagination,
  AlternativeVerticals,
} from "@yext/search-ui-react";
import HelpArticlesCard from "../components/HelpArticlesCard";

const hierarchicalFacetFieldIds = ["c_hierarchicalFacet"];

export function HelpArticlesPage() {
  const searchActions = useSearchActions();
  const query = useSearchState((state) => state.query.input);

  useLayoutEffect(() => {
    query && searchActions.setQuery(query);
    searchActions.setVertical("help_articles");
    searchActions.executeVerticalQuery();
  });

  return (
    <div>
      {/* <SearchBar /> */}
      <div className="flex">
        <div className="w-56 shrink-0 mr-5">
          <StandardFacets />

          <br />
          <ApplyFiltersButton />
        </div>
        <div className="flex-grow">
          <AlternativeVerticals
            currentVerticalLabel="People"
            verticalConfigMap={{
              products: { label: "Products" },
            }}
          />
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters
              hierarchicalFacetsFieldIds={hierarchicalFacetFieldIds}
            />
          </div>
          <VerticalResults CardComponent={HelpArticlesCard} />
          {/* Test generic result type  */}
          {/* <VerticalResults
            CardComponent={CustomCard}
          /> */}
          <Pagination />
          <LocationBias />
        </div>
      </div>
    </div>
  );
}
