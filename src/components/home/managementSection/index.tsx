"use client";
import { Description, TitleComponent } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ManagementSection = () => {
  return (
    <div className="px-4 xs:px-3 sm:px-4 lg:px-20 py-10 flex flex-col gap-8 mt-10">
      <div className="text-center">
        <TitleComponent text="The Best Management App" />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row w-full justify-between gap-4 ">
        {data.map((data) => {
          return (
            <div className=" flex flex-col items-start gap-10 border-[1px] rounded-xl p-10">
              <div className="flex flex-row gap-4 items-center">
                <div className="p-2 rounded-full bg-blue-400 ">
                  <Icon
                    icon={data.icon}
                    className="h-5 w-5 text-white  rounded-full"
                  />
                </div>
                <h1 className="font-bold text-lg">{data.status} </h1>
              </div>
              <TitleComponent
                text={data.views}
                classname="font-extrabold text-3xl"
              />
              <Description text={data.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManagementSection;

const data = [
  { status: "Customer", icon: "ion:person-sharp", description: "We Already Have More Than 180 Thousand Users Around The World Who Use PayCash Every Daly", views: "180K+" },
  { status: "User Satisfaction", icon: "ri:verified-badge-fill", description: "We Have A Rating On The Playstore And Appstore Of 4.8 From 180 Thousand Downloads", views: "4.8" },
  { status: "Interest Rate", icon: "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow", description: "with more than 80% satisfaction we believe will be big and will continue to improve our service performance", views: "87.4%" },
];
