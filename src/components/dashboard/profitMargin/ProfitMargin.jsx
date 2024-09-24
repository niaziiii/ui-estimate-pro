import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const ProfitMargin = () => {
  const data = [
    { lastWeek: 0, thisWeek: 150000 },
    { lastWeek: 140000, thisWeek: 300000 },
    { lastWeek: 160000, thisWeek: 562000 },
    { lastWeek: 200000, thisWeek: 400000 },
    { lastWeek: 240000, thisWeek: 300000 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="flex flex-col gap-[5px] w-[165px] h-[103px] justify-center items-center"
          style={{
            backgroundColor: "#2D3340",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <p className="text-[10px] font-[400] leading-[12px] text-center text-[#EBEBF5]">{`This Week - Thu`}</p>
          <p
            className="font-[800] leading-[28px] text-center text-[22px]"
            style={{ fontWeight: "bold" }}
          >{`${payload[1]?.value / 1000}K`}</p>
          <p className="text-[14px] font-[400] leading-[20px] text-center text-[#EBEBF5]">
            Avenue
          </p>
        </div>
      );
    }
    return null;
  };

  const yAxisTickFormatter = (value) => {
    return `${value / 10000}M`;
  };

  return (
    <div
      className="p-[30px] rounded-[28px] bg-[#FFFFFF] mt-[30px] flex flex-col gap-y-[50px]"
      // data-aos="fade-left"
    >
      <div className="flex items-center gap-x-2 flex-wrap  justify-between ">
        <div className="flex gap-x-8 items-start">
          <h3 className="text-[20px] sm:text-[24px] leading-[32px] font-[600] text-[#2D3340] mb-[24px]">
            Financial Impact Or Profit Margin
          </h3>
        </div>

        <div className="flex items-center flex-wrap gap-y-3 gap-x-[25px]">
          <div className="flex items-center gap-x-[8px] ">
            <p className="h-[3px] rounded-md w-[20px] bg-[#2D3340]"></p>
            <p className="text-[14px] font-[500] leading-[20px]">Last Week</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="border py-[9px] px-[15px] rounded-[10px]"
              type="date"
            />
            <div className="bg-[#F7F7F7] cursor-pointer h-[42px] rounded-[7px] w-[40px] flex items-center justify-center">
              <BsThreeDotsVertical className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full p-2">
        <ResponsiveContainer width="100%" height={238}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 3,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#ccc" />
            <XAxis dataKey="name" strokeWidth={0} />
            <YAxis
              padding={{
                bottom: "10",
              }}
              tickMargin={20}
              strokeWidth={0}
              tickFormatter={yAxisTickFormatter}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#2D3340",
                strokeWidth: 2,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="lastWeek"
              stackId="1"
              stroke="#12B757"
              fill="#0033661A"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="thisWeek"
              stackId="1"
              strokeWidth={3}
              stroke="#2D3340"
              fill="#0033661A"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitMargin;
