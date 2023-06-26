import Image from 'next/image';
import Header from '@/components/Header';
import Slider from '@/components/MainContent/Slider';
import Story from '@/components/MainContent/Story';
import Mugs from '@/components/MainContent/Mugs';

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto px-8'>
      <Header />
      <div>
        <Slider />
        <Story />
        <Mugs />
      </div>
    </main>
  );
}
