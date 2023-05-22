import React from 'react'
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";



function Contact() {
  return (
    <div className='contact-page'>
        <div>
            <h1>Contact Us</h1>
            <h4>We are Happy to Help You</h4>
        </div>
       <div className='contact-options'>
       <span><GoLocation/> <span>#23 All street ,India</span> </span>
       <span><BsFillTelephoneOutboundFill/><span>+91 987654321</span> </span>
       <span><AiOutlineMail/><span>theveganhof@gmail.com</span></span>

       </div>
    </div>
  )
}

export default Contact
