"use client";
import { Description } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row bg-[#262d3e]   xs:px-3 sm:px-4 lg:px-20 items-center justify-between">
      <div className="flex flex-col gap-10 w-[100%] xs:w-[95%] sm:w-[90%] md:w-[90%]">
        <h1 className="text-white font-extrabold xs:text-sm sm:text-base md:text-5xl  leading-snug">
          Meetask brings all your
          <br /> tasks , meeting, and <br /> tools together
        </h1>
        <Description text="Simple, flexible and powerful. All it takes is boards, lists, and cards to get a clear view of who is doing what, who is meeting with, setting targets and what needs to be done." />
        <div>
          <Description text="Download Apps:" />
          <div className="flex flex-row gap-4 mt-4">
            <button className="border-[1px] border-[white] gap-3 px-3 py-2 rounded-xl flex flex-row items-center">
              <Icon
                icon="mdi:google-play"
                className="text-white h-8 w-8"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-medium text-xs uppercase text-white">Got it On</h1>
                <h1 className="font-bold text-lg  text-white">Google play</h1>
              </div>
            </button>
            <button className="border-[1px] border-[white] gap-3 px-3 py-2 rounded-xl flex flex-row items-center">
              <Icon
                icon="ic:round-apple"
                className="text-white h-8 w-8"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-medium text-xs text-white">Download on the</h1>
                <h1 className="font-bold text-lg  text-white">Google play</h1>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-start gap-14 mt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white">
              <span className="font-bold text-xl">4.8</span>
              <span className="font-normal text-sm">/5</span>
            </h1>
            <div className="flex flex-row gap-1">
              {[1, 2, 3, 4, 5].map(({}) => {
                return (
                  <Icon
                    icon="solar:star-bold"
                    className="text-[#FFBC10]"></Icon>
                );
              })}
              <Description text="Rating" />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-5 items-center">
              <div className="flex flex-row">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                ].map((data, index: number) => {
                  return (
                    <img
                      src={data}
                      className={`h-10 w-10 bg-cover rounded-full border-[3px] border-[#262d3e] ${"z-[index]"} mr-[-10px]`}
                    />
                  );
                })}
              </div>
              <h1 className="font-bold text-xl text-white">180K+ </h1>
            </div>
            <Description text="Happy Customers Using Meetask" />
          </div>
        </div>
      </div>
      <div className="w-[40%] xs:w-[95%] sm:w-[90%] md:w-[90%]">
        <Image
          src={"assets/Image - Mockup.svg"}
          alt="logo"
          height={600}
          width={700}
        />
      </div>
    </div>
  );
};

export default HeroSection;
