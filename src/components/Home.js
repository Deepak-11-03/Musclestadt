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
        <img src="https://uc222dcc334d62c80fd55aa77760.previews.dropboxusercontent.com/p/thumb/AB4jj9FqA7uGs39V3w-CnzEa76nod1jV81cRS1lRcQRAPcgFGYgmvd8OUsp86vSobygVeYK1jkSb64w1BtFK2yf_sjhF9wemlK_GniRFUlwNPf6TEWJe0yj6fkX-2lY06bZXI0EpeDWtTW6_jdc2N5cGrPFUU7rAEhV1nNPu4smxaiDFdU2GZ2UhljbYuO7PmOZDPzHpZC8FBbzhpLVTZ0h6syFH89JAQB2G9g1b-59FvrcDutvD-6L73gbrhcdP762ghL-vmacEID831-r3zNMDFC63vywHqN-F4PsMJS4IjWIbMFTtZNzofT-xR_89ZRLd5ncuMtnP54RU3LFee9bQs9a3G80mDFvtnGkQyQyEOuBRNrQbJTHM9V0qYJZR7zP51bHeJJxFnqVn7cdrH8mL/p.png?size=512x512&size_mode=1" alt="" />
      </div>
    </main>
  )
}

export default Home
