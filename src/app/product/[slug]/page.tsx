import { fetchData } from '@/services/requests';
import '../../globals.css';
import ProductDetails from '@/app/containers/ProductDetails';

export default async function Product({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await fetchData(
    `https://fe-test-api.vercel.app/products/${slug}`
  );

  const designer = await fetchData(
    `https://fe-test-api.vercel.app/designers/${data.designer_id}`
  );

  const categories = [];
  if (data.category_id.length !== 0) {
    for (let i = 0; i < data.category_id.length; i++) {
      const categoryData = await fetchData(
        `https://fe-test-api.vercel.app/categories/${data.category_id[i]}`
      );
      categories.push(categoryData);
    }
  }

  const brand = await fetchData(
    `https://fe-test-api.vercel.app/brands/${data.brand_id}`
  );

  return (
    <ProductDetails
      data={data}
      designer={designer}
      categories={categories}
      brand={brand}
    />
  );
}
