import { useNavigate } from "react-router";
import MapPointer from "../../assets/Maps/map_pointer.png";

interface ILevelPointer {
  id: number;
  top: string;
  left: string;
  href: string;
}

interface ILevelProps {
  levelData: ILevelPointer[];
}

const LevelButton = ({ levelData }: ILevelProps) => {
  const navigate = useNavigate();
  return (
    <>
      {levelData.map((level) => (
        <div
          key={level.id}
          className="w-full flex select-none justify-center absolute"
          style={{ top: level.top, left: level.left }}
          onClick={() => navigate(`/learn/${level.href}`)}
        >
          <div className="absolute text-white font-extrabold text-2xl top-[-10px] drop-shadow-xl group cursor-pointer group">
            {level.id}
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

export default LevelButton;
