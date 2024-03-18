import ProductCard from '@/components/ProductCard';
import React from 'react';
import { Brand, Category, Designer, Product } from '../../../types';
import ProductComplete from '@/components/ProductComplete';

interface ProductDetailsProps {
  data: Product;
  designer: Designer;
  categories: Category[];
  brand: Brand;
}
const ProductDetails = ({
  data,
  designer,
  categories,
  brand,
}: ProductDetailsProps) => {
  return (
    <ProductComplete
      key={data.id}
      product={data}
      designer={designer}
      categories={categories}
      brand={brand}
    />
  );
};

export default ProductDetails;
