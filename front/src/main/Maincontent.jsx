import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './GridCard/Card'; 
import Card2 from './GridCard/Card2';
import Footer from "../footer/Footer";
import ChatButton from "../Mainchat/Chatbutton";
import ChatWindow from "../Mainchat/Chatwindow";
import logo from "../img/star1.png"
import { Link } from 'react-router-dom';

const CardCarousel = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // 로컬스토리지에서 데이터 가져오기
    const storedData = localStorage.getItem('ncscodeData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleChatButtonClick = () => {
    setChatOpen(!chatOpen);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        const { deltaY } = e;
        const direction = deltaY > 0 ? 'down' : 'up';

        setScrollDirection(direction);

        if (direction === 'down') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        } else if (direction === 'up') {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
        }

        // 스크롤 후 일정 시간 후 스크롤 가능하도록 설정
        setTimeout(() => {
          isScrolling.current = false;
        }, 700); // 700ms 후 스크롤 가능 (부드러운 전환을 위해)
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [data.length]);

  // 데이터가 없거나 currentIndex가 유효하지 않은 경우를 처리합니다.
  const currentData = data.length > 0 ? data[currentIndex] : null;

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
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

      {/* 제목 */}
      <div className="mt-4 ml-6">
      <div className="flex lg:flex-1 h">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-14 w-auto" src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      {/* 제목 아래 div */}
      <div className="mb-4 font-['gf'] md:mt-24  p-2 text-center text-2xl text-white font-semibold">
      <p><span className='text-yellow-600'>다중의사결정모델</span> 기반 훈련검색</p>
      </div>

      {/* 카드 및 내용 컨테이너 */}
      <div className="md:mx-10 lg:mx-60  flex  md:justify-center flex-col md:flex-row justify-center items-center p-4 flex-1 mx-4  ">
        
        {/* 카드 컨테이너 */}
        <div
          ref={containerRef}
          className="mr-6 relative w-full md:w-[60%] lg:w-[60%] h-[400px] md:h-[400px] bg-white border rounded-lg overflow-hidden flex-shrink-0"
        >
          <div className="flex justify-between mt-4 -mb-6 ml-4 mr-4">
            <p className="font-['DungGeunMo'] md:mb-2">여기를 스크롤 하세요</p>
            <p className="font-['DungGeunMo']">{currentIndex + 1}/{data.length}</p>
          </div>
  
          <div className="relative w-full h-full">
            <AnimatePresence>
              {currentData && (
                <motion.div
                  key={currentData.course_id}
                  initial={{ opacity: 0, y: scrollDirection === 'down' ? '100%' : '-100%', scale: 0.8 }}
                  animate={{ opacity: 1, y: '0%', scale: 1 }}
                  exit={{ opacity: 0, y: scrollDirection === 'down' ? '-100%' : '100%', scale: 0.8 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-max">
                    <Card data={currentData} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 내용 컨테이너 */}
        <div className=" w-60 h-100 relative w-full md:w-[60%] h-[200px] md:h-[300px] sm:w-[60%] sm:mt-6 flex items-center justify-center  mt-4 md:mt-4">
          <AnimatePresence>
            {currentData && (
              <motion.div
                key={currentData.course_id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3 }} // 카드 애니메이션 후 내용 애니메이션 시작
                className="absolute w-3/4 md:w-3/4 h-3/4 md:h-3/4 p-4 rounded-lg shadow-lg flex items-center justify-center"
              >
                <Card2 data={currentData} />
              </motion.div>
            )}
          </AnimatePresence>
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

  
      {/* 푸터 */}
      <div className='mt-20'>
      <Footer />
      </div>
      

      <ChatButton handleClick={handleChatButtonClick} />
      {chatOpen && (
        <ChatWindow />
      )}
    </div>
  );
};

export default CardCarousel;
