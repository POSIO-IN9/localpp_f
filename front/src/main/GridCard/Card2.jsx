import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Heroicons 사용

const Card = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  flex flex-col p-4 sm:p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto" style={{ width: '500px', height: 'auto' }}>
      
      {/* 정보 구역 */}
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <p className="font-['DungGeunMo'] text-lg sm:text-xl text-gray-700 mb-2">{data.eduInstitute}</p>
        <p className="font-['DungGeunMo'] text-xs sm:text-sm text-gray-700 mb-2">{data.address2}</p>
        <div className='mt-2'>
          <p className="font-['DungGeunMo'] text-sm sm:text-base text-gray-700 mb-2">훈련시간: {data.trainTime}</p>
          <p className="font-['DungGeunMo'] text-sm sm:text-base text-gray-700 mb-2">훈련유형: {data.trainType}</p>
        </div>
        <div className="mt-4 space-y-4"> {/* 버튼 사이에 마진 추가 */}
          <button className="cursor-pointer transition-all bg-blue-500 text-gray-200 px-4 py-2 rounded-lg border-blue-600 border-b-[2px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[1px] active:brightness-90 active:translate-y-[1px] flex items-center w-full">
            <PhoneIcon className="text-gray-200 h-5 w-5 text-gray-600 mr-2" />
            <span className="font-['DungGeunMo'] text-md text-gray-200">{data.phone}</span>
          </button>
          <button className="cursor-pointer transition-all bg-blue-500 text-gray-200 px-4 py-2 rounded-lg border-blue-600 border-b-[2px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] active:border-b-[1px] active:brightness-90 active:translate-y-[1px] flex items-center w-full">
            <EnvelopeIcon className="text-gray-200 h-5 w-5 text-gray-600 mr-2" />
            <span className="font-['DungGeunMo'] text-md text-gray-200">{data.email}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
