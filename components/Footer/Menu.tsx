import * as React from 'react';
import menuData from '../Header/menu.data.json';

export interface IFooterMenuProps {}

export default function FooterMenu(props: IFooterMenuProps) {
  return (
    <div className='basis-1/6'>
      <div className=' uppercase text-gray-600 mb-4 font-semibold'>Menu</div>
      <ul>
        {menuData.map((menu) => {
          const { id, name } = menu;
          return (
            <li
              className='mb-4 text-gray-500 hover:text-coffee-400 cursor-pointer'
              key={id}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
