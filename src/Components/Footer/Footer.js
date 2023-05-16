import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css';
const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'>
            <img src={logo} alt='logo'></img>
        </div>

        {/* copyright */}
        <div className='footer-cpyright'>
            <p>©2022 !-Saurabh Pandey. All Right Reserved</p>
        </div>

        {/* Social */}
        <ul className='footer-socail-media'>
            <li>
                <a href="https://www.facebook.com/login/">
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/">
                    <i className='fa-brands fa-twitter'></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/">
                    <i className='fa-brands fa-youtube'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
