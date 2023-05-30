import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  AppliedFilters,
  ResultsCount,
  VerticalResults,
  LocationBias,
  NumericalFacets,
  Pagination,
  StandardFacets,
} from "@yext/search-ui-react";
import { useEffect, useLayoutEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useMyContext } from "../context/context";
import ProductsVerticalResults from "../components/ProductsVerticalResults";
import { CardProps } from "../components/cardComponent";

export type MyComponentProps = {
  promo: string;
};

export function ProductsPage() {
  const searchActions = useSearchActions();
  const { promoData, setPromoData } = useMyContext();
  const query = useSearchState((state) => state.query.input);
  useLayoutEffect(() => {
    !query && promoData && setPromoData([]);
    query && searchActions.setQuery(query);
    searchActions.setVertical("products");
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <>
      <div>
        <div className="flex">
          <div className="w-64 shrink-0 mr-5">
            <NumericalFacets />
            <StandardFacets
              defaultExpanded={false}
              collapsible={true}
              customCssClasses={{
                divider: " h-4 bg-white",
                standardFacetsContainer: "  bg-gray-100 facClass py-2",
                optionsContainer: "px-2  max-h-64	 overflow-auto",
              }}
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-baseline">
              <ResultsCount />
              <AppliedFilters />
            </div>
            <ProductsVerticalResults
              CardComponent={ProductCard}
              displayAllResults={false}
            />
            <Pagination
              customCssClasses={{
                leftIconContainer:
                  "after:content-['Previous'] rounded-md justify-center w-36 after:ml-2 border-blue-500 text-blue-500 bg-white hover:text-white hover:bg-blue-500",
                rightIconContainer:
                  "before:content-['Next'] rounded-md before:mr-2 justify-center w-36 border-blue-500 text-blue-500 bg-white hover:text-white hover:bg-blue-500",
              }}
            />
            <LocationBias />
          </div>
        </div>
      </div>
    </>
  );
}
