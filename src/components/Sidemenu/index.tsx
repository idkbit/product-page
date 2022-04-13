import React from 'react';
import { categories } from '../Header';

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Sidemenu = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <aside
      className={`fixed h-screen w-2/3 bg-white top-0 left-0 flex flex-col pt-20 pl-8 md:pl-20 z-[1] ${
        isMenuOpen ? '' : 'hidden'
      }`}
    >
      <button className='mb-20' onClick={toggleMenu}>
        <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
            className='fill-[#69707D]'
            fillRule='evenodd'
          />
        </svg>
      </button>
      <nav>
        <ul className='flex flex-col gap-8 text-neutralVDB font-bold'>
          {categories.map((category) => (
            <li key={category}>
              <a href='#'>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
