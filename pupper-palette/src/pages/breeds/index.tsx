import { query } from "@/db";
import { GetStaticProps } from "next";
import React from "react";

export type BreedsIndexProps = {
  breeds: Breed[];
};

const BreedsIndex: React.FC<BreedsIndexProps> = ({ breeds }) => {
  return (
    <div>
      <h1>Breeds</h1>
      {breeds.map((breed) => {
        return <div key={breed.id}>{breed.name}</div>;
      })}
    </div>
  );
};

export default BreedsIndex;

export type Breed = {
  id: number;
  name: string;
};

export const getStaticProps: GetStaticProps<BreedsIndexProps> = async () => {
  const { rows } = await query("SELECT * FROM breeds", []);

  return {
    props: {
      breeds: rows,
    },
  };
};
