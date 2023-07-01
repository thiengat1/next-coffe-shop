'use client';
import { useEffect } from 'react';
import FeatureHeader from '../Common/FeatureHeader';
import CardItem from '../Common/CardItem';

import useCommon from '@/hooks/useCommon';

export interface IMugsProps {}

export default function Mugs(props: IMugsProps) {
  const {
    infoAnimated,
    handleScroll,
    infoRef,
    animated,
    itemRef,
    itemAnimated,
  } = useCommon();

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(false));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(false));
    };
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(true));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(true));
    };
  }, []);

  return (
    <div>
      <animated.div style={infoAnimated} ref={infoRef}>
        <FeatureHeader label='Feature mugs' />
      </animated.div>

      <animated.div
        className='w-[95%] lg:w-[65%] mx-auto mb-24'
        style={itemAnimated}
        ref={itemRef}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4'>
          <CardItem
            image='featured-mug-01.jpeg'
            name='Pink Premium Ceramic'
            price='$99.00 USD'
          />
          <CardItem
            image='featured-mug-02.jpeg'
            name='Golden Designers Mug'
            price='$50.00 USD'
            priceSale='$69.00 USD'
          />
        </div>
      </animated.div>
    </div>
  );
}
