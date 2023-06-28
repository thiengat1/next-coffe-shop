import * as React from 'react';

export interface ICoffeeStyleProps {}

export default function CoffeeStyle(props: ICoffeeStyleProps) {
  return (
    <div className='basis-1/3'>
      <div className='text-xl text-gray-800 font-bold mb-4'>CoffeeStyle.</div>
      <div className='text-gray-500 mb-20'>
        Delivering the best coffee life since 1996. From coffee geeks to the
        real ones.
      </div>
      <div className='text-gray-400 hover:text-coffee-400'>lewis official</div>
    </div>
  );
}
