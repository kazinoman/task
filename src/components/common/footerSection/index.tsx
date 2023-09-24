import React from "react";
import Description from "../description";

const FooterSection = () => {
  return (
    <footer className="bg-[#262d3e] px-4 xs:px-3 sm:px-4 lg:px-20 pt-10 flex flex-col gap-8 mt-10 ">
      <div className="flex flex-col gap-6  sm:flex-col md:flex-col xl:flex-row items-start justify-between">
        <div className="flex flex-col gap-2">
          <img
            src="/assets/logo.svg"
            className="h-20 w-32"
          />
          <Description text="Join our newsletter to stay up to date on features and releases." />
        </div>
        <div className="flex flex-row justify-around w-[100%] sm:w-[100%] md:w-[100%] xl:w-[70%]">
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-lg">Features</h1>
            {["Discussions", "Task", "Sub Task", "Meeting", "Forms", "Time Tracking"].map((data) => {
              return <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">{data}</h1>;
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-lg">Resources</h1>
            {["BLog", "Integration", "Apps", "Pricing", "Affiliates", "API", "Change Log"].map((data) => {
              return <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">{data}</h1>;
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-lg">Support</h1>
            {["Support Center", "FAQ", "Contact Us "].map((data) => {
              return <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">{data}</h1>;
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-semibold text-lg">Follow US</h1>
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((data) => {
              return <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">{data}</h1>;
            })}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-600 flex flex-row justify-between items-center text-white py-4">
        <h1 className="text-white font-medium text-base sm:text-xs md:text-base">2022. All right reserved.</h1>
        <div className="flex flex-row gap-3">
          <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">Privacy policy</h1>
          <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">Terms of Service</h1>
          <h1 className="text-white font-medium text-xs sm:text-xs md:text-base">Cookies Settings</h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
