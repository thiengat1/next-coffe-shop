import useCommon from '@/hooks/useCommon';
import { useEffect } from 'react';
import FeatureHeader from '../Common/FeatureHeader';
import StoryItem from '../Common/StoryItem';
import storiesData from './stories.data.json';

export interface IStoriesProps {}

export default function Stories(props: IStoriesProps) {
  const { infoAnimated, handleScroll, infoRef, animated } = useCommon();

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(false));
    return () => {
      window.removeEventListener('scroll', () => handleScroll(false));
    };
  }, []);

  return (
    <animated.div style={infoAnimated} ref={infoRef} className='mb-24'>
      <FeatureHeader label='BEHIND THE MUGS, LIFESTYLE STORIES' />
      <div className='w-[95%] lg:w-[65%] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {storiesData.map((story) => {
            const { id, image, title, shortContent, time } = story;
            return (
              <StoryItem
                key={id}
                image={image}
                title={title}
                shortContent={shortContent}
                time={time}
              />
            );
          })}
        </div>
      </div>
    </animated.div>
  );
}
