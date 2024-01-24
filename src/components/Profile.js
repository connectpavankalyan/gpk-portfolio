import React , { useEffect }from 'react';
import '../App/CSS/Profile.css';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import profilePic from '../assets/images/profile.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs'; // Make sure to import the animejs library


// const profilePic2 = process.env.PUBLIC_URL + '/title.webp';


const Profile = () => {
  
  useEffect(() => {
    const textWrapper = document.querySelector('.scroll-text');
    

    if (textWrapper) {
      
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      const animationTimeline = anime.timeline({ loop: true })
        .add({
          targets: '.scroll-text .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: 'easeOutExpo',
          duration: 950,
          delay: (el, i) => 70 * i,
        })
        .add({
          targets: '.scroll-text',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });

      return () => {
        // Cleanup or stop the animation when the component is unmounted
       animationTimeline.pause();
      };
    }
  }, []); // Empty dependency array ensures that the effect runs only once (on mount)

    return (
      <div className="profile-main">
        <div className="profile">
            <img src={profilePic} className="rounded-circle" height="150" width="150" alt="Profile Pic" />
          </div>
        <div className="profilecontent">
          
            <div className="title">GOLLA PAVAN KALYAN</div>
            <div className="designation scroll-text"><p>Full Stack Developer</p></div>
            <div>
                <Router>
  
                  <a className='links icons-size' href="https://www.linkedin.com/in/pavan-kalyan-golla-38a3071b6" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a className='links icons-size' href="https://m.facebook.com/profile.php?id=100011854548932&ref=content_filter" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className='links icons-size' href="https://twitter.com/GollaPavanKaly2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className='links icons-size' href="https://api.whatsapp.com/send?phone=+918019735720" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a className='links icons-size' href="https://instagram.com/pavan__golla?igshid=1q98onrtyfcm8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}  />
                  </a>
                  <div className="mt-3 border-line-h"></div>
                  <div className='download-btn-div'>
                    <a className='links icons-size download-btn mt-3' href="https://instagram.com/pavan__golla?igshid=1q98onrtyfcm8" target="_blank" rel="noopener noreferrer">
                      <span>Download CV</span> <FontAwesomeIcon icon={faDownload} /> 
                    </a>
                  </div>
                  

                </Router>
            </div>

            {/* <div>
                <h4>
                    <Link to="assets/pdf/cv.pdf" download target="_blank">DOWNLOAD CV&nbsp;&nbsp;</Link>
                </h4>
            </div> */}
        </div>
      </div>
    );
  };
  
  export default Profile;