import * as React from 'react';

export interface IContactUsProps {}

export default function ContactUs(props: IContactUsProps) {
  return (
    <div className='basis-1/3'>
      <div className=' text-gray-600 font-bold mb-4 uppercase'>Contact us</div>
      <div className='text-gray-500 mb-4'>We are Always Happy to Help</div>
      <div className='text-3xl mb-20 cursor-pointer hover:text-coffee-400'>
        thiengat1@gmail.com
      </div>
      <div className='text-gray-400 cursor-pointer hover:text-coffee-400'>
        Powered by lewis © 2023
      </div>
    </div>
  );
}
