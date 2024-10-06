import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Nav from '../nav/Navbar';
import WeightsButton from "./SelectButton/WeightsButton";
import Select from '../component/Select';
import Cmdicon from '../component/cmdicon/Cmdicon';

const Category = () => {
  const [weights, setWeights] = useState([null, null, null]); // [감성지수, 만족도, 취업률] 순서
  const [clickCount, setClickCount] = useState(0); // 클릭 순서를 추적
  const [clicked, setClicked] = useState([false, false, false]); // 각 버튼의 클릭 여부 상태
  const weightValues = [0.5, 0.4, 0.3]; // 클릭 순서에 따른 weight 값
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedLable, setSelectedLable] = useState([null, null, null]);

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (index, label) => {
    const newWeights = [...weights];
    const newClicked = [...clicked];
    const newlables = [...selectedLable];

    if (clickCount < 3 && !clicked[index]) {
      newWeights[index] = weightValues[clickCount];
      newClicked[index] = true; // 버튼 클릭 상태 업데이트
      newlables[clickCount] = label; // 클릭 순서에 따라 라벨 저장
      setSelectedLable(newlables);
      setClickCount(clickCount + 1);
      setWeights(newWeights);
      setClicked(newClicked);
    }
  };

  // weights 상태가 변경될 때마다 콘솔에 출력
  useEffect(() => {
  }, [weights, selectedLable]);

  // 다시 선택하기 버튼 클릭 시 호출되는 함수
  const handleReset = () => {
    setSelectedPart(null);
    setSelectedTitle(null);
    setWeights([null, null, null]); // 가중치를 초기화
    setClickCount(0); // 클릭 횟수를 초기화
    setClicked([false, false, false]); // 클릭 상태를 초기화
    setSelectedLable([null, null, null]); // 라벨 초기화
  };

  const handleSelect = (part, title) => {
    setSelectedPart(part);
    setSelectedTitle(title);
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div>
        <Nav />
      </div>
      <div className="mt-14 font-['gf'] text-gray-300 text-2xl relative grid place-items-center flex justify-center items-center">
        <p><span className='text-blue-500 font-bold'>빅데이터 기반</span> <span className='text-yellow-600 font-bold'>다목적의사결정</span> 모델</p>
        <p className='mt-2 text-xl font-bold text-gray-400'>직업 능력 훈련 검색</p>
      </div>
      <div className="mt-20 relative grid place-items-center justify-center items-center">
        <div className='flex'>
          <div className=" flex-col">
            <Select onSelect={handleSelect} />
            <div className="mt-24 font-['gf'] text-gray-700 font-bold md:scale-90 sm:scale-75 justify-center item-center text-center p-4">
              
              <div className="flex space-x-4 mb-4 flex justify-center items-center ">
                <WeightsButton
                  label="감성지수"
                  index={0}
                  handleButtonClick={() => handleButtonClick(0, "감성지수")}
                  clickOrder={clicked[0] ? clickCount - 1 : null}
                />
                <WeightsButton
                  label="만족도"
                  index={1}
                  handleButtonClick={() => handleButtonClick(1, "만족도")}
                  clickOrder={clicked[1] ? clickCount - 1 : null}
                />
                <WeightsButton
                  label="취업률"
                  index={2}
                  handleButtonClick={() => handleButtonClick(2, "취업률")}
                  clickOrder={clicked[2] ? clickCount - 1 : null}
                />
                
              </div>
              <p className='mb-4 text-xs'>중요도 순으로 선택하세요</p>
              <div className='flex justify-center'>
                <button
                  onClick={handleReset} className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
                >
                  <svg
                    viewBox="0 0 1.625 1.625"
                    className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                    height="15"
                    width="15"
                  >
                    <path
                      d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                    ></path>
                    <path
                      d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                    ></path>
                    <path
                      d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="origin-right duration-500 group-hover:rotate-90"
                  >
                    <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                    <line
                      strokeWidth="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path
                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                      ></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                    <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                </button>

              </div>
               
            </div>
          </div>
          <div className='flex ml-24 flex item-center justify-center'>
            <Cmdicon part={selectedPart} weights={weights} title={selectedTitle} label={selectedLable}/>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Category;
