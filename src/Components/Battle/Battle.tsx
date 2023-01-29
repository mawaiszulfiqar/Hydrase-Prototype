import "./battle.css";
import AnswerCard from "../AnswerCard/AnswerCard";

const Battle = () => {
  return (
    <div className="bg-[#68938B] min-h-screen overflow-x-hidden">
      <div className="flex justify-center max-w-7xl mx-auto px-12 items-center pt-12">
        <div className="relative w-full h-5 shadow-xl border border-white rounded-xl bg-gray-300">
          <div className="absolute top-0 left-0 w-[89%] h-full transition-all duration-700 ease-in-out bg-green-600 rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
        <div className="flex flex-col justify-start items-center w-full p-3">
          <img
            className="min-w-[360px] max-w-[360px] h-auto floating"
            src="https://i.imgur.com/c0S6nu6.png"
            alt="book"
          />
        </div>

        <div className="flex flex-col gap-8 items-center justify-center w-full p-3">
          <AnswerCard
            isCorrect={false}
            labelString="WRONG"
            pronounciationString="/ ˈɔ-səm /"
            wordString="Awesome"
          />

          <AnswerCard
            isCorrect={true}
            labelString="CORRECT"
            pronounciationString="/ ə-ˈmeɪ-zɪŋ /"
            wordString="Amazing"
          />

          <AnswerCard
            isCorrect={false}
            labelString="WRONG"
            pronounciationString="/ hə-ˈloʊ /"
            wordString="Hello"
          />

          <AnswerCard
            isCorrect={false}
            labelString="WRONG"
            pronounciationString="/ ˈhɔrs /"
            wordString="Horse"
          />
        </div>
      </div>
    </div>
  );
};

export default Battle;
