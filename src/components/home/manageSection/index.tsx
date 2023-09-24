// @ts-nocheck
"use client";
import { Description, TitleComponent } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Column, TinyArea } from "@ant-design/plots";
import LineChart from "./lineChart";

const ManageSection = () => {
  const config = {
    data,
    isGroup: true,
    xField: "day",
    yField: "value",
    seriesField: "name",
    height: 200,
  };

  return (
    <div>
      <section className="px-4 xs:px-3 sm:px-4 lg:px-20 py-10 flex flex-col gap-8">
        <div className="text-center">
          <TitleComponent text="You Just Need One App For Manage Everything" />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-5">
          <div className="flex flex-row justify-center items-center gap-6 flex-wrap sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[33%]">
            {taskData.map((data, id: number) => {
              return (
                <div
                  className={`p-6 w-32  bg-[#27B08A] rounded-xl shadow-2xl flex flex-col items-start justify-center gap-3`}
                  key={id}>
                  <div className="flex flex-row items-center justify-between gap-3">
                    <div className="p-1 bg-white rounded-full">
                      <Icon
                        icon={data.icon}
                        className={``}
                      />
                    </div>
                    <Description
                      text={data.amount}
                      classname="text-white"
                    />
                  </div>
                  <Description
                    text={data.status}
                    classname="text-white"
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-white rounded-xl p-4  sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[33%]">
            <Column {...config} />
          </div>
          <div className="bg-white  rounded-xl p-4 sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[33%]">
            <h1 className="font-medium">Working hours</h1>
            <LineChart />
          </div>
        </div>
      </section>
      <div className="flex flex-row overflow-x-auto gap-5">
        {randomData.map((data) => {
          return (
            <div className="px-3 py-2 rounded-full border-[1px] border-blue-600 flex flex-row items-center justify-normal gap-3 w-full hover:bg-blue-400 hover:text-white delay-100 duration-300">
              <div className="p-2 bg-blue-500 rounded-full">
                <Icon
                  icon={data.icon}
                  className="w-5 h-5 text-white"
                />
              </div>
              <h1 className="whitespace-nowrap font-medium">{data.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row overflow-x-auto gap-5 mt-5">
        {randomData.map((data) => {
          return (
            <div className="px-3 py-2 rounded-full border-[1px] border-blue-600 flex flex-row items-center justify-normal gap-3 w-full hover:bg-blue-400 hover:text-white delay-100 duration-300">
              <div className="p-2 bg-blue-500  rounded-full">
                <Icon
                  icon={data.icon}
                  className="w-5 h-5 text-white"
                />
              </div>
              <h1 className="whitespace-nowrap font-medium">{data.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageSection;

const taskData = [
  { status: "Competed task", amount: "20", icon: "mdi:tick", bgColor: "#27B08A" },
  { status: "Onging task", amount: "17", icon: "ph:arrow-up-bold", bgColor: "#FB8F46" },
  { status: "Canceled task", amount: "13", icon: "iconamoon:close-duotone", bgColor: "#10161B" },
  { status: "Pending task", amount: "14", icon: "uim:process", bgColor: "#FECB2F" },
];

const data = [
  {
    name: "Complete",
    day: "Sat",
    value: 18.9,
  },
  {
    name: "Complete",
    day: "Sun",
    value: 28.8,
  },
  {
    name: "Ongoing",
    day: "Mon",
    value: 39.3,
  },
  {
    name: "Ongoing",
    day: "Tue",
    value: 81.4,
  },
  {
    name: "Ongoing",
    day: "Wed",
    value: 47,
  },
  {
    name: "Ongoing",
    day: "Thu",
    value: 20.3,
  },
  {
    name: "Ongoing",
    day: "Fri",
    value: 24,
  },
];

const randomData = [
  { name: "RoadMaps", icon: "mingcute:sitemap-fill" },
  { name: "Task", icon: "material-symbols:task" },
  { name: "Discussion", icon: "healthicons:group-discussion-meetingx3" },
  { name: "Pending Task", icon: "ic:baseline-pending-actions" },
  { name: "Meeting", icon: "fluent:meet-now-48-filled" },
  { name: "Forms", icon: "fa-brands:wpforms" },
  { name: "Member", icon: "carbon:user-filled" },
  { name: "Reporting", icon: "mdi:file-report-outline" },
  { name: "Timeline", icon: "ion:time-sharp" },
  { name: "Working hours", icon: "fluent-mdl2:business-hours-sign" },
  { name: "Ongoing", icon: "ic:round-call-missed-outgoing" },
  { name: "Calender", icon: "uis:calender" },
];
