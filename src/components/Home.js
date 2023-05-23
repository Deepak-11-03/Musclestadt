import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import ProductContainer from './Products/ProductContainer'

function Home() {
  return (
    <main>
      <div id='main-container'></div>
      <h1>Explore the Brand's Products</h1>
      <h2>Brand offerings</h2>
      <ProductContainer num={6}/>
      
      <Link to='/products'>More ...</Link>

      <div className='secondary-container'>
      <h3>Veganism is not a "sacrifice." It is a joy</h3>
        <img src="https://res.cloudinary.com/djpee6nuc/image/upload/v1684825361/Artboard_10-1_tbxofd.jpg" alt="smoothie" />
      </div>
    </main>
  )
}

export default Home
