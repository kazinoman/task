"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const NavComponent = () => {
  return (
    <div className="bg-[#262d3e] h-20 px-10 w-full flex flex-col sm:flex-row justify-between items-center">
      <div>
        <Image
          alt="asdf"
          src="assets/logo.svg"
          className="text-black"
          width={100}
          height={10}
        />
      </div>
      <div className=" hidden sm:flex sm:flex-row gap-10 items-center">
        <MenuItem
          icon="icon-park-outline:down"
          text="Features"
        />
        <MenuItem
          icon="icon-park-outline:down"
          text="Solutions"
        />
        <MenuItem
          icon="icon-park-outline:down"
          text="Plans"
        />
        <MenuItem
          // icon="icon-park-outline:down"
          text="Pricing"
        />
        <MenuItem
          icon="icon-park-outline:down"
          text="Resources"
        />
        <button className="bg-[#167efb] rounded-3xl px-4 py-2 text-sm font-medium text-white">Get started free</button>
      </div>
    </div>
  );
};

export default NavComponent;

interface IMenuProps {
  text: string;
  icon?: string;
}

const MenuItem: React.FC<IMenuProps> = ({ text, icon }) => {
  return (
    <div className="flex flex-row items-center justify-between text-white">
      <h1 className="text-base font-medium">{text}</h1>
      {!!icon && (
        <Icon
          icon={`${icon}`}
          className="w-5 h-5 text-[#e5e5e5]"
        />
      )}
    </div>
  );
};
