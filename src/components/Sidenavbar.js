// SideNav.js
import React from 'react';
import '../App/CSS/SideNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the faUser icon
import '@fortawesome/fontawesome-free/css/all.css'; // Import the Font Awesome CSS

const SideNav = () => {
  return (
    <div className="side-nav">
      <ul>
        <li className='classcenter'>
          <FontAwesomeIcon icon={faUser} size="1x" /><br/><span>ABOUT</span>
        </li>
        <li className='classcenter'>RESUME</li>
        <li className='classcenter'>PROJECTS</li>
        <li className='classcenter'>BLOG</li>
        <li className='classcenter'>WORKS</li>
        <li className='classcenter'>CONTACT</li>
      </ul>
    </div>
  );
};

export default SideNav;
