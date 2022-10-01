import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroBanner from '../components/HeroBanner'
import Product from '../components/Product'
import { client } from '../lib/client'

const index = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='products-heading'>
      <h1>Best Seller Products</h1>
      <p> speakers There are many Variations passages</p>
    </div>
    <div className="product-container"> {products?.map((product)=><Product key={product._id} product={product}/>)}</div>
 <Footer/>
    </>
  )
}

export const getServerSideProps=async()=>{
  const query=`*[_type=="product"]`;
  const products=await client.fetch(query)

  const bannerQuery='*[_type=="banner"]'
  const bannerData=await client.fetch(bannerQuery)
return{
  props:{products,bannerData}
}
    
  
}
export default index