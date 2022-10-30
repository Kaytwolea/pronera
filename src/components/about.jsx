import React from 'react';
import {DiAndroid} from 'react-icons/di'
import { CgWebsite } from 'react-icons/cg'
import { MdSchool } from 'react-icons/md'
import { GiTechnoHeart } from 'react-icons/gi'

import { Link } from 'react-router-dom';


const About = () => {
    return (
       <div className=''>
           <div className="info">
            <div className="info-left">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi.</h4>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum, repellat similique illo in et asperiores, quae, molestiae exercitationem earum aperiam architecto voluptatem sit beatae necessitatibus facilis? Vero, natus repudiandae?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum ex repellendus repellat asperiores provident, consequatur voluptates corporis harum neque, sit voluptatibus rem. Quas quo dolorum molestiae dolore ad voluptate, totam fuga perferendis eligendi autem! Harum, porro!</p>
               <button className='rounded-3xl bg-blued h-16 w-48 hover:shadow-xl hover:ring-4 hover:ring-blue-400 shadow-blue-400 text-xl text-white mt-8'><a href="#">Consult with Us</a></button>
            </div>
            <div className="lg:my-auto my-0 w-full mt-8 info-right">
                <img src="../images/about.png" alt="" />
            </div>
           </div>
           <div className="offer">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum.</h4>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi, aut temporibus unde sapiente voluptatem!</h2>
            <div className="cards">
                <div className='card'>
                   <CgWebsite className='icon'/>
                    <h5>Web Development</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis deserunt id consequatur. Sunt in distinctio adipisci explicabo ex alias.</p>
                    <button>Lern More</button>
                </div>
                <div className='card'>
                    <DiAndroid className='icon'/>
                    <h5>Mobile App</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis deserunt id consequatur. Sunt in distinctio adipisci explicabo ex alias.</p>
                    <button>Lern More</button>
                </div>
                <div className='card'>
                    <GiTechnoHeart className='icon'/>
                    <h5>IT Consultation</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis deserunt id consequatur. Sunt in distinctio adipisci explicabo ex alias.</p>
                    <button>Lern More</button>
                </div>
                <div className='card'>
                    <MdSchool className='icon'/>
                    <h5>Dev School</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis deserunt id consequatur. Sunt in distinctio adipisci explicabo ex alias.</p>
                    <button>Lern More</button>
                </div>
            </div>
           </div>
       </div>
    );
}

export default About;
