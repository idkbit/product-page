import React from 'react';
import avatar from '../../images/image-avatar.png';

export const Cart = () => {
  return (
    <div className='flex gap-8 items-center'>
      <button>
        <img src='/src/images/icon-cart.svg' alt='' />
      </button>
      <img className='w-10 h-10 rounded-full' src={avatar} alt='avatar.' />
    </div>
  );
};
