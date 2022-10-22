import React from "react";
import { ReactComponent as UnitIcon } from "../../assets/Maps/de-arena.svg";
// import MapPointer from "../../assets/Maps/map_pointer.png";

const MapPointer = "https://i.imgur.com/8YgYUPR.png";

interface IUnitProps {
  UnitName: string;
  UnitDescription: string;
}

interface ILevelPointer {
  id: number;
  top: string;
  left: string;
}

interface ILevelProps {
  levelData: ILevelPointer[];
}

const DE_ARENA_PATHS = [
  {
    id: 1,
    top: "3.8%",
    left: "3%",
  },
  {
    id: 2,
    top: "17%",
    left: "6%",
  },
  {
    id: 3,
    top: "20%",
    left: "-25%",
  },
  {
    id: 4,
    top: "33%",
    left: "-8%",
  },
  {
    id: 5,
    top: "40%",
    left: "12%",
  },
  {
    id: 6,
    top: "55%",
    left: "-8%",
  },
  {
    id: 7,
    top: "62%",
    left: "-25%",
  },
  {
    id: 8,
    top: "68%",
    left: "-6%",
  },
  {
    id: 9,
    top: "74%",
    left: "20%",
  },
  {
    id: 10,
    top: "83%",
    left: "12%",
  },
];

const Level = ({ levelData }: ILevelProps) => {
  return (
    <>
      {levelData.map((level) => (
        <div
          key={level.id}
          className={`w-full flex select-none justify-center absolute top-[${level.top}] left-[${level.left}]`}
        >
          <div className="absolute text-white font-extrabold text-2xl top-[-10px] drop-shadow-xl group cursor-pointer group">
            {level.id}
            <div className="absolute top-5 left-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              Level {level.id}
            </div>
          </div>
          <img
            src={MapPointer}
            alt="map pointer"
            className="w-full select-none pointer-events-none h-auto max-h-[24px] sm:max-h-[32px] object-contain"
          />
        </div>
      ))}
    </>
  );
};

const Unit = ({ UnitName, UnitDescription }: IUnitProps) => {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className="w-full md:w-[576px] overflow-hidden">
        <h2 className="text-yellow-400 font-bold text-center">{UnitName}</h2>
        <p className="text-yellow-400 font-bold text-center">
          {UnitDescription}
        </p>
        <div className="w-full md:w-[576px] min-w-[300px] relative">
          <UnitIcon className="w-full h-full rounded-3xl" />
          <Level levelData={DE_ARENA_PATHS} />
        </div>
      </div>
    </div>
  );
};

export default Unit;
