import { useRouter } from "next/router";

const ReviewIndex = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <h1>Product {productId} Review Index</h1>;
};

export default ReviewIndex;
