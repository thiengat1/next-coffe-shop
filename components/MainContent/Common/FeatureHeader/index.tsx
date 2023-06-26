import * as React from 'react';

export interface IFeatureHeaderProps {
  label: string;
}

export default function FeatureHeader({ label }: IFeatureHeaderProps) {
  return (
    <div className='lewis-sub-head-line flex justify-center items-center mb-96'>
      <div className='lewis-sub-head-line-deco w-8 h-px bg-gray-200'></div>
      <div className='lewis-sub-head-label tracking-widest uppercase mx-4 text-gray-500 font-medium text-[12px] text-center'>
        {label}
      </div>
      <div className='lewis-sub-head-line-deco h-px w-8 bg-gray-200'></div>
    </div>
  );
}
