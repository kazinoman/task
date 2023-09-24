import { Description, TitleComponent } from "@/components";
import React from "react";

const MeettastComponent = () => {
  return (
    <div className="px-4 xs:px-3 sm:px-4 lg:px-20 py-10 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-5">
        <TitleComponent text="Do more with Meetask" />
        <Description text="Meetask's intuitive features give any team the ability to quickly set up aind customize workflows for just about anything." />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row w-full justify-between gap-5 ">
        {data.map((data) => {
          return (
            <div className="w-[100%] flex flex-col justify-between gap-5 border-[1] rounded-xl bg-white p-10">
              <img
                src={data.icon}
                className="h-10 w-10"
              />
              <h1 className="font-bold text-lg">{data.status}</h1>
              <Description text={data.description} />
              <button className="p-1 border-[1px] border-blue-700 rounded-full text-blue-600 font-medium">{data.buttonName}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeettastComponent;

const data = [
  {
    icon: "/assets/integration.svg",
    status: "Integration",
    description: "Connect the apps your team already uses into your Trello workflow or add（ Power-Up to fine-tune your specific needs.",
    buttonName: "Browse Integrations",
  },
  {
    icon: "/assets/butlarAutomation.svg",
    status: "Butlar Automation",
    description: "Codeless automation is built into every Meetask board. Focus on the most important work and let the robots do it..",
    buttonName: "Get to Know Automation",
  },
  {
    icon: "/assets/Meettask.svg",
    status: "Meettask Enterprise",
    description: "The productivity tool teams love, paired with the features and security needed for scale.",
    buttonName: "Explose Enterprice",
  },
];
