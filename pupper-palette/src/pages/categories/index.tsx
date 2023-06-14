import { query } from "@/db";
import { GetStaticProps } from "next";
import React from "react";

interface CategoriesIndexProps {
  categories: Category[];
}

const CategoriesIndex: React.FC<CategoriesIndexProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => {
        return <div key={category.id}>{category.name}</div>;
      })}
    </div>
  );
};

export default CategoriesIndex;

export type Category = {
  id?: number;
  name: string;
};

export const getStaticProps: GetStaticProps<
  CategoriesIndexProps
> = async () => {
  const { rows } = await query("SELECT * FROM categories", []);

  return {
    props: {
      categories: rows,
    },
  };
};
