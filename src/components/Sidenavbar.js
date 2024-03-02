// SideNav.js
import React,{ useState } from 'react';
import '../App/CSS/SideNav.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFile,faProjectDiagram,faRss,faBriefcase,faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the faUser icon
import '@fortawesome/fontawesome-free/css/all.css'; // Import the Font Awesome CSS

const SideNav = () => {

   // Define your function to be called
   const handleClick = (sectionId) => {
    // hide section
    const hideDivs = document.querySelectorAll('.hide');
    hideDivs.forEach(div => {
      if (div !== null && div.id !== sectionId) {
        div.style.display = 'none';
      }
    });
    // show section
    const elementShow = document.getElementById(sectionId);
    if (elementShow !== null) {
      elementShow.style.display = 'block';
    } else {
      console.log(`Element with ID ${sectionId} does not exist.`);
    }

  };


  return (
    <div className="side-nav">
      <ul>
        <li className='classcenter' onClick={() => handleClick('details')}>
          <FontAwesomeIcon icon={faUser} size="1x" /><br/><span>ABOUT</span>
        </li>
        <li className='classcenter' onClick={() => handleClick('resume')}>
          <FontAwesomeIcon icon={faFile} size="1x" /><br/><span>RESUME</span>
        </li>
        <li className='classcenter' onClick={() => handleClick('projects')}>
        <FontAwesomeIcon icon={faProjectDiagram} size="1x" /><br/><span>PROJECTS</span>

        </li>
        <li className='classcenter' onClick={() => handleClick('blog')}>
        <FontAwesomeIcon icon={faRss} size="1x" /><br/><span>BLOG</span>
        </li>
        <li className='classcenter' onClick={() => handleClick('works')}>
        <FontAwesomeIcon icon={faBriefcase} size="1x" /><br/><span>WORKS</span>
        </li>
        <li className='classcenter' onClick={() => handleClick('contact')}>
        <FontAwesomeIcon icon={faEnvelope} size="1x" /><br/><span>CONTACT</span>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
