import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto bg-slate-400 px-8'>
      <Header />
    </main>
  );
}
