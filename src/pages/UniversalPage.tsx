import { useSearchActions } from "@yext/search-headless-react";
import {
  DirectAnswer,
  ResultsCount,
  SectionProps,
  SpellCheck,
  UniversalResults,
} from "@yext/search-ui-react";
import { useLayoutEffect } from "react";
import HelpArticlesCard from "../components/HelpArticlesCard";
import ProductCard from "../components/ProductCard";
import { VideosCard } from "../components/VideosCard";
import { PromoCard } from "../components/PromoCard";

const customSearchBarCss = {
  searchBarContainer: "mb-3 text-emerald-800",
};
const GridSection = ({ results, CardComponent, header }: any) => {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }

  return (
    <div>
      <div>{header}</div>
      <div className="grid grid-cols-4 gap-8">
        {results.map((r: any) => (
          <CardComponent result={r} key={r.id} />
        ))}
      </div>
    </div>
  );
};

const PromoSection = ({ results, CardComponent, header }: any) => {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }

  return (
    <div>
      <div>{header}</div>
      <div className="flex w-full">
        {results.map((r: any) => (
          <CardComponent result={r} key={r.id} />
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
  videos: {
    SectionComponent: GridSection,
    CardComponent: VideosCard,
    label: "Videos",
    viewAllButton: true,
  },
};

export default function UniversalPage(): JSX.Element {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.executeUniversalQuery();
  });

  return (
    <div className="px-12">
      <SpellCheck />
      <DirectAnswer />
      <ResultsCount />
      <UniversalResults
        verticalConfigMap={{
          products: {
            CardComponent: ProductCard,
            label: "Products",
            viewAllButton: true,
          },
          help_articles: {
            CardComponent: HelpArticlesCard,
            label: "Help Articles",
            viewAllButton: true,
          },
          videos: {
            SectionComponent: GridSection,
            CardComponent: VideosCard,
            label: "Videos",
            viewAllButton: true,
          },
          promo: {
            SectionComponent: PromoSection,
            CardComponent: PromoCard,
            label: "Promo",
          },
        }}
      />
    </div>
  );
}
