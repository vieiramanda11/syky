import React from 'react';
import Image from 'next/image';
import { Brand, Category, Designer, Product } from '../../types';
import Link from 'next/link';
import CategoryChip from './CategoryChip';

interface ProductCompleteCardProps {
  product: Product;
  designer: Designer;
  categories: Category[];
  brand: Brand;
}

const ProductComplete = ({
  product,
  designer,
  categories,
  brand,
}: ProductCompleteCardProps) => {
  return (
    <div className="lg:flex lg:p-16 my-8 lg:my-32 p-8 w-[90%] md:w-[80%] xxl:w-1/2 mx-auto justify-center bg-neutral-white rounded-md gap-4">
      <div className="w-full  xxl:w-1/2 h-[300px] relative mb-4 lg:mb-0">
        <Image
          className="rounded-md"
          src={product.image}
          fill
          alt={product.name}
        />
      </div>
      <div className="md:px-4">
        <div className="flex gap-2">
          {categories.length !== 0 &&
            categories.map((category: any) => (
              <CategoryChip key={category.id} category={category} />
            ))}
        </div>
        <p className="text-neutral-darkBlue text-2xl font-bold my-4">
          {`${product.name} `}
          <span className="text-neutral-grayBlue text-sm font-normal">
            by
            <span className="italic font-semibold">{` ${designer.name} `}</span>
            from
            <span className="italic font-semibold">{` ${brand.name}`}</span>
          </span>
        </p>
        <p className="text-neutral-grayBlue text-sm">{product.description}</p>
        <p className="text-primary-green text-2xl font-bold my-4">
          {`$${product.price}`}
        </p>
      </div>
    </div>
  );
};

export default ProductComplete;
