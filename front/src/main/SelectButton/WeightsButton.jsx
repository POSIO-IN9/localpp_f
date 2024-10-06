import React from 'react';

// `WeightsButton` 컴포넌트
const WeightsButton = ({ label, index, handleButtonClick, clickOrder }) => {
  const handleClick = () => {
    handleButtonClick(index);
  };

  const getButtonColor = () => {
    if (clickOrder === null) return 'bg-blue-500 hover:bg-blue-700';
    if (clickOrder === 2) return 'bg-green-500';
    if (clickOrder === 1) return 'bg-yellow-500';
    if (clickOrder === 0) return 'bg-red-500';
    return 'bg-blue-500 hover:bg-blue-700';
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded transition-colors duration-300 ${getButtonColor()} text-white`}
      disabled={clickOrder !== null}
    >
      {label}
    </button>
  );
};

export default WeightsButton;
