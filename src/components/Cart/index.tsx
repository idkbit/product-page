import React, { MouseEvent, useContext } from 'react';
import CartContext from '../../context';
import avatar from '/images/image-avatar.png';

export const Cart = () => {
  const { cartItems: items, setCartItems } = useContext(CartContext);
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const totalAmount = items.reduce((a, c) => a + c.amount, 0);

  return (
    <div
      className='flex gap-8 items-center relative'
      onClick={(e: MouseEvent) => e.stopPropagation()}
    >
      <button
        className='group relative'
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
            className='fill-[#69707D] group-hover:fill-neutralVDB group-focus:fill-neutralVDB'
            fillRule='nonzero'
          />
        </svg>
        {totalAmount > 0 && (
          <span className='absolute -top-2 -right-3 w-6 h-4 flex justify-center px- items-center bg-primaryOrange text-white rounded-lg text-xs'>
            {totalAmount}
          </span>
        )}
      </button>
      <img
        onClick={() => (isCartVisible ? setIsCartVisible(false) : null)}
        className='w-12 h-12 rounded-full border-2 border-transparent hover:border-primaryOrange hover:cursor-pointer'
        src={avatar}
        alt='avatar.'
      />
      <div
        className={
          isCartVisible
            ? 'block absolute right-0 top-14 shadow-lg shadow-neutralGB w-80 bg-white z-10'
            : 'hidden'
        }
      >
        <p className='text-neutralVDB p-4 font-bold border-b-[1px] border-b-neutralGB'>
          Cart
        </p>
        <div className='min-h-[10rem] py-4 flex flex-col gap-4'>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className='flex gap-4 px-4 items-center'>
                <img className='w-10 h-10 rounded' src={item.img} alt='' />
                <div className='text-sm text-neutralDGB'>
                  <p className='text-ellipsis'>{item.product}</p>
                  <p>
                    {item.price.toFixed(2)} x {item.amount}{' '}
                    <span className='font-bold'>
                      {(item.price * item.amount).toFixed(2)}$
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='text-neutralGB hover:text-neutralVDB'
                >
                  <svg
                    width='14'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <defs>
                      <path
                        d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                        id='a'
                      />
                    </defs>
                    <use
                      fill='currentColor'
                      fillRule='nonzero'
                      xlinkHref='#a'
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className='text-neutralDGB font-bold translate-x-1/4 translate-y-14'>
              Your cart is empty.
            </p>
          )}
          {items.length > 0 ? (
            <button className='bg-primaryOrange mx-4 rounded py-2 text-white hover:bg-opacity-75'>
              Checkout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
