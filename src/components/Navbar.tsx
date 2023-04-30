import { useSearchState } from "@yext/search-headless-react";
import { SearchBar } from "@yext/search-ui-react";
import { Link } from "react-router-dom";

export function Navbar() {
  console.log(useSearchState((state) => state.vertical.verticalKey));
  return (
    <>
      <div className="flex items-center ">
        <img
          src="https://i.imgur.com/X53yglR.png"
          alt=""
          className=" w-48 h-auto mr-8"
        />
        <SearchBar
          customCssClasses={{
            searchBarContainer: "   w-2/3 searchBar",
          }}
        ></SearchBar>
      </div>

      <nav className="flex flex-row">
        <Link className="text-black  hover:bg-gray-100 p-2" to="/">
          Universal Page
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
      </nav>
      <hr className="my-4" />
    </>
  );
}
