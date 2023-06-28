import * as React from 'react';
import CoffeeStyle from './CoffeeStyle';
import FooterMenu from './Menu';
import FollowUs from './FollowUs';
import ContactUs from './ContactUs';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className='w-[90%] mx-auto mb-24'>
      <div className='flex justify-center gap-8 flex-col lg:flex-row text-center lg:text-left lg:justify-evenly'>
        <CoffeeStyle />
        <FooterMenu />
        <FollowUs />
        <ContactUs />
      </div>
    </div>
  );
}
