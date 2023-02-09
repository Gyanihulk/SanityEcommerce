import React from 'react'
import Product from './Product'

const ProductGrid = ({products}) => {
  return (
    <div className="home4" id="brands">
        <div>
          <h1>Our Plans</h1>

          <article>
         
            {products?.map((product) => (
              <Product product={product} key={product._id}/>
            ))}
          </article>
        </div>
      </div>
  )
}

export default ProductGrid