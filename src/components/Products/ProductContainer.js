import React from 'react'
import images from '../../images'
import './Product.css'

function ProductContainer({num}) {
  return (
    <div className='images-container'>
    {images.slice(0, num).map((item,index)=>{
      return(
        <div className='product-container' key={index}>
        <img className='products' src={item} alt={"image"+index}  />
        <button>Buy Now</button>
        </div>
      )
    })}
    </div>
  )
}

export default ProductContainer
