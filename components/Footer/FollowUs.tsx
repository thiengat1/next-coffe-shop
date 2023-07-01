import * as React from 'react';

export interface IFollowUsProps {}

export default function FollowUs(props: IFollowUsProps) {
  const socials = [
    {
      id: 1,
      name: 'Facebook',
      link: 'https://www.facebook.com/thien.nguyenvan.353/',
    },
    {
      id: 2,
      name: 'Instagram',
      link: 'https://www.facebook.com/thien.nguyenvan.353/',
    },
    {
      id: 3,
      name: 'Pinterest',
      link: 'https://www.facebook.com/thien.nguyenvan.353/',
    },
    {
      id: 4,
      name: 'Twitter',
      link: 'https://www.facebook.com/thien.nguyenvan.353/',
    },
  ];
  return (
    <div className='basis-1/6'>
      <div className=' uppercase text-gray-600 mb-4 font-semibold'>
        Follow us
      </div>
      <ul>
        {socials.map((item) => {
          const { id, name, link } = item;
          return (
            <li
              className='mb-4 text-gray-500 hover:text-coffee-400 cursor-pointer'
              key={id}
            >
              <a href={link} target='_blank'>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
