import {
  Result,
  provideHeadless,
  useSearchState,
  VerticalResults as VerticalResultsData,
  useSearchActions,
} from "@yext/search-headless-react";
import {
  DropdownItem,
  FocusedItemData,
  RenderEntityPreviews,
  SearchBar,
} from "@yext/search-ui-react";
import { Link } from "react-router-dom";
import { config } from "../config/searchConfig";
import Product from "../types/products";
import classNames from "classnames";

export function Navbar() {
  let currKey = useSearchState((state) => state.vertical.verticalKey);
  let searchActions = useSearchActions();
  const handleSearch = (input: string) => {
    searchActions.setQuery(input);
    currKey === undefined
      ? searchActions.executeUniversalQuery()
      : searchActions.executeVerticalQuery();
  };

  const entityPreviewSearcher = provideHeadless({
    ...config,
    headlessId: "visual-autocomplete",
  });
  const renderEntityPreviews: RenderEntityPreviews = (
    autocompleteLoading,
    verticalKeyToResults: Record<string, VerticalResultsData>,
    dropdownItemProps: {
      onClick: (
        value: string,
        _index: number,
        itemData?: FocusedItemData
      ) => void;
      ariaLabel: (value: string) => string;
    }
  ): any => {
    const productResults = verticalKeyToResults["products"]
      ?.results as unknown as Result<Product>[];

    return productResults ? (
      <div
        className={classNames("grid grid-cols-4 px-8 gap-8", {
          "opacity-50": autocompleteLoading,
        })}
      >
        {productResults.map((result, i) => (
          <DropdownItem
            key={result.rawData.id}
            value={result.rawData.name}
            ariaLabel={dropdownItemProps.ariaLabel}
          >
            <div onClick={() => handleSearch(result.rawData.name)}>
              {result.rawData.c_images && (
                <img
                  src={result.rawData.c_images[0]}
                  alt=""
                  className="h-32 w-32 mx-auto"
                />
              )}
              <div className="text-sm">{result.name}</div>
            </div>
          </DropdownItem>
        ))}
      </div>
    ) : null;
  };
  return (
    <>
      <div className="flex items-center ">
        <img
          src="https://i.imgur.com/X53yglR.png"
          alt=""
          className=" w-48 h-auto mr-8"
        />
        {currKey === undefined || currKey === "products" ? (
          <SearchBar
            visualAutocompleteConfig={{
              entityPreviewSearcher: entityPreviewSearcher,
              includedVerticals: ["products"],
              renderEntityPreviews: renderEntityPreviews,
              universalLimit: { products: 4 },
              entityPreviewsDebouncingTime: 500,
            }}
            customCssClasses={{
              searchBarContainer: "   w-2/3 searchBar",
            }}
          ></SearchBar>
        ) : (
          <SearchBar
            customCssClasses={{
              searchBarContainer: "   w-2/3 searchBar",
            }}
          ></SearchBar>
        )}
      </div>

      <nav className="flex flex-row">
        <Link className="text-black  hover:bg-gray-100 p-2" to="/">
          Home
        </Link>
        <Link
          className="text-black hover:bg-gray-100  p-2"
          to="./help_articles"
        >
          Help Articles
        </Link>
        <Link className="text-black hover:bg-gray-100  p-2" to="./products">
          Products Page
        </Link>
        <Link className="text-black hover:bg-gray-100  p-2" to="./videos">
          Support Videos
        </Link>
      </nav>
      <hr className="my-4" />
    </>
  );
}
