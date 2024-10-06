import React from 'react';

const Card = ({ data }) => {
  // 텍스트 길이에 따라 크기 조절
  const isLongCourseName = data.course_name.length > 30;
  const isLongReview = data.summaryReview.length > 100;

  return (
    <div className="md: width[60%] md:text-xs m-2 group px-10 py-5 bg-gradient-to-tr from-[#fff9f0] to-[#fdfcfc] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#f5f5ff] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
      
      {/* 이미지 크기 줄이기 */}
      <img
        src="/Pythonimg.png"
        alt="Card"
        className="md:text-xs w-32 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
      />

      {/* 텍스트 크기 조절 */}
      <p className={`font-['gf'] cardtxt font-semibold text-gray-500 tracking-wider group-hover:text-gray-900 ${isLongCourseName ? 'text-xl' : 'text-2xl'}`}>
        {data.course_name}
      </p>
      <p className={`font-['gf'] blueberry font-semibold text-gray-600 ${isLongReview ? 'text-sm' : 'text-base'} w-60%`}>
        AI리뷰요약 : {data.summaryReview}
      </p>
      <div className="font-['gf'] ordernow flex flex-row justify-between items-center w-full">
        <p className="font-['gf'] ordernow-text font-semibold group-hover:text-gray-800 text-lg">
          만족⭐{data.starrating / 10}점 /&nbsp;추천👍{(data.score * 10).toFixed(1)}점
        </p>
        <a href={data.urls} className="no-underline">
  <button
    className="font-['gf'] overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer relative z-10 group"
  >
    강좌 상세보기
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
    ></span>
    <span
      className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3.4 left-6 z-10"
    >
      강좌 상세보기
    </span>
  </button>
</a>

      </div>
    </div>
  );
};

export default Card;
