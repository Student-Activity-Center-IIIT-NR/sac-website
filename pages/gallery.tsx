import Head from "next/head";
import GalleryLayout from "../layouts/GalleryLayout";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>SAC | Gallery</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryLayout />
    </>
  );
};

export default Gallery;
