import {
  CardProps,
  useCardAnalyticsCallback,
  useCardFeedbackCallback,
} from "@yext/search-ui-react";
import Ce_videos from "../types/videos";
import YouTube from "react-youtube";

export function VideosCard(props: CardProps<Ce_videos>): JSX.Element {
  const { result } = props;
  const opts = {
    height: "270",
    width: "380",
  };
  console.log(JSON.stringify(result));

  const _onReady = (e: any) => {
    e.target.pauseVideo();
  };
  let date = new Date(result.rawData.c_datePublished!);
  let postedDate =
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "long" }) +
    ", " +
    date.getFullYear();

  return (
    <div className="flex flex-col justify-between border rounded-lg mb-4 p-4 shadow-sm">
      <YouTube
        videoId={result.rawData.landingPageUrl?.split("v=")[1]}
        onReady={_onReady}
        opts={opts}
        className="border"
      />
      <p className="text-xl font-bold mt-4">{result.name}</p>
      <p className="mt-4">Posted - {postedDate}</p>
      <p className="mt-4">Description: {result.description}</p>
    </div>
  );
}
