import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Duane Schoultz</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li><span>Develoepr</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/duane-m-schoultz-755bb92bb" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
