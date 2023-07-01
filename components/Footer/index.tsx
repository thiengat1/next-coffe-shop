import CoffeeStyle from './CoffeeStyle';
import FooterMenu from './Menu';
import FollowUs from './FollowUs';
import ContactUs from './ContactUs';
import useCommon from '@/hooks/useCommon';
import { useEffect } from 'react';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const { infoAnimated, handleScroll, infoRef, animated } = useCommon();

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(false));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(false));
    };
  }, []);
  return (
    <animated.div
      style={infoAnimated}
      ref={infoRef}
      className='w-[90%] mx-auto mb-24'
    >
      <div className='flex justify-center gap-8 flex-col lg:flex-row text-center lg:text-left lg:justify-evenly'>
        <CoffeeStyle />
        <FooterMenu />
        <FollowUs />
        <ContactUs />
      </div>
    </animated.div>
  );
}
