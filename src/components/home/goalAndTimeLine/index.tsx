import { Description, TitleComponent } from "@/components";
import React from "react";

const GoalAndTimeLineSection = () => {
  return (
    <div className="flex flex-col xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-around items-center gap-16 px-4 py-4 xs:px-3 sm:px-4 lg:px-20 mt-10">
      <div className="sm:w-[100%] md:w-[100%] lg:w-[50%]">
        <img
          src="/assets/SetGoal.svg"
          className="w-[100%]"
        />
      </div>
      <div className="sm:w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-5">
        <TitleComponent text="Set Goals & Timelines" />
        <Description text="Keep track of all your task assignments, activities, and time logs across projects. Use the 'My Work' section to stay on top of all tasks assigned to you, sorted by deadlines." />
        <button className="bg-[#167EFB] w-[10rem] rounded-full p-2 text-white">Read more</button>
      </div>
    </div>
  );
};

export default GoalAndTimeLineSection;
