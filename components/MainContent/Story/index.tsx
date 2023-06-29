import * as React from 'react';
import FeatureHeader from '../Common/FeatureHeader';

export interface IStoryProps {}

export default function Story(props: IStoryProps) {
  return (
    <div>
      <FeatureHeader label='OUR COFFEE STORY' />
      <div className='w-[95%] lg:w-[65%] mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>
          <div className='h-[350px] basis-1/2'>
            <video
              src='/assets/videos/coffee-video.mp4'
              autoPlay
              muted
              loop
              className='w-full h-full min-h-[350px] object-cover rounded-md'
            />
          </div>
          <div className='basis-1/2'>
            <div className='text-3xl mb-6 leading-10'>
              What is your most special coffee?
            </div>
            <div className='text-gray-500 mb-6 leading-8'>
              The French Press is a brewing method that comes closest to
              cupping. Cupping is the prescribed method by which coffee should
              be judged. Nothing separates the water from the coffee. To
              properly discover the flavours, it is best to drink the coffee
              this way. Everyone has their favourite brewing method.
            </div>
            <div>
              <a
                href='#'
                className='text-coffee-400 hover:text-coffee-600 
              relative after:absolute after:-bottom-2 after:left-0 
            after:bg-coffee-50 hover:after:bg-coffee-200  
            after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400'
              >
                Read the full Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
