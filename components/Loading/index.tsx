'use client';
import { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { animated, useSpring } from '@react-spring/web';

export interface ILoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: ILoadingProps) {
  const [progress, setProgress] = useState<number>(0);

  const fadeInLogo = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    const progressTime = setInterval(async () => {
      if (progress < 100) {
        setProgress((pre) => pre + 1);
      } else {
        clearInterval(progressTime);
      }
    }, 30);
    return () => {
      clearInterval(progressTime);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [progress, onComplete]);

  return (
    <animated.div className='  w-screen h-screen bg-gray-800  flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-4 w-40'>
        <animated.img
          src='/assets/coffee_logo.png'
          alt='logo'
          className='w-20'
          style={fadeInLogo}
        />
        <div className='w-full'>
          <ProgressBar
            isLabelVisible={false}
            bgColor='#D500F9'
            height='2px'
            width='100%'
            completed={progress}
          />
        </div>
      </div>
    </animated.div>
  );
}
