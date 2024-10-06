import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import useInterval from "./UseInterval";
import Navbar from "../nav/Navbar";
import OtherFooter from "../footer/Footer";
import axios from "axios";
import "tailwindcss/tailwind.css";

const select = {
  numbers: [
    {
      name: "자격",
      id: 1,
      href: "https://localhost:3000/account/chatbot/1",
      description: "당신에게 가장 적합한 자격증을 추천받고 싶다면",
      features: [
        "현재 보유 자격 분석",
        "커리어 개발 추천",
        "추천 직업",
        "직업 만족도",
        "…and more",
      ],
      mostPopular: false,
    },
    {
      name: "교육",
      id: 2,
      href: "https://localhost:3000/account/chatbot/2",
      description: "당신에게 가장 적합한 교육을 추천받고 싶다면",
      features: [
        "현재 상황",
        "업무 분야",
        "추천 교육",
        "포트폴리오 구축",
        "…and more",
      ],
      mostPopular: true,
    },
    {
      name: "커리어",
      id: 3,
      href: "https://localhost:3000/account/chatbot/3",
      description: "당신에게 가장 적합한 커리어 패스를 추천받고 싶다면",
      features: [
        "강점 분석",
        "커리어 개발 방향",
        "구체적인 교육 및 커리어 개발 계획",
        "…and more",
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ChatBotComponent() {
  const [response, setResponse] = useState("");
  const completedTitle = "A.I 커리어 카운셀러에 오신 것을 환영합니다";
  const loadingMessage = "...";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [loadingCount, setLoadingCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingHearts, setLoadingHearts] = useState("");
  const navigate = useNavigate();

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
  }, 150);

  useInterval(() => {
    if (loading) {
      if (loadingCount >= loadingMessage.length) {
        setLoadingCount(0);
        setLoadingHearts("");
      } else {
        setLoadingHearts((prev) => prev + loadingMessage[loadingCount]);
        setLoadingCount(loadingCount + 1);
      }
    } else {
      setLoadingHearts("");
      setLoadingCount(0);
    }
  }, 600);

  const handleInputClick = async (inputType) => {
    setLoading(true);
    try {
      const uniqueId = localStorage.getItem("code");
     
      await axios.post(
        `http://flask:5000/flask/process_apply/${uniqueId}`
      );

      const chatRes = await axios.post(
        `http://flask:5000/flask/process_chatbot/${uniqueId}/${inputType}`
      );
      setResponse(chatRes.data);
      setLoading(false);

      if (inputType != null) {
        navigate(`/account/chatbot/report`, { state: { response: response } });
        await axios.post(`http://localhost:8080/delete/${uniqueId}`);
     
      }
    } catch (err) {
      console.error("Error occurred:", err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow mx-auto max-w-7xl px-6 sm:mt-2 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-['gf'] text-2xl mb-6 font-semibold leading-7 text-indigo-400">
            직무 능력 은행 기반
          </h1>
          <p className="font-['gf'] text-4xl font-bold tracking-tight text-white">
            {landingTitle}
          </p>
        </div>

        <p className="font-['gf'] mt-8 text-xl font-semibold text-gray-300 text-center max-w-5xl">
          이 서비스는 직무 능력 계좌를 기반으로 한
          <span className="font-['gf'] text-yellow-500 text-2xl mx-1">교육 및 경력 상담 서비스</span>와{" "}
          <span className="font-['gf'] text-yellow-500 text-2xl">교육 추천</span> 등을 제공합니다.
        </p>

        {loading && (
          <div className="mt-10 text-white font-semibold text-lg flex items-center">
            <span className="font-bold text-xl text-indigo-400 mr-1">A.i ✨</span>
            분석 중<span className="ml-1">{loadingHearts}</span>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {select.numbers.map((number) => (
            <div
              key={number.id}
              className={classNames(
                number.mostPopular
                  ? "bg-white/5 "
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 hover:bg-white/10 transition hover:ring-2 hover:ring-indigo-500"
              )}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">{number.name}</h2>
                {number.mostPopular && (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold text-white">
                    Super 이끌림 추천 ✨
                  </p>
                )}
              </div>
              <p className="mt-4 text-gray-400">{number.description}</p>
              <div
                aria-describedby={number.id}
                onClick={() => handleInputClick(number.id)}
                className={classNames(
                  number.mostPopular
                    ? "bg-white/10 text-white hover:bg-indigo-400"
                    : "bg-white/10 text-white hover:bg-indigo-400",
                  "mt-6 block py-2 px-4 rounded-md text-center text-sm font-semibold cursor-pointer"
                )}
              >
                Ai 분석 시작
              </div>
              <ul className="mt-8 space-y-3 text-sm text-gray-300">
                <p className="text-lg font-semibold text-indigo-400">리포트 예시 정보</p>
                {number.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
      </div>

      <OtherFooter className="bg-gray-900" />
    </div>
  );
}

export default ChatBotComponent;
