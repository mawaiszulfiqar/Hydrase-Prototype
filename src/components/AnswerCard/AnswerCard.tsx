import React from "react";
import { TbMoodCrazyHappy } from "react-icons/tb";

interface IAnswerCard {
  isCorrect: boolean;
  labelString: string;
  pronounciationString: string;
  wordString: string;
  cardImg?: string;
}

const AnswerCard = ({
  isCorrect,
  labelString,
  pronounciationString,
  wordString,
}: IAnswerCard) => {
  return (
    <div className="flex gap-20 items-center cursor-pointer w-full xs:w-[30rem]">
      <div className="w-full xs:w-[30rem] border-2 border-b-4 border-gray-300 bg-white rounded-3xl hover:bg-gray-100">
        <p
          className={`${
            isCorrect ? "bg-lime-500" : "bg-red-500"
          } w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-[1.3rem] rounded-br-xl`}
        >
          {labelString}
        </p>
        <div className="grid grid-cols-6 p-4">
          <div>
            <TbMoodCrazyHappy className="w-12 h-12" />
          </div>
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-sky-500 font-bold text-xs">
              {pronounciationString}
            </p>
            <p className="text-gray-600 font-bold">{wordString}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
