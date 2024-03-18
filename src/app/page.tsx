import { fetchData } from '@/services/requests';
import ProductsList from './containers/ProductsList';
import { BASE_URL } from '@/contants';

export default async function Home({ searchParams }: any) {
  const { category_id, designer_id, brand_id } = searchParams;

  const categories = await fetchData(`${BASE_URL}/categories`);
  const designers = await fetchData(`${BASE_URL}/designers`);
  const brands = await fetchData(`${BASE_URL}/brands`);

  const url = category_id
    ? `${BASE_URL}/products?category_id=${category_id}`
    : designer_id
    ? `${BASE_URL}/products?designer_id=${designer_id}`
    : brand_id
    ? `${BASE_URL}/products?brand_id=${brand_id}`
    : `${BASE_URL}/products`;

  const data = await fetchData(url);

  return (
    <ProductsList
      data={data}
      categories={categories}
      designers={designers}
      brands={brands}
    />
  );
}
