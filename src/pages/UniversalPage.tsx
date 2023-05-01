import { useSearchActions } from "@yext/search-headless-react";
import {
  DirectAnswer,
  ResultsCount,
  SpellCheck,
  UniversalResults,
} from "@yext/search-ui-react";
import { useLayoutEffect } from "react";
import HelpArticlesCard from "../components/HelpArticlesCard";
import ProductCard from "../components/ProductCard";

const customSearchBarCss = {
  searchBarContainer: "mb-3 text-emerald-800",
};
export const GridSection = ({ results, CardComponent, header }: any) => {
  return (
    <div className="flex flex-col space-y-2 univ">
      <div className="flex justify-between">
        <div className="font-semibold px-32">{header.props.label}</div>
        <a
          href={`/${header.props.label.toLowerCase()}`}
          className="hover:underline "
          style={{ color: "blue" }}
        >
          View All
        </a>
      </div>
      <div
        style={{
          marginTop: "2em",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "2em",
        }}
      >
        {results.map((item: any) => (
          <ProductCard result={item} />
        ))}
      </div>
    </div>
  );
};

const universalVerticalConfigMap = {
  products: {
    CardComponent: ProductCard,
    label: "Products",
  },
  help_articles: {
    CardComponent: HelpArticlesCard,
    label: "Help Articles",
  },
};

export default function UniversalPage(): JSX.Element {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.executeUniversalQuery();
  });

  return (
    <div>
      <SpellCheck />
      <DirectAnswer />
      <ResultsCount />
      <UniversalResults verticalConfigMap={universalVerticalConfigMap} />
    </div>
  );
}
