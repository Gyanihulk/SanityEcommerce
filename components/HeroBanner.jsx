import React from 'react'
import Link from 'next/link'
import { client, urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {
  return (
    <>
 <div className="home" id="home">
        <main>
        <img src={urlFor(heroBanner.image)} alt="banner" className='hero-banner-image'/>
          <h1>Leading </h1>
          <h1>Gallopers </h1>
          <p>Dont Just Dream</p>
          <p>Ride with Us</p>
        </main>
      </div>
    </>
  )
}


export default HeroBanner