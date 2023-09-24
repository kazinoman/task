import React from "react";

interface IDescriptionProps {
  text: string;
  classname?: string;
}

const Description = ({ text, classname }: IDescriptionProps) => {
  return <div className={`text-[#a1a4b1] font-medium text-sm ${classname}`}>{text}</div>;
};

export default Description;
