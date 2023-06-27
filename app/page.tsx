import Image from 'next/image';
import Header from '@/components/Header';
import Slider from '@/components/MainContent/Slider';
import Story from '@/components/MainContent/Story';
import Mugs from '@/components/MainContent/Mugs';
import Products from '@/components/MainContent/Product';
import Magazine from '@/components/MainContent/Magazine';
import Parallax from '@/components/MainContent/Parallax';

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto px-8'>
      <Header />
      <div>
        <Slider />
        <Story />
        <Mugs />
        <Products />
        <Magazine />
        <Parallax />
        <div>3543543</div>
        <div>3543543</div>
        <div>3543543</div>
        <div>3543543</div>
      </div>
    </main>
  );
}
