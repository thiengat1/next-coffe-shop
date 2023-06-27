'use client';
import * as React from 'react';

export interface ICardItemProps {
  name: string;
  image: string;
  price: string;
  priceSale?: string;
}

export default function CardItem({
  name,
  image,
  price,
  priceSale,
}: ICardItemProps) {
  console.log('image', image);

  return (
    <div>
      <div
        className={`w-full text-center  rounded-md overflow-hidden h-[540px] relative`}
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
            {priceSale && (
              <div className='absolute w-[100px] bg-white py-2 px-4 top-3 right-3 font-semibold text-coffee-400'>
                On sale
              </div>
            )}

            <div
              className='absolute uppercase bg-white text-gray-900 text-sm 
                    tracking-wider w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-[13px]  font-medium py-4 px-6 cursor-pointer hover:bg-opacity-90
                    hidden group-hover:block group-hover:animate-fadeIn rounded-md'
            >
              Explore mug
            </div>
          </div>
        </a>
      </div>
      <div className='text-center my-8'>
        <a href='#'>
          <div className='w-full h-full text-xl hover:text-coffee-400'>
            {name}
          </div>
        </a>
        <div className='mt-2'>
          <span className='text-xl text-coffee-400'>{price}</span>
          {priceSale && (
            <span className='ml-2 italic line-through text-gray-400'>
              {priceSale}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
