import { ReactComponent as UnitIcon } from "../../assets/Maps/de-arena.svg";

import LevelButton from "../LevelButton/LevelButton";

import { CACTUS_VALLEY_PATH } from "../../utils/MapPaths/CactusValley";

interface IUnitProps {
  UnitName: string;
  UnitDescription: string;
}

const Unit = ({ UnitName, UnitDescription }: IUnitProps) => {
  return (
    <div className="flex flex-wrap overflow-hidden mt-8">
      <div className="w-full md:w-[576px] overflow-hidden">
        <div className="bg-[#767e84] font-bold p-4 rounded-lg mb-[-28px] border-2 border-[#2F2F2F]">
          <h2 className="text-white font-bold text-center">{UnitName}</h2>
          <p className="text-white font-bold text-center mb-6">
            {UnitDescription}
          </p>
        </div>
        <div className="w-full md:w-[576px] min-w-[300px] relative">
          <UnitIcon className="w-full h-full rounded-md border-l-2 border-b-2 border-r-2 border-[#2F2F2F] border-t-black border-t" />
          <LevelButton levelData={CACTUS_VALLEY_PATH} />
        </div>
      </div>
    </div>
  );
};

export default Unit;
