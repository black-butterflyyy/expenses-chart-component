import { useState } from 'react';

const ChartBar = ({ value, height, isMax }) => {
  const [showAmount, setShowAmount] = useState(false);
  function handleShowAmount() {
    setShowAmount(true);
  }
  function handleHideShowAmount() {
    setShowAmount(false);
  }
  return (
    <div
      className='bar relative cursor-pointer'
      onMouseEnter={handleShowAmount}
      onMouseLeave={handleHideShowAmount}
      onTouchStart={handleShowAmount}
      onTouchEnd={handleHideShowAmount}
    >
      <div
        className={`bg-dark-brown  ${
          showAmount ? 'flex' : 'hidden'
        } justify-center items-center rounded-md text-sm mb-2 absolute -top-11 p-2 -left-3 z-50`}
      >
        ${value.amount}
      </div>
      <div
        className={`hover:opacity-80 ${height} w-9 rounded-[5px] ${
          isMax ? 'bg-secondary' : 'bg-primary'
        }`}
      ></div>
      <p className='text-medium-brown text-xs text-center leading-9'>
        {value.day}
      </p>
    </div>
  );
};

export default ChartBar;
