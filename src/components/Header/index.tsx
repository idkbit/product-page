import React from 'react';
import { Cart } from '../../components';

interface Props {
  toggleMenu: () => void;
}

export const categories = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Header = ({ toggleMenu }: Props) => {
  return (
    <header className='border-b-[1px] border-b-neutralGB flex justify-between pt-4 items-baseline px-8'>
      <div className='flex items-baseline pb-8 lg:pb-0 flex-row-reverse lg:flex-row'>
        <h1 className='text-3xl md:text-4xl font-bold text-neutralVDB mr-4 md:mr-12 lowercase tracking-tight'>
          sneakers
        </h1>
        <nav className='hidden lg:block'>
          <ul className='text-neutralGB flex gap-8 font-bold'>
            {categories.map((category) => (
              <li
                key={category}
                className='hover:text-neutralVDB hover:border-b-primaryOrange border-b-4 pb-8 border-b-transparent focus-within:text-primaryOrange focus-within:border-b-primaryOrange'
              >
                <a className='focus:outline-none' href='#'>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className='lg:hidden mr-4 group' onClick={toggleMenu}>
          <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
              className='fill-[#69707D] group-hover:fill-neutralVDB'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
      <Cart />
    </header>
  );
};
