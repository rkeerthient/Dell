import {
  CardProps,
  useCardAnalyticsCallback,
  useCardFeedbackCallback,
} from "@yext/search-ui-react";
import Ce_videos from "../types/videos";
import YouTube from "react-youtube";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

export function PromoCard(props: CardProps<any>): JSX.Element {
  const { result } = props;
  console.log(JSON.stringify(result));
  const dummyList = [
    "No interest if paid in full within 6 months on Purchases $299 or more",
    "No interest if paid in full within 12 months on Purchases $899 or more",
  ];

  return (
    <div className="flex flex-row gap-6  border rounded-lg mb-4 p-4 shadow-sm w-full">
      <img
        src={result.rawData.primaryPhoto.image.url}
        alt=""
        className="w-80 h-auto"
      />
      <div className="space-y-3">
        <div className="text-2xl font-bold">{result.rawData.name}</div>
        <div>{result.rawData.description.replaceAll("^", "")}</div>
        <div>
          <div className="font-medium">Features:</div>
          <ul className="space-y-2">
            {result.rawData.c_featuresList.map((item: any, index: any) => (
              <li key={index} className="flex gap-2 items-center">
                <CheckCircleIcon
                  color="white"
                  height={20}
                  width={20}
                  fill="green"
                />
                {item.replaceAll("*", "").replaceAll("^", "")}
              </li>
            ))}
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
}
