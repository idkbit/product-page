import React, { useState } from 'react';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';

interface Props {
  count: number;
  setCount: (count: number) => void;
}

export const Counter = ({ count, setCount }: Props) => {
  const handleMinusClick = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handlePlusClick = () => setCount(count + 1);

  return (
    <div className='flex'>
      <button
        onClick={handleMinusClick}
        className='flex justify-center items-center p-4 bg-neutralGB bg-opacity-20 rounded-l-md'
      >
        <img src={minus} alt='decrease amount of items.' />
      </button>
      <span className='flex w-4 px-8 py-4 font-bold text-neutralVDB justify-center items-center bg-neutralGB bg-opacity-20'>
        {count}
      </span>
      <button
        onClick={handlePlusClick}
        className='flex justify-center items-center p-4 bg-neutralGB bg-opacity-20 rounded-r-md'
      >
        <img src={plus} alt='increase amount of items.' />
      </button>
    </div>
  );
};
