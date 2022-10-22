import React from "react";
import Unit from "./Components/Unit/Unit";
import { IoLogoOctocat } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { TbFlame } from "react-icons/tb";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";

function App() {
  return (
    <>
      <div className="flex">
        <div className="fixed md:top-0 bottom-0 left-0 h-auto w-full md:h-screen md:w-16 m-0 flex md:flex-col justify-center items-center bg-[#202225] text-[#5865f2] shadow-lg z-50">
          <div>
            <IoLogoOctocat className="w-8 h-8 my-6 mx-5 cursor-pointer" />
          </div>
          <div>
            <BsFillCalendar2WeekFill className="w-5 h-5 my-6 mx-5 cursor-pointer" />
          </div>
          <div>
            <TbFlame className="w-6 h-6 my-6 mx-5 cursor-pointer" />
          </div>
          <div>
            <SlGraph className="w-6 h-6 my-6 mx-5 cursor-pointer" />
          </div>
          <div className="md:mt-auto">
            <IoMdSettings className="w-6 h-6 my-6 mx-5 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* // Doashboard Content Container */}
      <div className="flex justify-center items-center m-5 flex-col">
        {/* Unit Component */}
        <Unit
          UnitName="Unit 1"
          UnitDescription="Basics of the German Language!"
        />
        <Unit UnitName="Unit 2" UnitDescription="Animal Names in German!" />
        <Unit UnitName="Unit 3" UnitDescription="Friends, Food, and Fun!" />
        <Unit UnitName="Unit 4" UnitDescription="Love, Life, and Laughter!" />
      </div>
    </>
  );
}

export default App;
