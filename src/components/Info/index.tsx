import React from 'react';
import { Counter } from '../Counter';

export const Info = () => {
  return (
    <div className='flex-1 lg:px-40 py-20'>
      <h3 className='text-md text-primaryOrange uppercase font-bold tracking-wider'>
        sneaker company
      </h3>
      <h2 className='capitalize font-bold text-4xl mt-8 text-neutralVDB'>
        Fall limited edition sneakers
      </h2>
      <p className='text-neutralDGB mt-12'>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`ll withstand everything
        weather can offer.
      </p>
      <div>
        <div className='font-bold flex items-center gap-4 mt-8'>
          <span className='text-3xl text-neutralVDB'>$125.00</span>
          <span className='text-primaryOrange inline-block py-[1px] px-2 bg-primaryOrange bg-opacity-20 rounded-md'>
            50%
          </span>
        </div>
        <span className='text-neutralGB font-bold line-through'>$250.00</span>
      </div>
      <div className='flex gap-12 mt-8'>
        <Counter />
        <button className='flex flex-[3] gap-4 bg-primaryOrange text-white justify-center items-center px-4 rounded-md hover:opacity-75'>
          <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='currentColor'
              fill-rule='nonzero'
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};
