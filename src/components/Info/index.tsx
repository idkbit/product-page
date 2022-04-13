import React from 'react';

export const Info = () => {
  return (
    <div className='flex-1 px-40 py-20'>
      <h3 className='text-md text-primaryOrange uppercase font-bold tracking-wider'>
        sneaker company
      </h3>
      <h2 className='capitalize font-bold text-4xl mt-8'>
        Fall limited edition sneakers
      </h2>
      <p className='text-neutralDGB mt-12'>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`ll withstand everything
        weather can offer.
      </p>
      <div>
        <div className='font-bold flex items-center gap-4 mt-8'>
          <span className='text-3xl'>$125.00</span>
          <span className='text-primaryOrange inline-block py-[1px] px-2 bg-primaryOrange bg-opacity-20 rounded-md'>
            50%
          </span>
        </div>
      </div>
    </div>
  );
};
