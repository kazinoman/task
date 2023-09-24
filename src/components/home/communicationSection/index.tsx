"use client";
import { Description, TitleComponent } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CommunicationSection = () => {
  return (
    <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-around items-center gap-16 px-4 py-4 xs:px-3 sm:px-4 lg:px-20 mt-10">
      <div className="sm:w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-5">
        <TitleComponent text="Communication and Collaboration Platform" />
        <Description text="Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering." />
        <button className="bg-[#167EFB] w-[10rem] rounded-full p-2 text-white">Read more</button>
      </div>
      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
        <div className="rounded-3xl bg-white px-5 sm:px-5 md:px-4 lg:px-10 xl:px-20 py-10 h-full flex flex-col justify-center">
          <div className="flex flex-row justify-between mb-5">
            <div className="bg-blue-100 rounded-full p-2">
              <img src="assets/video.svg" />
            </div>
            <div className="flex flex-row">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
              ].map((data, index: number) => {
                return (
                  <img
                    src={data}
                    className={`h-10 w-10 bg-cover rounded-full border-[3px] border-[#fff] ${"z-[index]"} mr-[-10px]`}
                  />
                );
              })}
              <div className={`bg-[#27B08A] flex flex-row items-center justify-center h-10 w-10 bg-cover rounded-full border-[3px] border-[#fff] ${"z-30"} mr-[-10px]`}>
                <h1 className={``}>+4</h1>
              </div>
            </div>
          </div>
          <h1 className="font-medium text-lg">Mobile Banking Meeting</h1>
          <div className="flex flex-row gap-2 my-2">
            <div className="flex flex-row items-center gap-2 py-2">
              <Icon
                icon="ri:time-fill"
                className="text-gray-500"
              />
              <Description text="Today at 02:00 PM" />
            </div>
            <div className="flex flex-row items-center gap-2 py-2">
              <Icon
                icon="ri:time-fill"
                className="text-gray-500"
              />
              <Description text="30 min" />
            </div>
          </div>
          <button className="bg-[#167EFB] w-full rounded-full p-2 text-white">Join Zoom</button>
          <div className="flex flex-row justify-between mb-5 mt-10">
            <div className="bg-blue-100 rounded-full p-2">
              <img src="assets/video.svg" />
            </div>
            <div className="flex flex-row">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
              ].map((data, index: number) => {
                return (
                  <img
                    src={data}
                    className={`h-10 w-10 bg-cover rounded-full border-[3px] border-[#fff] ${"z-[index]"} mr-[-10px]`}
                  />
                );
              })}
              <div className={`bg-[#27B08A] flex flex-row items-center justify-center h-10 w-10 bg-cover rounded-full border-[3px] border-[#fff] ${"z-30"} mr-[-10px]`}>
                <h1 className={``}>+4</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSection;
