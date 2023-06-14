import { query } from "@/db";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import styles from "../../styles/pagesStyles/ArtIndex.module.css";
import { useRouter } from "next/router";

export type ArtIndexProps = {
  dogs: DogOverview[];
};

const ArtIndex: React.FC<ArtIndexProps> = ({ dogs }) => {
  const router = useRouter();

  const onHandleClick = (id: number) => {
    router.push(`art/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>Art</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde
        quas! Neque debitis ratione ea et vero quaerat, sapiente quia
        necessitatibus dolorem consequatur facilis libero cumque fuga molestiae
        saepe corrupti?
      </p>
      <div className={styles.grid}>
        {dogs.map((dog) => {
          return (
            <div
              key={dog.id}
              className={styles.item}
              onClick={() => onHandleClick(dog.id)}
            >
              <Image
                src={dog.imagepath}
                alt={dog.name}
                // height={100}
                // width={100}
                style={{
                  objectFit: "cover",
                }}
                fill
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtIndex;

export type DogOverview = {
  id: number;
  name: string;
  description: string;
  breed_id: number;
  category_id: number;
  price: number;
  imagepath: string;
};

export const getStaticProps: GetStaticProps<ArtIndexProps> = async () => {
  const { rows } = await query(
    `SELECT *
  FROM dogs
  ORDER BY id`,
    []
  );

  return {
    props: {
      dogs: rows,
    },
  };
};
