import React from "react";
import LegendButton from "./LegendButton";
import { generateColor } from "../plugin/generateColor";

interface HeatMapInf {
  title?: string;
  colorRange: { from: number; to: number; color: string; name: string }[];
  series: {
    name: string;
    data: number[];
    total?: number;
  }[];
  xaxis: { labels?: string[]; totals?: number[] };
  legends?: {
    from?: number;
    to?: number;
    name: string;
    color: string;
  }[];
  chartStyle?: React.CSSProperties;
}

const HeatMap = ({
  series,
  xaxis,
  title,
  legends,
  colorRange,
  chartStyle,
}: HeatMapInf) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-montserrat text-sm font-bold">{title}</h1>
        <div className="space-x-3">
          {legends?.map((item) => (
            <LegendButton
              key={item.name}
              variant={item.color}
              label={item.name}
            />
          ))}
        </div>
      </div>
      <div
        className="mt-9 w-full px-12 flex items-center justify-end"
        style={chartStyle}
      >
        <div className="grid grid-cols-[auto,46.875rem,auto] items-center gap-3">
          {series?.map((item) => (
            <React.Fragment key={item.name}>
              <div className="flex">
                <p className="text-8xl text-right">{item.name}</p>
              </div>
              <div className="w-full flex">
                {item.data.map((data) => {
                  const colorR = colorRange?.find(
                    (c) => c.from <= data && c.to >= data
                  ) || {
                    from: 0,
                    to: data,
                    color: "#000000",
                    name: "error",
                  };

                  return (
                    <div
                      key={data + item.name}
                      className="flex-1 p-5 border border-primary-20 relative group cursor-pointer"
                    >
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-2 transition-opacity opacity-0 rounded-full bg-white w-25 h-25 grid place-items-center border-2 text-gray-500"
                        style={{ borderColor: colorR?.color || "gray.500" }}
                      >
                        {data}
                      </div>
                      <div
                        className="aspect-w-1 aspect-h-1 rounded-sm bg-[currentColor] transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: generateColor(
                            colorR?.from,
                            colorR?.to,
                            data,
                            colorR?.color
                          ),
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="justify-self-start">
                <p className="text-8xl text-gray-400">{item.total}</p>
              </div>
            </React.Fragment>
          ))}
          <div></div>
          <div className="mt-2 w-full flex justify-between px-6">
            {xaxis.labels?.map((item, index) => (
              <div key={item} className="w-full text-center">
                <p className="text-8xl mb-1">{item}</p>
                <p className="text-8xl text-gray-400">
                  {xaxis?.totals?.[index]}
                </p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
