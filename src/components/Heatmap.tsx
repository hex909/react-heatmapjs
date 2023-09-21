import LegendButton from "./LegendButton";
import { generateColor } from "../plugin/generateColor";
import React from "react";
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
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-base font-bold">{title}</h2>
        <div className="flex gap-3">
          {legends
            ? legends?.map((item) => (
                <LegendButton
                  key={item.name}
                  variant={item.color}
                  label={item.name}
                />
              ))
            : colorRange?.map((item) => (
                <LegendButton
                  key={item.name}
                  variant={item.color}
                  label={item.name}
                />
              ))}
        </div>
      </div>
      <div className="grid place-items-center w-full mt-9 px-12">
        <div
          className="grid items-center justify-items-end gap-x-2 grid-cols-[minmax(auto,_5.125rem)_minmax(auto,_46.875rem)_minmax(auto,_5.125rem)]"
          style={{ ...chartStyle }}
        >
          {series?.map((item) => {
            return (
              <React.Fragment key={JSON.stringify(item)}>
                <div className="flex">
                  <p className="text-xs text-end">{item.name}</p>
                </div>
                <div className="flex w-full">
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
                        className="flex flex-1 p-1 border relative cursor-pointer group"
                        key={data + item.name}
                      >
                        <div
                          className="absolute bottom-0 right-0 -translate-x-3 -translate-y-3 pointer-events-none z-10 transition-opacity rounded-full bg-white p-1 grid min-w-[30px] place-items-center border-2 text-sm text-gray-500 shadow-lg aspect-square md:opacity-0 group-hover:opacity-100 "
                          style={{ borderColor: colorR.color || "#afafaf" }}
                        >
                          {data}
                        </div>

                        <div
                          className="aspect-square rounded-sm w-full"
                          style={{
                            background: generateColor(
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
                <div className="flex justify-self-start">
                  <p className="text-xs ">{item.total}</p>
                </div>
              </React.Fragment>
            );
          })}
          <div></div>
          <div className="mt-2 w-full flex justify-between gap-1">
            {xaxis.labels?.map((item, index) => (
              <div className="w-full mt-1 text-center" key={item}>
                <p>{item}</p>
                <p>{xaxis?.totals?.[index]}</p>
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
