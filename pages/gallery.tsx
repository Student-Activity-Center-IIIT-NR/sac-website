import Head from "next/head";
import GalleryLayout from "../layouts/GalleryLayout";
import Index from "../features/gallery/Index";
import { NextPage } from "next";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GalleryLayout>
        <Index />
      </GalleryLayout>
    </>
  );
};

export default Gallery;
