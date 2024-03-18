import React from 'react';
import Image from 'next/image';
import { Product } from '../../types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-[350px] rounded-md	bg-neutral-white my-2 pb-4">
      <div className="h-[300px] relative">
        <Image
          className="rounded-tl-md rounded-tr-md"
          src={product.image}
          fill
          alt={product.name}
        />
      </div>
      <div className="p-4">
        <p className="text-neutral-darkBlue text-2xl font-bold my-4">
          {product.name}
        </p>
        <p className="text-neutral-grayBlue text-sm">{product.description}</p>
        <p className="text-primary-green text-2xl font-bold my-4">
          {`$${product.price}`}
        </p>
        <Link
          className="bg-primary-green text-neutral-white py-3 px-4 rounded-lg hover:opacity-50"
          href={`/product/${product.id}`}
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
