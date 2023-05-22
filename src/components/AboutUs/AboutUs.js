import React from 'react'
import './About.css'
import { AiOutlineRight } from "react-icons/ai";


function AboutUs() {
  return (
    <main className='about'>
    <h1>Welcome to Theveganhof</h1>
    <br />
    <br />
    <p>We make delicious smoothie powder with all natural food. Without using any animal product</p>
    <br />
    <p>Why eat animal product. Try our products with all vitamin and minerals that are essential for your health, without harm someone</p>

    <br />
    <div id='images'>
    <img src="https://res.cloudinary.com/djpee6nuc/image/upload/v1684757950/beauty_smoothie_powder_jv2f1l.png" alt="" />
    <AiOutlineRight/>
    <img src="https://res.cloudinary.com/djpee6nuc/image/upload/v1684757880/Artboard_10-1_augogu.png" alt="" />
    <AiOutlineRight/>
    <img src="https://res.cloudinary.com/djpee6nuc/image/upload/v1684758113/beauty_smoothie_ukte3g.jpg" alt="" />
    </div>
    </main>
  )
}

export default AboutUs
