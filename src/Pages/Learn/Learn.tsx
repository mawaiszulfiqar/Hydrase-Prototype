import React, { useEffect } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { socket } from "../../App";
import Unit from "../../Components/Unit/Unit";

const TestPopUp = ({
  popupTitle,
  popupMessage,
  onClose,
}: {
  popupTitle: string;
  popupMessage: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-green-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {popupTitle}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{popupMessage}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Learn = () => {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [popupTitle, setPopupTitle] = React.useState("");
  const [popupMessage, setPopupMessage] = React.useState("");

  useEffect(() => {
    socket.emit("connection");
  }, []);

  useEffect(() => {
    socket.on("show-success", (data: { title: string; message: string }) => {
      setPopupTitle(data.title);
      setPopupMessage(data.message);
      setShowPopUp(true);
    });
  }, []);

  return (
    <>
      {showPopUp && (
        <TestPopUp
          popupTitle={popupTitle}
          popupMessage={popupMessage}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div className="py-6 md:py-8">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] relative px-6 mx-auto z-0">
          <div className="flex flex-col flex-wrap -mx-3 lg:flex-row">
            <div className="relative w-full lg:flex-grow-0 lg:flex-shrink-0 lg:basis-2/3 lg:max-w-[66.6666666667%] px-3">
              <div className="flex justify-center items-center mx-5 flex-col">
                {/* Unit Component */}
                <Unit
                  UnitName="Unit 1"
                  UnitDescription="Basics of the German Language!"
                />
                <Unit
                  UnitName="Unit 2"
                  UnitDescription="Animal Names in German!"
                />
                <Unit
                  UnitName="Unit 3"
                  UnitDescription="Friends, Food, and Fun!"
                />
                <Unit
                  UnitName="Unit 4"
                  UnitDescription="Love, Life, and Laughter!"
                />
              </div>
            </div>
            <div className="hidden lg:block relative w-full lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/3 lg:max-w-[33.3333333333%] px-3">
              <div className="relative text-[#868e96] flex items-center justify-start z-0 mb-4 before:left-0 before:bg-[rgba(0,0,0,.1)] before:content-[''] before:h-[1px] before:w-full before:top-2/4 before:absolute before:z-[-1]">
                <span className="inline-flex max-w-[90%] uppercase text-base text-[#303840] font-semibold rounded bg-[#f5f7fa] pr-2">
                  Challenges
                </span>
              </div>
              <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#FFE85C] border-gray-800 border-2 shadow-md text-white">
                <div className="flex justify-between items-center">
                  <span className="uppercase text-black text-sm font-bold">
                    Weekly Challenge
                  </span>
                  <div className="flex justify-center items-center">
                    <button
                      className="flex items-center justify-center text-xs font-bold rounded-full px-4 py-1 space-x-1 bg-white text-black border-2 border-black hover:scale-105 transition-all duration-100"
                      onClick={() => navigate("/login")}
                    >
                      <span>Leaderboard</span>
                      <MdOutlineLeaderboard className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3 text-white">
                  <svg
                    width="58"
                    height="56"
                    viewBox="0 0 52 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.6458 38.4379C33.9918 37.1198 33.2655 34.0922 31.0668 30.5948C31.8658 30.4707 32.6129 30.281 33.178 29.9905C35.2112 28.9466 36.584 27.044 37.6232 25.0759C38.7403 22.9647 39.49 20.644 40.9477 18.7215C41.1939 18.3966 41.44 18.1052 41.6853 17.831C44.8304 18.206 47.3412 18.8784 47.3412 18.8784L48.3006 16.4534C47.0896 16.0212 45.848 15.6791 44.586 15.4302C45.3591 14.9931 45.8635 14.8569 45.8635 14.8569L44.9543 12.4121C43.4966 13.025 42.3136 13.9293 41.323 15.0121C37.6206 14.806 33.8921 15.5397 30.9506 17.8086C28.7389 19.5155 27.2447 21.8819 25.839 24.2491C24.5935 23.0333 23.2671 21.9023 21.8688 20.8638C22.134 20.4302 22.4182 20.0405 22.7242 19.7397C24.5728 17.9293 27.0116 16.7716 28.6115 14.7C31.9742 10.35 29.5146 3.53103 26.7481 0C26.2524 0.475 25.4325 1.16724 24.8155 1.71379C27.7561 4.70948 29.8127 9.95431 27.5082 13.8733C26.2203 16.0638 23.8404 17.4379 22.1764 19.3198C21.8887 19.6466 21.6313 20.0603 21.3982 20.5172C17.0466 17.4129 13.053 16.1638 11.4704 17.7138C11.3133 17.8737 11.1838 18.0584 11.0874 18.2603L11.0813 18.2543L11.0388 18.3776C10.9799 18.5112 10.9261 18.65 10.8897 18.8017L0 50L31.774 38.95L31.7653 38.9414C32.1068 38.8319 32.4075 38.6707 32.6458 38.4379ZM6.32065 45.9759L3.66863 44.7465L5.45831 39.6172L13.6666 43.4207L6.32065 45.9759ZM21.0116 40.8664L7.24972 34.4879L9.0394 29.3595L19.3233 34.494C13.1847 30.5198 10.8291 24.2293 10.8291 24.2293L11.441 22.4767C12.5286 25.2138 14.9215 28.6224 18.2097 31.8397C21.5256 35.0862 25.0399 37.4379 27.8488 38.4888L21.0116 40.8664ZM26.2975 24.7112C27.7344 22.6621 29.2156 20.594 31.2748 19.1224C33.2352 17.7207 36.4176 17.4647 39.4345 17.6328C38.4153 19.4034 37.6622 21.3681 36.9861 23.2552C36.1689 25.5397 35.0734 27.9086 32.9847 29.3095C32.4214 29.6871 31.6318 29.9629 30.7886 30.1672C29.6298 28.4009 28.1097 26.5336 26.2975 24.7112Z"
                      fill="black"
                    />
                    <path
                      d="M18.2287 16.3793C19.0971 16.3793 16.4937 13.7931 16.9287 11.525C18.5962 11.3974 22.4078 12.1448 20.1892 9.11379C22.699 9.55345 23.9991 7.68966 21.6296 5.92328C22.4182 5.97845 23.6437 4.49914 22.764 4.31207C19.9456 3.7181 18.8423 5.23448 20.6312 7.42155C18.7505 7.07328 17.2173 7.9431 18.63 9.89655C13.1994 9.22328 16.2891 16.3793 18.2287 16.3793ZM36.8726 14.081C37.6864 13.7155 36.3058 11.3009 35.8569 10.6836C39.2915 10.3181 39.1615 9.3 37.0078 7.11897C42.8631 7.31466 37.1889 4.00431 37.9846 2.69397C38.6736 1.55776 40.7874 2.74914 40.5915 2.11638C39.9311 0 33.6668 1.43103 37.631 5.38276C34.1712 5.45 33.8393 6.575 36.4176 8.9069C31.9265 8.95603 35.5908 14.6552 36.8726 14.081ZM51.7378 22.6078C50.3667 22.9897 50.1553 22.8466 50.3381 24.2043C47.1713 22.7543 43.8207 20.7379 45.854 26.0802C42.2573 23.95 42.4367 25.8155 41.7641 28.8853C40.8888 28.2069 39.6451 26.419 39.6451 26.419L38.3278 27.5319C38.3278 27.5319 40.7414 30.9181 41.9331 30.7259C42.9809 30.5578 43.5512 28.5879 43.6093 26.8517C46.946 28.2526 48.5432 28.4397 47.017 24.3431C49.6846 25.8336 52.9555 27.1483 51.7378 22.6078ZM3.50916 7.27328L5.96011 9.71207L3.50916 12.15L1.05734 9.71207L3.50916 7.27328ZM24.1005 26.5181L21.6478 28.956L19.1959 26.5164L21.6486 24.0776L24.1005 26.5181ZM13.1908 3.44828L15.6417 5.88621L13.1899 8.32586L10.7389 5.88621L13.1908 3.44828ZM39.8765 37.4862L37.4238 35.0474L39.8748 32.6078L42.3275 35.0466L39.8765 37.4862ZM34.4113 45.85L31.9603 43.4121L34.4113 40.9733L36.8631 43.4121L34.4113 45.85ZM45.1649 47.7759L42.7123 45.3371L45.1623 42.8974L47.615 45.3362L45.1649 47.7759ZM47.6159 36.669L45.1649 34.2302L47.6159 31.7922L50.0668 34.2302L47.6159 36.669ZM43.5243 6.03448L45.9753 8.47241L43.5235 10.9112L41.0725 8.47241L43.5243 6.03448Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-base text-black font-medium">
                    Congratulations, you learnt 200 new German words!
                  </span>
                </div>
              </div>
              <div className="break-inside relative overflow-hidden flex flex-col shadow-md justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white">
                <div className="flex items-center justify-between font-medium">
                  <span className="uppercase font-bold text-sm text-[#FFE85C]">
                    Hydrase Premium
                  </span>
                  <div className="flex justify-between items-center">
                    <button
                      className="flex items-center justify-center text-xs font-bold rounded-full px-4 py-1 space-x-1 border-2 bg-transparent border-white bg-white text-white hover:scale-105 transition-all duration-100"
                      onClick={() => {
                        socket.emit("purchase-premium");
                      }}
                    >
                      <span>Try Now!</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h13M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-[#FFE85C] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
                      <line x1="3" y1="22" x2="21" y2="22" />
                    </svg>
                  </div>
                  <span className="text-base font-medium">
                    Reach your language goals!
                  </span>
                </div>
                <div className="text-left font-bold">
                  Upgrade to premium and unlock access to advanced language
                  courses, personalized learning plans.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
