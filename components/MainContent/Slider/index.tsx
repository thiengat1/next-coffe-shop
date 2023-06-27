import * as React from 'react';

export interface ISliderProps {}

export default function Slider(props: ISliderProps) {
  return (
    <div className='h-[530px] bg-slider bg-cover bg-no-repeat bg-bottom rounded-sm overflow-hidden'>
      <div className='w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40'>
        <div className='mx-16 text-white text-center'>
          <div className=' uppercase mb-6'>Best play to buy coffee</div>
          <div className='text-5xl font-medium mb-6'>Coffee Mugs</div>
          <div className='font-medium text-lg mb-6'>
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </div>
          <div className='flex justify-center'>
            <div
              className=' uppercase bg-white text-gray-900 text-sm 
            tracking-wider w-max font-medium py-4 px-6 cursor-pointer hover:bg-opacity-95'
            >
              Explore Out Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
