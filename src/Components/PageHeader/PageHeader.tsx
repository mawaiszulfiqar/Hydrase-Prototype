import { MdOpacity } from "react-icons/md";

const PageHeader = () => {
  return (
    <div className="py-6 md:py-8 bg-white border-b-2">
      <div className="w-full xs:max-w-xl md:max-w-[720px] lg:max-w-[960px] xl:max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl mt-0 mb-2">My Courses</h2>
            <div>
              <span className="flex items-center text-[#868e96] font-semibold whitespace-nowrap align-middle select-none text-sm leading-normal border border-[#868e96] text-center rounded-full py-1 px-4 ">
                <MdOpacity className="text-2xl align-middle mr-2" />
                2000 Points
              </span>
            </div>
          </div>
          <div className="mt-3 lg:mt-0 lg:ml-4">
            <span className="flex items-center justify-center uppercase select-none text-sm font-semibold cursor-pointer disabled:cursor-default border border-[#edf0f2] bg-[#edf0f2] shadow-md py-2 px-4 rounded-md text-[#212529]">
              My Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
