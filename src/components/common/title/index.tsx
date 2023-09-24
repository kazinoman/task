import React from "react";

interface ITitleComponentProps {
  text: string;
  classname?: string;
}

const TitleComponent: React.FC<ITitleComponentProps> = ({ text, classname }) => {
  return <div className={`text-black font-medium text-sm sm:text-lg md:text-lg lg:text-4xl ${classname}`}>{text}</div>;
};

export default TitleComponent;
