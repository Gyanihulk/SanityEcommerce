import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
      <div
              style={{
                animationDelay: "1s",
              }}
            >
              <img
            src={urlFor(image && image[0])}
            width={80}
            height={80}
            className="product-image"
            alt="product1"
          />
              <p>{name}</p>
              <p>₹ {price}</p>
            </div>
      </Link>
    </div>
  );
};

export default Product;
