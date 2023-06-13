import Link from "next/link";
import { useRouter } from "next/router";

const ProductIndex = () => {
  const router = useRouter();

  const navigate = () => {
    router.push(`/product/${Math.floor(Math.random() * 1000)}`);
  };

  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>Product Index</h1>
      <ul>
        <Link href={"/1"}>1</Link>
        <Link href={"/2"}>2</Link>
        <Link href={"/product/3"} replace>
          3
        </Link>
        <Link href={"/product/4"}>4</Link>
      </ul>
      <button onClick={navigate}>Go to random project</button>
    </div>
  );
};

export default ProductIndex;
