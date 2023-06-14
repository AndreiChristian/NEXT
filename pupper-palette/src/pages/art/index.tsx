import Image from "next/image";
import React from "react";

const ArtIndex = () => {
  return (
    <>
      <h1>Art</h1>
      <Image
        src={
          "https://github.com/AndreiChristian/NEXT/blob/master/pupper-palette/public/images/cubist/australian.png?raw=true"
        }
        alt="dog image"
        width={500}
        height={500}
      />
    </>
  );
};

export default ArtIndex;
