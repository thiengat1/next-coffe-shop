'use client';
import Image from 'next/image';
import Header from '@/components/Header';
import Slider from '@/components/MainContent/Slider';
import Story from '@/components/MainContent/Story';
import Mugs from '@/components/MainContent/Mugs';
import Products from '@/components/MainContent/Product';
import Magazine from '@/components/MainContent/Magazine';
import Parallax from '@/components/MainContent/Parallax';
import Stories from '@/components/MainContent/Stories';
import Subscribe from '@/components/MainContent/Subscribe';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleOnComplete = () => {
    setIsLoading(false);
  };
  return (
    <main className='h-screen'>
      {isLoading ? (
        <Loading onComplete={handleOnComplete} />
      ) : (
        <div className='max-w-[1440px] mx-auto px-8'>
          <Header />
          <div>
            <Slider />
            <Story />
            <Mugs />
            <Products />
            <Magazine />
            <Parallax />
            <Stories />
            <Subscribe />
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
}
