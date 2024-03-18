import React from 'react';
import { Category } from '../../types';

interface CategoryChipProps {
  category: Category;
}

const CategoryChip = ({ category }: CategoryChipProps) => {
  return (
    <div className="py-1 px-3 bg-primary-green w-fit rounded-full">
      <p className="text-primary-cream font-bold text-xs">{category.name}</p>
    </div>
  );
};

export default CategoryChip;
