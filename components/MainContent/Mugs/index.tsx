import * as React from 'react';
import FeatureHeader from '../Common/FeatureHeader';
import CardItem from '../Common/CardItem';

export interface IMugsProps {}

export default function Mugs(props: IMugsProps) {
  return (
    <div>
      <FeatureHeader label='Feature mugs' />
      <div className='w-[95%] lg:w-[65%] mx-auto mb-24'>
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
      </div>
    </div>
  );
}
