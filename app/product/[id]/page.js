import ProductContainer from "@/src/containers/ProductContainer";

export default async function ProductPage({ params }) {
  return <ProductContainer params={params} />;
}