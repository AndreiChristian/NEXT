import { useRouter } from "next/router";

const DocsParams = () => {
  const { params = [] } = useRouter().query;

  console.log(params);

  return <h1>Hello</h1>;
};

export default DocsParams;
