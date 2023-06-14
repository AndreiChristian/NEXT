import { query } from "@/db";
import styles from "../../styles/pagesStyles/ArtId.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import React from "react";
import Link from "next/link";

export type DogDetail = {
  id: number;
  name: string;
  description: string;
  breed_id: number;
  category_id: number;
  price: number;
  imagepath: string;
  breed: string;
  category: string;
};

type ArtIdProps = {
  dog: DogDetail;
};

const ArtItem: React.FC<ArtIdProps> = ({ dog }) => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <span className={styles.img_container} style={{ position: "relative" }}>
          <Image src={dog.imagepath} alt={dog.name} fill></Image>
        </span>
        <div className={styles.details}>
          <h1>{dog.name}</h1>
          <p>{dog.description}</p>
          <Link href={`/breeds/${dog.breed_id}`}>
            <button className="stroked-button-secondary">{dog.breed}</button>
          </Link>
          <br />
          <div className={styles.spacer}></div>
          <Link href={`/categories/${dog.category_id}`}>
            <button className="stroked-button-secondary">{dog.category}</button>
          </Link>
          <h3>{dog.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArtItem;

export const getStaticPaths: GetStaticPaths = async () => {
  const { rows } = await query(
    `SELECT d.*,
  b.name as breed,
  c.name as category
FROM dogs as d
  JOIN categories as c ON d.category_id = c.id
  JOIN breeds as b ON d.breed_id = b.id`,
    []
  );

  const paths = rows.map((row) => {
    return {
      params: {
        artId: row.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<ArtIdProps> = async ({
  params,
}) => {
  const { artId } = params!; // Extract the artId from params

  const { rows } = await query(
    `SELECT d.*,
      b.name as breed,
      c.name as category
    FROM dogs as d
      JOIN categories as c ON d.category_id = c.id
      JOIN breeds as b ON d.breed_id = b.id
    WHERE d.id = $1`,
    [artId] // Use artId instead of params as the parameter value
  );

  return {
    props: {
      dog: rows[0],
    },
  };
};
