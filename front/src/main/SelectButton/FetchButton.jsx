import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FetchButton = ({ part, weights, onError }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = async () => {
    setIsClicked(true);
    const data = {
      weights: weights,
      codePart: part
    };

    try {
      const response = await axios.post('http://localhost:8080/api/topsis', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = response.data;

      localStorage.setItem('ncscodeData', JSON.stringify(responseData));

      console.log(`Data for part ${part} with weights ${weights}:`, responseData);

      navigate('/content');
    } catch (error) {
     
      onError('항목을 체크해주세요.'); 
    } finally {
      setIsClicked(false);
    }
  };

  return (
    <button 
      className={`font-[DungGeunMo] border-2 border-gray-600 w-[120px] bg-black h-[40px] my-7 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#1e3a8a] before:to-[#3b82f6] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] ${isClicked ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={fetchData}
      disabled={isClicked} 
    >
      {isClicked ? '로딩...' : '검색하기'}
    </button>
  );
};

export default FetchButton;
