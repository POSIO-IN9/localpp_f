import React, { useEffect, useState } from "react";
import OtherHeader from "../nav/Navbar";
import MainFooter from "../footer/Footer";
import { useLocation } from "react-router-dom";
import useInterval from "./UseInterval";
import ReactMarkdown from "react-markdown";

function AccountChatBot1() {
  const location = useLocation();
  const [response, setResponse] = useState("");
  const completedTitle = "A.i 직업능력계좌 분석 리포트";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count >= completedTitle.length) {
      return;
    }

    setLandingTitle((prev) => {
      const nextChar = completedTitle[count];
      const result = prev + nextChar;
      setCount(count + 1);
      return result;
    });
  }, 120);

  useEffect(() => {
    const responseData = location.state?.response;
    if (responseData) {
      setResponse(responseData);
    }
  }, [location.state]);

  const parseResponseToMarkdown = (response) => {
    const responseStr =
      typeof response === "string" ? response : response.response;
    const sections = responseStr.split("\n");
    let markdownData = "";

    sections.forEach((section) => {
      markdownData += section + "\n";
    });

    return markdownData;
  };

  const markdownData = parseResponseToMarkdown(response);

  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="w-screen flex-grow">
      <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen flex flex-col">
        <OtherHeader />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold leading-10 text-white mb-16">
              {landingTitle}
            </h2>
            <div>
              <div>
                <div>
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl font-bold leading-10 text-indigo-500 mb-4">
                      당신을 위한 추천 
                    </h3>
                    <p className="text-lg font-medium leading-8 text-gray-300 mb-8">
                      ai직무능력나침반이 당신의 꿈을 응원합니다.
                    </p>
                  </div>
                  <div className="mt-10 lg:col-span-7 lg:mt-0">
                    <div className="space-y-10 text-base leading-7 text-white">
                      <ReactMarkdown>{markdownData}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex item-center justify-center">
          <button
            className="mb-8 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={exportToPDF}
          >
            PDF로 내보내기
          </button>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default AccountChatBot1;
