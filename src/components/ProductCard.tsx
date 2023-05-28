import React, { useState } from "react";
import Product from "../types/products";
import { CardProps } from "@yext/search-ui-react";
import StarRating from "./starRating";

const ProductCard = (props: any) => {
  const { result } = props;
  const productRawData = result.rawData;
  const [hovered, setHovered] = useState(false);
  console.log();

  return (
    <div className="grid grid-cols-3 p-6 border space-x-3 space-y-2 my-4 shadow-md">
      {productRawData.c_images && (
        <div
          className="p-12 w-auto my-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            <img src={productRawData.c_images[1]} alt="" className="w-auto" />
          ) : (
            <img src={productRawData.c_images[0]} alt="" className="w-auto" />
          )}
        </div>
      )}
      <div>
        <div className="flex flex-col">
          <div className=" text-blue-500 text-xl font-normal">
            <a href={productRawData.landingPageUrl}>{result.name}</a>
          </div>
          {productRawData.c_type != "Monitors" ? (
            <div className="text-gray-500 text-sm">Order Code {result.id}</div>
          ) : (
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">
                {productRawData.c_manufacturerPart}
              </div>
              <div className="text-gray-500 text-sm">
                {productRawData.c_dellPart}
              </div>
            </div>
          )}
          {productRawData.c_ratingValue && (
            <div className="text-lg text-blue-500	">
              <StarRating selectedStars={productRawData.c_ratingValue} />{" "}
              <span className="text-sm text-black">
                {productRawData.c_ratingValue} ({productRawData.c_ratingCount})
              </span>
            </div>
          )}
          <div className="mt-2 font-bold">
            Specs{" "}
            {productRawData.c_type !== "Monitors" && (
              <span className="ml-4 font-normal hover:cursor-pointer hover:underline text-blue-500	 hover:text-blue-800 visited:text-purple-600">
                Customize
              </span>
            )}
          </div>
          <hr className="my-2" />
          {productRawData.c_type !== "Monitors" ? (
            <>
              <div className="flex gap-16">
                <div className="text-gray-500 w-1/3 text-sm">Processor</div>
                <div className="flex-1">
                  {productRawData.c_processorFull?.split(" (")[0]}
                </div>
              </div>
              <div className="flex gap-16">
                <div className="text-gray-500 w-1/3 text-sm">OS</div>
                <div className="flex-1">{productRawData.c_operatingSystem}</div>
              </div>
              <div className="flex gap-16">
                <div className="text-gray-500  w-1/3 text-sm">Graphics</div>
                <div className="flex-1">{productRawData.c_graphics}</div>
              </div>
              <div className="flex gap-16">
                <div className="text-gray-500  w-1/3 text-sm">Memory</div>
                <div className="flex-1">
                  {productRawData.c_memorySize} {productRawData.c_memoryType}
                </div>
              </div>
              <div className="flex gap-16">
                <div className="text-gray-500  w-1/3 text-sm">Storage</div>
                <div className="flex-1">
                  {productRawData.c_storageSize} {productRawData.c_storageType}
                </div>
              </div>
              <div className="flex gap-16">
                <div className="text-gray-500  w-1/3 text-sm">Display</div>
                <div className="flex-1">
                  13.4-in. display Full HD+ (1900X1200)
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-16">
                <div className="text-gray-500 w-1/3 text-sm">Diagonal Size</div>
                <div className="flex-1">{productRawData.c_screenSize}"</div>
              </div>
              {productRawData.c_fullRes && (
                <div className="flex gap-16">
                  <div className="text-gray-500 w-1/3 text-sm">
                    Resolution/Refresh Rate
                  </div>
                  <div className="flex-1">
                    {productRawData.c_fullRes.replaceAll(
                      "Native Resolution ",
                      ""
                    )}
                  </div>
                </div>
              )}
              {productRawData.c_panelType && (
                <div className="flex gap-16">
                  <div className="text-gray-500  w-1/3 text-sm">
                    Panel Technology
                  </div>
                  <div className="flex-1">{productRawData.c_panelType}</div>
                </div>
              )}
              {productRawData.c_adjustability && (
                <div className="flex gap-16">
                  <div className="text-gray-500  w-1/3 text-sm">
                    Adjustability
                  </div>
                  <div className="flex-1">
                    {productRawData.c_adjustability
                      ?.toString()
                      .replaceAll(",", ", ")}
                  </div>
                </div>
              )}
              {productRawData.c_adaptiveSync && (
                <div className="flex gap-16">
                  <div className="text-gray-500  w-1/3 text-sm">
                    Adaptive Sync
                  </div>
                  <div className="flex-1">
                    {productRawData.c_adaptiveSync?.toString()}
                  </div>
                </div>
              )}
              {productRawData.c_responseTimeFull && (
                <div className="flex gap-16">
                  <div className="text-gray-500  w-1/3 text-sm">
                    Response Time
                  </div>
                  <div className="flex-1">
                    {productRawData.c_responseTimeFull}
                  </div>
                </div>
              )}
              <div className="flex gap-16">
                <div className="text-gray-500  w-1/3 text-sm">Ports</div>
                <div className="flex-1 h-12 overflow-hidden">
                  {productRawData.c_portsFull?.toString().replaceAll(",", ", ")}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="font-bold text-lg">
            ${productRawData.price?.value?.toLocaleString()}
          </div>
          <div className="font-bold">
            Free 2-Day Delivery
            <span className="font-normal">
              {" "}
              if ordered by 2 PM CT
              <br />
              <span className="font-normal text-sm hover:cursor-pointer hover:underline text-blue-500	 hover:text-blue-800 visited:text-purple-600">
                View Delivery Dates
              </span>
            </span>
          </div>
          <div className="font-bold text-base">
            Special Offers{" "}
            <span className="font-normal text-sm hover:cursor-pointer hover:underline text-blue-500	 hover:text-blue-800 visited:text-purple-600">
              View All (2)
            </span>
          </div>
          <div className="font-bold text-base">
            Rewards Up to{" "}
            <span className="font-normal text-sm">$33.00 back</span>
          </div>
          <div className="font-normal text-base">
            <span className="font-bold">Financing Offers </span>
            <br />
            <span className="font-normal text-sm hover:cursor-pointer hover:underline text-blue-500	 hover:text-blue-800 visited:text-purple-600">
              Learn More{" "}
            </span>
            |{" "}
            <span className="font-normal text-sm hover:cursor-pointer hover:underline text-blue-500	 hover:text-blue-800 visited:text-purple-600">
              Apply Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
