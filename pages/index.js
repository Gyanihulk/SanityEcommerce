import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

import Home2 from "../components/Home2";
import Home3 from "../components/AboutTheCoach";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { client, urlFor } from "../lib/client";
import AboutTheCoach from "../components/AboutTheCoach";

const index = ({ products, bannerData }) => {
  return (
    <>    
    <Navbar/>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Home2/>
      <AboutTheCoach/>
      <div className="home4" id="brands">
        <div>
          <h1>Our Plans</h1>

          <article>
          {products?.map((product) => (
          <div
          style={{
            animationDelay: "1s",
          }}
        >
          <img
        src={urlFor(product.image && product.image[0])}
        width={80}
        height={80}
        className="product-image"
        alt="product1"
      />
          <p>{product.name}</p>
          <p>₹ {product.price} /Month</p>
        </div>
        ))}
            

            
          </article>
        </div>
      </div>
      {/* <div className="products-heading">
        <h1>Learn according to your preference </h1>
        <p> Choose From Different Class Categories below</p>
      </div>
      <div className="product-container">
        {" "}
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div> */}
      <Footer />
     {}
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
