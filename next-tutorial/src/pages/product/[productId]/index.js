import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();

  const { productId } = router.query;

  return <h1>Product nr {productId} </h1>;
};

export default ProductItem;
