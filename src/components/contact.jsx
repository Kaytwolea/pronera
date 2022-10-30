import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container contact__container'>
        <aside className='contact__aside'>
          <div className='aside-image'>
            <img
              src='../images/logo.png'
              alt=''></img>
          </div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipisicing
            elit. Est, optio?
          </p>
          <ul className='contact-details'>
            <li>
              <i>Tel</i>
              <h5>+2349076032920</h5>
            </li>
            <li>
              <i>Email</i>
              <h5>pronera@gmail.com</h5>
            </li>
            <li>
              <i>Location</i>
              <h5>Nigeria</h5>
            </li>
          </ul>
          <div className='contact-socials'>
            <h2>Social Handles</h2>
            <ul>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'>
                  <FaLinkedinIn className='contact-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  target='_blank'>
                  <FaTwitter className='contact-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'>
                  <FaInstagramSquare className='contact-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://facebook.com'
                  target='_blank'>
                  <FaFacebookF className='contact-icon' />
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <form action=''>
          <div className='form__name'>
            <input
              type='text'
              name='First Name'
              placeholder='First Name'
              required></input>
            <input
              type='text'
              name='Last Name'
              placeholder='Last Name'
              required></input>
          </div>

          <input
            type='email'
            name='Email Address'
            placeholder='Enter Your Email'
            required></input>
          <textarea
            name='Message'
            rows='6'
            placeholder='Enter Message'
            required></textarea>
          <button
            type='submit'
            class='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
