import React from "react";
import { Column, TinyArea } from "@ant-design/plots";

const LineChart = () => {
  const Areaconfig = {
    height: 200,
    autoFit: true,
    data,
    smooth: true,
  };
  return <TinyArea {...Areaconfig} />;
};

export default LineChart;
const data = [264, 417, 438, 887, 309, 340, 539, 243, 226, 192];
