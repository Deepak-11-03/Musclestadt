import React from 'react'
import './Footer.css'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='page-links'>
        <h4>
            Usefull Links
        </h4>
        <ul>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </div>
      <div className='social-links'>
        <h5>Connect With us :</h5>
        <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillLinkedin/>
        <AiFillTwitterSquare/>
        
      </div>
    </footer>
  )
}

export default Footer
