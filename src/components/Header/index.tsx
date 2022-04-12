import React from 'react';
import { Cart } from '../../components';

const categories = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Header = () => {
  return (
    <header className='border-b-[1px] border-b-neutralGB flex justify-between pt-4 items-baseline'>
      <div className='flex items-baseline'>
        <h1 className='text-4xl font-bold text-neutralVDB lg:mr-12 lowercase'>
          sneakers
        </h1>
        <nav>
          <ul className='text-neutralGB flex gap-8 font-bold'>
            {categories.map((category) => (
              <li
                key={category}
                className='hover:text-neutralVDB hover:border-b-primaryOrange border-b-4 pb-8 border-b-transparent'
              >
                <a href='#'>{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Cart />
    </header>
  );
};
