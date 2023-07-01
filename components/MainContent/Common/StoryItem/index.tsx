'use client';
import * as React from 'react';

export interface IStoryItemProps {
  title: string;
  image: string;
  shortContent: string;
  time: string;
}

export default function StoryItem({
  title,
  image,
  shortContent,
  time,
}: IStoryItemProps) {
  return (
    <div>
      <div
        className={`w-full text-center  rounded-md overflow-hidden h-[300px] relative`}
      >
        <div className='h-full w-full absolute'>
          <img
            src={`/assets/${image}`}
            className='h-full w-full object-cover'
            alt={image}
          />
        </div>

        <a href='#'>
          <div
            className='w-full h-full hover:bg-gray-900 
                hover:bg-opacity-10 hover:transition-all 
                hover:duration-300 hover:ease-in-out relative group'
          >
            <div
              className='absolute uppercase bg-white text-gray-900 text-sm 
                    tracking-wider w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-[13px]  font-medium py-4 px-6 cursor-pointer hover:bg-opacity-90
                    hidden group-hover:block group-hover:animate-fadeIn rounded-md'
            >
              Read the full story
            </div>
          </div>
        </a>
      </div>
      <div className='my-8'>
        <a href='#'>
          <div className='w-full h-full text-xl hover:text-coffee-400 mb-4'>
            {title}
          </div>
        </a>
        <div className='text-gray-500 mb-4'>{shortContent}</div>
        <div className='text-[13px] uppercase text-gray-600 font-semibold'>
          {time}
        </div>
      </div>
    </div>
  );
}
