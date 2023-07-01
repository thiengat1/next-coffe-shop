import FeatureHeader from '../Common/FeatureHeader';
import useCommon from '@/hooks/useCommon';
import { useEffect } from 'react';

export interface IMagazineProps {}

export default function Magazine(props: IMagazineProps) {
  const { infoAnimated, handleScroll, infoRef, animated } = useCommon();

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(false));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(false));
    };
  }, []);
  return (
    <animated.div style={infoAnimated} ref={infoRef}>
      <FeatureHeader label='Buy 2 mugs and get a coffee magazine free' />
      <div className='w-[95%] lg:w-[65%] mx-auto mb-24 h-full'>
        <div className='flex flex-col md:flex-row w-full h-full justify-center items-center gap-5'>
          <div className=' w-full h-full basis-1/2 md:flex justify-center md:flex-row items-center mb-5 md:mb-0 gap-3 md:gap-5'>
            <div className='bg-magazine-1 bg-center bg-cover h-[280px] basis-2/3 rounded-md mb-3 md:mb-0'></div>
            <div className='basis-1/3 flex flex-row md:flex-col gap-3 md:gap-5'>
              <div className='bg-magazine-2  w-1/2 md:w-full bg-center bg-cover bg-no-repeat h-[130px] rounded-md'></div>
              <div className='bg-magazine-3  w-1/2 md:w-full bg-center bg-cover bg-no-repeat h-[130px] rounded-md'></div>
            </div>
          </div>
          <div className=' basis-1/2 pl-8 text-center md:text-left'>
            <div className='tracking-widest uppercase text-gray-500 font-medium text-xs mb-4'>
              PREMIUM OFFER
            </div>
            <div className='text-4xl mb-4'>Get our Coffee Magazine</div>
            <div className='text-gray-500 mb-4'>
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className='lewis-button bg-gray-800 w-max text-white mx-auto md:mx-0'>
              START SHOPPING
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
