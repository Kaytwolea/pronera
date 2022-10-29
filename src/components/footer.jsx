import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer>
        <div class="footer__container">
             <div class="footer__1">
                <a href="index.html" class="footer__logo"><h4>MiltiLing</h4></a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dignissimos reprehenderit exercitatio</p>
             </div>
             <div class="footer__2">
                <h4>Permalinks</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="courses.html">Course</a></li>
                    <li><a href="contact.html">Contacts</a></li>
                </ul>
             </div>
             <div class="footer__3">
                <h4>Privacy</h4>
                <ul>
                    <li><a href="a">Privacy Policies</a></li>
                    <li><a href="a">Terms and Conditions</a></li>
                    <li><a href="a">Refund Policies</a></li>
                </ul>
             </div>
             <div class="footer__4">
                <h4>Contact</h4>
                <div>
                    <p>+2349084525638</p>
                    <p>multiling@gmail.com</p>
                </div>
                <div>
                    <ul class="footer__socials">
                        <li><a href="a">fb</a></li>
                        <li><a href="a">in</a></li>
                        <li><a href="a">tw</a></li>
                        <li><a href="a">ln</a></li>
                    </ul>
                </div>
             </div>
        </div>
        <div class="footer__copyright">
            <small>Copyright &copy, MultiLing</small>
         </div>
      </footer>
        </div>
    );
}

export default Footer;
