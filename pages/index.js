import React from "react";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { client } from "../lib/client";

const index = ({ products, bannerData }) => {
  return (
    <>
    <Navbar/>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h1>Learn according to your preference </h1>
        <p> Choose From Different Class Categories below</p>
      </div>
      <div className="product-container">
        {" "}
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Footer />
     
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
