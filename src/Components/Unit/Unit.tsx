import React from "react";
import { ReactComponent as UnitIcon } from "../../assets/Maps/de-arena.svg";

interface IUnitProps {
  UnitName: string;
  UnitDescription: string;
}

const Unit = ({ UnitName, UnitDescription }: IUnitProps) => {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="w-full md:w-[576px] overflow-hidden">
        <h2 className="text-yellow-400 font-bold text-center">{UnitName}</h2>
        <p className="text-yellow-400 font-bold text-center">
          {UnitDescription}
        </p>
        <div className="w-full md:w-[576px]">
          <UnitIcon className="w-full h-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Unit;
