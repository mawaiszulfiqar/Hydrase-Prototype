import { ReactComponent as UnitIcon } from "../../assets/Maps/de-arena.svg";
import { BsBook } from "react-icons/bs";
import LevelButton from "../LevelButton/LevelButton";

import { CACTUS_VALLEY_PATH } from "../../utils/MapPaths/CactusValley";

interface IUnitProps {
  UnitName: string;
  UnitDescription: string;
}

const Unit = ({ UnitName, UnitDescription }: IUnitProps) => {
  return (
    <div className="flex flex-wrap overflow-hidden mt-10 first:mt-0">
      <div className="w-full md:w-[576px] overflow-hidden">
        <div className="bg-[#FAD850] font-bold p-4 rounded-lg mb-[-28px] border-2 border-[#2F2F2F]">
          <div className="flex justify-between items-center">
            <h2 className="text-black font-bold text-xl text-left tracking-wider">
              {UnitName}
            </h2>
            <button className="flex items-center justify-center text-xs font-bold rounded-full px-4 py-1 space-x-1 bg-white text-black border-2 border-black hover:scale-105 transition-all duration-100">
              <span className="text-sm mr-1">Textbook</span>
              <BsBook className="w-5 h-5" />
            </button>
          </div>
          <p className="text-black font-bold text-left mb-6">
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
