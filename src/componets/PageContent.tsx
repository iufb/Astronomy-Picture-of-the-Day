import { FC } from "react";
import { IApon } from "../helpers/types/apon.types";
import { Button } from "../ui";
type props = {
  data: IApon;
};
export const PageContent: FC<props> = ({ data }): JSX.Element => {
  return (
    <div>
      <div className="h-[50px] border-baseColor border-b-2 flex items-center justify-center">
        <h2 className="text-3xl  text-center ">
          {data.title}
        </h2>
      </div>
      <div className="w-[99.9%] h-[404px] m-auto group relative">
        <div className="absolute w-full h-full hidden group-hover:flex flex-col transition-opacity ease-in-out items-center justify-between py-4 bg-gray  bg-opacity-50 backdrop-blur z-10">
          <p className="text-3xl ">{data.date}</p>
          <a className="group-hover:opacity-1" href={data.hdurl} target='_blank' download>
            <Button >Download</Button>
          </a>
        </div>

        <img src={data.url} className="w-full h-full object-cover z-0" />
      </div>

      <div className="w-full h-full overflow-hidden px-4 pt-2">
        <p className=" text-lg">{data.explanation}</p>
      </div>
    </div>
  );
};
