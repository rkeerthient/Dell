import { VerticalResults } from "@yext/search-ui-react";
import { useMyContext } from "../context/context";
import { ProductsPage } from "./ProductsPage";
import { PromoCard } from "../components/PromoCard";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export function ProductsPageWrapper() {
  const { promoData, custLoad } = useMyContext();
  const dummyList = [
    "No interest if paid in full within 6 months on Purchases $299 or more",
    "No interest if paid in full within 12 months on Purchases $899 or more",
  ];
  const buildPromoCard = () => {
    console.log(JSON.stringify(promoData));

    return (
      <div className="flex flex-row gap-6  border rounded-lg mb-4 p-4 shadow-sm w-full justify-around">
        <img
          src={promoData.results[0].rawData.primaryPhoto.image.url}
          alt=""
          className="w-80 h-auto"
        />
        <div className="space-y-3">
          <div className="text-2xl font-bold">
            {promoData.results[0].rawData.name}
          </div>
          <div>
            {promoData.results[0].rawData.description.replaceAll("^", "")}
          </div>
          <div>
            <div className="font-medium">Features:</div>
            <ul className="space-y-2">
              {promoData.results[0].rawData.c_featuresList.map(
                (item: any, index: any) => (
                  <li key={index} className="flex gap-2 items-center">
                    <CheckCircleIcon
                      color="white"
                      height={20}
                      width={20}
                      fill="green"
                    />
                    {item.replaceAll("*", "").replaceAll("^", "")}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="space-y-4 w-1/3">
          <div className="text-2xl font-bold">
            Personal Promotional Financing Offers
          </div>
          <div>
            <ul className="space-y-1 list-decimal list-inside">
              {dummyList.map((item: any, index: any) => (
                <li key={index} className="flex gap-2 items-start">
                  <ArrowRightIcon
                    color="white"
                    height={20}
                    width={20}
                    fill="green"
                    className="mt-1"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="font-normal text-base">
            <span className="font-normal border border-blue-500 py-2 px-4 hover:cursor-pointer hover:text-white text-blue-500	 hover:bg-blue-800">
              Apply Now
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {promoData && <div>{buildPromoCard()}</div>}
      {!custLoad && (
        <div>
          <ProductsPage />
        </div>
      )}
    </>
  );
}
