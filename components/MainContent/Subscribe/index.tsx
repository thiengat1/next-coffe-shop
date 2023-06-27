import * as React from 'react';

export interface ISubscribeProps {}

export default function Subscribe(props: ISubscribeProps) {
  return (
    <div className='mb-24'>
      <div
        className='w-[95%] h-[350px] mx-auto bg-gray-800 rounded-md 
      text-white text-center flex justify-center items-center flex-col'
      >
        <div className='flex items-center mb-6'>
          <div className='h-px w-8 bg-gray-700'></div>
          <div className='mx-4 uppercase text-gray-400 text-xs'>
            SIGN UP AND GET FREE COFFEE BAGS
          </div>
          <div className='h-px w-8 bg-gray-700'></div>
        </div>
        <div className='text-4xl mb-6'>Coffee Updates</div>
        <div className='flex gap-4'>
          <input
            type='email'
            placeholder='thiengat1@gmail.com'
            className='px-6 py-4 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border-[1px] border-gray-700 outline-none text-white leading-5 hover:border-gray-300 duration-500 focus:border-gray-300 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold'
          />
          <div className='lewis-button bg-white text-gray-900'>Subscribe</div>
        </div>
      </div>
    </div>
  );
}
