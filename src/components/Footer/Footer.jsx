import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo1} alt="" />
            <p>Welcome to our platform! We are dedicated to providing exceptional service and quality. Connect with us on social media to stay updated with the latest news and offers.</p>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@yumrocket.com</li>
            </ul>

        </div>
    </div>
    
    <div className="footer-social-icons">
    <a href="https://www.facebook.com" target="_blank">
        <img src={assets.facebook_icon} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com" target="_blank">
        <img src={assets.linkedin_icon} alt="LinkedIn" />
    </a>
    <a href="https://www.twitter.com" target="_blank">
        <img src={assets.twitter_icon} alt="Twitter" />
    </a>
</div>

    <hr />
    <p className='footer-copyright'>Copyright 2024 © yumrocket.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
