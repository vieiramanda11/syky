'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Brand, Category, Designer, Product } from '../../../types';
import ProductCard from '@/components/ProductCard';
import Dropdown from '@/components/Dropdown';

interface ProductListProps {
  data: Product[];
  categories: Category[];
  brands: Brand[];
  designers: Designer[];
}

const ProductsList = ({
  data,
  categories,
  designers,
  brands,
}: ProductListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDesigner, setSelectedDesigner] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const existingFilterName = Array.from(current.keys())[0];

  const handleSeeAll = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedDesigner(null);
    current.delete(existingFilterName);
    router.push('/');
  };

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    filterName: string
  ) => {
    const selectedValue = event.target.value;
    if (filterName === 'category_id') {
      setSelectedCategory(selectedValue);
      setSelectedBrand(null);
      setSelectedDesigner(null);
    }
    if (filterName === 'designer_id') {
      setSelectedDesigner(selectedValue);
      setSelectedBrand(null);
      setSelectedCategory(null);
    }
    if (filterName === 'brand_id') {
      setSelectedBrand(selectedValue);
      setSelectedCategory(null);
      setSelectedDesigner(null);
    }

    const value = selectedValue.trim();

    if (existingFilterName && existingFilterName !== filterName) {
      current.delete(existingFilterName);
    }

    if (!value || value === 'all') {
      current.delete(filterName);
    } else {
      current.set(filterName, selectedValue);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  return (
    <main className="m-auto">
      <div className="gap-12 pt-16 flex justify-center content-center">
        <button
          className="text-primary-green hover:opacity-50 underline"
          onClick={handleSeeAll}
        >
          See all products
        </button>
        <Dropdown
          handleFilterChange={(event) =>
            handleFilterChange(event, 'category_id')
          }
          title="category"
          type="category_id"
          selected={selectedCategory}
          filterOptions={categories}
        />
        <Dropdown
          handleFilterChange={(event) =>
            handleFilterChange(event, 'designer_id')
          }
          title="desginer"
          type="designer_id"
          selected={selectedDesigner}
          filterOptions={designers}
        />
        <Dropdown
          handleFilterChange={(event) => handleFilterChange(event, 'brand_id')}
          title="brand"
          type="brand_id"
          selected={selectedBrand}
          filterOptions={brands}
        />
      </div>
      <div className="flex justify-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-12 p-16">
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {data.length === 0 && <h2 className="text-center">No products found</h2>}
    </main>
  );
};

export default ProductsList;
