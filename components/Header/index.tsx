'use client';
import { useEffect, useState } from 'react';
import menuData from './menu.data.json';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsShowMenu(!isShowMenu);
  };
  useEffect(() => {
    const menuIcon = document.getElementById('lewis-menu-icon');
    window.addEventListener('resize', () => {
      setIsShowMenu(false);
    });
    window.addEventListener('click', (e: any) => {
      if (!menuIcon?.contains(e.target)) {
        setIsShowMenu(false);
      }
    });
  }, []);
  return (
    <div className='py-6 mx-10'>
      <nav className='flex flex-row justify-between items-center relative'>
        <div className='logo  text-center text-xl font-semibold cursor-pointer'>
          Coffee shop
        </div>
        <ul
          id='lewis-top-menu'
          className={` ${
            isShowMenu ? 'block lewis-top-menu-expanded' : 'hidden'
          }  lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium`}
        >
          {menuData.map((item) => {
            return (
              <li className='top-menu-item' key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <div className='flex'>
          <ul className=' flex justify-end lg:justify-start items-center ml-16 text-sm text-gray-500 font-medium uppercase'>
            <li>
              <a href='#' className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='lewis-icon'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                <span className='mx-2'>Cart</span>
                <span className='lewis-badge-circle bg-orange-400 text-white'>
                  10
                </span>
              </a>
            </li>
          </ul>
          <div className='lg:hidden  flex items-center px-2 sm:px-4  cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='lewis-icon'
              onClick={handleMenuClick}
              id='lewis-menu-icon'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}
