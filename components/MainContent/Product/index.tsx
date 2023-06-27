import * as React from 'react';
import FeatureHeader from '../Common/FeatureHeader';
import productsData from './products.data.json';
import CardItem from '../Common/CardItem';

export interface IProductsProps {}

export default function Products(props: IProductsProps) {
  return (
    <div>
      <FeatureHeader label='More products' />
      <div className='w-[95%] mx-auto mb-24 h-auto'>
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
      </div>
    </div>
  );
}
