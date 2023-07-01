import { useEffect } from 'react';
import FeatureHeader from '../Common/FeatureHeader';
import productsData from './products.data.json';
import CardItem from '../Common/CardItem';
import useCommon from '@/hooks/useCommon';

export interface IProductsProps {}

export default function Products(props: IProductsProps) {
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
        <FeatureHeader label='More products' />
      </animated.div>

      <animated.div
        style={itemAnimated}
        ref={itemRef}
        className='w-[95%] mx-auto mb-24 h-auto'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {productsData.map((product) => {
            const { id, image, name, price, priceSale } = product;
            return (
              <CardItem
                key={`product-${id}`}
                image={image}
                name={name}
                price={price}
                priceSale={priceSale}
              />
            );
          })}
        </div>
      </animated.div>
    </div>
  );
}
