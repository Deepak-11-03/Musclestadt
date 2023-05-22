import React from 'react'
import './Product.css'
import ProductContainer from './ProductContainer'
import images from '../../images'

function Product() {
  return (
    <div className='product-page'>
       <h1>We have Variety of products</h1>
       <br />
       <ProductContainer num={images.length}/>
    </div>
  )
}

export default Product
