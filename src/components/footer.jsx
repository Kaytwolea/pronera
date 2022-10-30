import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer__container'>
          <div className='footer__1'>
            <a
              href='index.html'
              class='footer__logo'>
              <h4>MiltiLing</h4>
            </a>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              dignissimos reprehenderit exercitatio
            </p>
          </div>
          <div className='footer__2'>
            <h4>Permalinks</h4>
            <ul>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='about.html'>About</a>
              </li>
              <li>
                <a href='courses.html'>Team</a>
              </li>
              <li>
                <a href='contact.html'>Contacts</a>
              </li>
            </ul>
          </div>
          <div className='footer__3'>
            <h4>Privacy</h4>
            <ul>
              <li>
                <a href='a'>Privacy Policies</a>
              </li>
              <li>
                <a href='a'>Terms and Conditions</a>
              </li>
              <li>
                <a href='a'>Refund Policies</a>
              </li>
            </ul>
          </div>
          <div className='footer__4'>
            <h4>Contact</h4>
            <div>
              <p>+2349084525638</p>
              <p>pronera@gmail.com</p>
            </div>
            <div>
              <ul className='footer__socials'>
                <li>
                  <a href='#'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__copyright'>
          <small>Copyright &copy, Pronera</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
