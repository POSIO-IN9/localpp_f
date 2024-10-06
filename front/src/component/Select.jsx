import React, { useState } from 'react';
import aiimg from '../img/ai.png';
import javajimg from '../img/java.png';
import imbaimg from '../img/emba.png';
import mysqlimg from '../img/mysql.png';
import scimg from '../img/lock.png';
import uximg from '../img/ux.png';
import springimg from '../img/spring.png';
import pythonimg from '../img/python.png';

const circles = [
  { img: aiimg, translateX: '140px', translateY: '0' , part:"0703", title:"인공지능모델링" },
  { img: imbaimg, translateX: '99px', translateY: '99px', part:"0203", title:"임베디드SW엔지니어링" },
  { img: javajimg, translateX: '0', translateY: '140px', part:"0202", title:"응용SW엔지니어링"},
  { img: mysqlimg, translateX: '-99px', translateY: '99px', part:"0204", title:"DB엔지니어링"},
  { img: scimg, translateX: '-140px', translateY: '0', part:"0601", title:"정보보호관리"},
  { img: uximg, translateX: '-99px', translateY: '-99px', part:"0207", title:"UI/UX엔지니어링"},
  { img: springimg, translateX: '0', translateY: '-140px', part:"0202", title:"응용SW엔지니어링"},
  { img: pythonimg, translateX: '99px', translateY: '-99px', part:"0105", title:"빅데이터분석"},
];

const Circle = ({ img, translateX, translateY, isSelected, onClick }) => (
  <div
    className={`w-24 h-24 rounded-full absolute transition-transform duration-500 transform ${
      isSelected ? 'translate-x-0 translate-y-0' : 'group-hover:translate-x-[var(--translate-x)] group-hover:translate-y-[var(--translate-y)]'
    } ${isSelected ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'} shadow-inner`}
    style={{ '--translate-x': translateX, '--translate-y': translateY }}
    onClick={onClick}
  >
    <button>
      <img src={img} alt='#' />
    </button>
  </div>
);

export default function Select({ onSelect }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    onSelect(circles[index].part, circles[index].title); // 선택된 part와 title을 상위 컴포넌트에 전달
  };

  return (
    <div className="relative group flex justify-center items-center ">
      <div className=" w-44 h-44 rounded-full flex justify-center items-center text-white text-xl font-bold relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-28 h-28 rounded-full border-4 border-blue-500 absolute group-hover:scale-0 duration-500 transition-transform shadow-lg" />
          <div className="absolute inset-0 flex justify-center items-center ">
            {circles.map((circle, index) => (
              <Circle
                key={index}
                img={circle.img}
                translateX={circle.translateX}
                translateY={circle.translateY}
                isSelected={selectedIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          {selectedIndex === null && (
            <div className="font-['gf'] absolute inset-0 flex justify-center items-center text-white text-lg font-bold">
              선택하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
