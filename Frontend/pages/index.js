import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Home2 from "../components/Home2";
import { client, urlFor } from "../lib/client";
import AboutTheCoach from "../components/AboutTheCoach";
import { deleteProductById } from "../lib/deleteProduct";
import ProductGrid from "../components/ProductGrid";

const index = ({ products, bannerData }) => {
  useEffect(() => {}, []);
  //  const test= deleteProductById(products[0]._id,client)
  // console.log(products)
  return (
    <>
      <Header />
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Home2 />
      <AboutTheCoach />
      <ProductGrid products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
export default index;
