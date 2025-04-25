import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>TrendyFits</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-pinterest"></i>
                    </a>
                </div>

                <div className="footer-icons-container">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp"></i>
                    </a>
                </div>

                <div className="footer-icons-container">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                </div>

                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2025 - All Rights Reserved</p>
                </div>
            </div>
            )
}

            export default Footer