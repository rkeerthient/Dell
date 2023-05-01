import { useLayoutEffect } from "react";
import { useSearchActions } from "@yext/search-headless-react";
import {
  AppliedFilters,
  FilterSearch,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  LocationBias,
  StaticFilters,
  StandardFacets,
  HierarchicalFacets,
  FilterDivider,
  ApplyFiltersButton,
  Pagination,
  NumericalFacets,
  AlternativeVerticals,
} from "@yext/search-ui-react";
import FAQCard from "../components/HelpArticlesCard";
import HelpArticlesCard from "../components/HelpArticlesCard";
 
const hierarchicalFacetFieldIds = ["c_hierarchicalFacet"];
const filterSearchFields = [{ fieldApiName: "name", entityType: "ce_person" }];
const employeeFilterConfigs = [
  { value: "Consulting" },
  { value: "Technology" },
];
const hierarchicalFilterConfigs = [{ value: "Computer & Tablets" }];
const alternativeVerticalsConfigMap = {
  products: { label: "Products" },
};

export function HelpArticlesPage() {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
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
