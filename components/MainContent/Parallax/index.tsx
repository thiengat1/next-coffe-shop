import * as React from 'react';

export interface IParallaxProps {}

export default function Parallax(props: IParallaxProps) {
  return (
    <div>
      <div
        className='bg-parallax-1 h-[340px]  
      bg-cover bg-center bg-no-repeat mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]'
      ></div>
    </div>
  );
}
