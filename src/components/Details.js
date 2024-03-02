/* global $ */

import React , { useEffect } from 'react';
import '../App/CSS/Details.css';
import $ from 'jquery';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import reactJs from '../assets/images/reactjs.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Details = () => {

  
    return (
      <div className="container details-main margintop-16">
		
		<div id='details' className='container-fluid hide'>
		{/* about  */}
			<div className="col-12 margintop-10 header"><span className="first-letter">A</span>bout Me</div>

			<div className="col-12 border-line-h"></div>
						
			<div className='col-12 container-fluid margintop-16'>
				<p><strong className='sub-header'>Hello! I'm Pavan Kalyan Golla</strong>. Full Stack Developer from Hyderabad, India using React, Python, PostgreSQL, Django. I have rich experience in Web Development, also I am good at C and Java. I love to talk with you about our unique.</p>
			</div>

			<div className="row container-fluid">
				<div className="col-lg-6">
					<strong className='sub-header'>DOB</strong>... April 22 2000
				</div>
				<div className="col-lg-6">
					<strong className='sub-header'>RESIDENCE</strong>... Hyderabad
				</div>
			</div>

			<div className="row container-fluid">
				<div className="col-lg-6">
					<strong className='sub-header'>Phone</strong>...<a href="tel:+918019735720" >+918019735720</a>
				</div>
				<div className="col-lg-6">
					<strong className='sub-header'>Address</strong>... Sangareddy,Telangana,INDIA
				</div>
			</div>

			<div className="row container-fluid">
				<div className="col-lg-6">
					<strong className='sub-header'>Email</strong>... <a href="mailto:connectpavankalyan@gmail.com" >connectpavankalyan@gmail.com</a>
				</div>
			</div>

			
			{/* services */}
			<div className="col-12 margintop-16 header">
				<span className="first-letter">M</span>y Services
			</div>
						
			<div className="col-12 border-line-h"></div>

			<div className="row container-fluid margintop-10">
				<div className="col-lg-6" >
					<p><i className="fa fa-television iconbackground" aria-hidden="true"></i></p>
					<strong className='sub-header'>Frot-end</strong>
					<p>
						Modern and mobile-ready website that will help you reach all of your marketing.
					</p>
				</div>
				<div className="col-lg-6 ">
					<p><i className="fa fa-code iconbackground" aria-hidden="true"></i></p>
					<strong className='sub-header'>Back-End</strong>
					<p>UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.</p>
				</div>
			</div>
			
			
			{/* Facts */}
			<div className="col-12 margintop-10 header">
				<span className="first-letter">F</span>un & Facts
			</div>

			<div className="border-line-h"></div>

			<div className="row container-fluid margintop-10">
				<div className="col-lg-3 factscolumn">
				<p><i className="fa fa-star icon faicon" aria-hidden="true"></i></p>
				<p> 2 Awards Won</p>
				</div>
				<div className="col-lg-3 factscolumn">
				<p><i className="fa fa-trophy icon faicon" aria-hidden="true"></i></p>
				<p>6 Gold Medals</p>
				</div>
				<div className="col-lg-3 factscolumn">
				<p><i className="fa fa-film icon faicon" aria-hidden="true"></i></p>
				<p>2 Roles Played</p>
				</div>
				<div className="col-lg-3 factscolumn">
				<p><i className="fa fa-flag icon faicon" aria-hidden="true"></i></p>
				<p>4 States Visited</p>
				</div>
			</div>
		</div>

		{/* Resume */}
        <div id="resume" className='container-fluid hide' style={{'display':'none'}}>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">R</span>esume
			</div>
			<div>
				<div className="row borders4">
					<strong>EDUCATION</strong>
					<div className="border-line-h"></div>
					<div className="borders4">
						<span className="time">2017-2021</span>
						<p className="course">Bachelor of Technology  (Computer Science Engineering)</p>
						<p>RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES, Basar, Telangana, India</p>
					</div>
					<div className="border-line-h"></div>
					<div className="borders4">
						<span className="time">2015-2017</span>
						<p className="course">Pre University Course  (Maths Physics Chemistry)</p>
						<p>RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES, Basar, Telangana, India</p>
					</div>
					<div className="border-line-h"></div>
					<div className="borders4">
						<span className="time">2014-2015</span>
						<p className="course">Secondary School Certificate</p>
						<p>ARUNA HIGH SCHOOL, Huggelli, Sangareddy, Telangana</p>
					</div>
				</div>
			</div>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">S</span>kills
			</div>
			<div className="border-line-h"></div>
			<div className="row borders4">
				<div className="col-lg-6">
					<strong><i className="fa fa-code icon faicon" aria-hidden="true"></i>&nbsp;&nbsp;CODING</strong>
					<div className="border-line-h"></div>
					<p>ReactJs</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>

					<p>SCSS</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>

					<p>HTML/CSS</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>
					<p>Javascript</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>
					<p>PHP/MYSQL</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>
					<p>C</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>
					<p>OOPS</p>
					<i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconrecomplete" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i><i className="fa fa-star iconre" aria-hidden="true"></i>
				</div>
				<div className="col-lg-6">
					<strong><i className="fa fa-list icon faicon" aria-hidden="true"></i>&nbsp;&nbsp;KNOWLEDGE</strong>
					<div className="border-line-h"></div>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;Website hosting</p>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;Responsive and mobile ready</p>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;ReactJs,SCSS,HTML, CSS, Javascript</p>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;Windows and Linux</p>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;MySQL Server and Php</p>
					<p><i className="fa fa-check iconrecomplete"></i>&nbsp;&nbsp;Gitlab</p>
				</div>
			</div>
			<div className="row borders4">
				<div className="col-lg-6" >
					<strong><i className="fa fa-paint-brush icon faicon" aria-hidden="true"></i>&nbsp;&nbsp;FRONT-END</strong>
					<div className="border-line-h"></div>
					<p>ReactJs</p>
					<div className="progress" >
						<div className="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
						</div>
					</div>
					<p>HTML</p>
					<div className="progress" >
						<div className="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
						</div>
					</div>
					<p>Javascript</p>
					<div className="progress" >
						<div className="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<strong><i className="fa fa-flag icon faicon" aria-hidden="true"></i>&nbsp;&nbsp;LANGUAGES</strong>
					<div className="border-line-h"></div>
					<p>English</p>
					<i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i>
					<p>Hindi</p>
					<i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i>
					<p>Telugu</p>
					<i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconrecomplete"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i><i className="fa fa-circle iconre"></i>
				</div>
			</div>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">O</span>bjective
			</div>
			<div className="border-line-h"></div>
			<div className="borders4">
				<p>Like to secure a challenging position in a reputed organisation, which provide an opportunity in developing the organization and in succeeding growth of knowledge, excellence in working</p>
			</div>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">Q</span>UOTES
			</div>
			<div className="row">
				<div className="border-line-h"></div>
				<div className="container" >
				<div id="myCarousel" className="carousel slide">
					<div className="carousel-inner">
						
						<div className=" active item">
							<i className="fa fa-quote-left icon" aria-hidden="true"></i>
							<p>GOLLA PAVAN KALYAN</p>
							<div className="border-line-h"></div>
							<p>I am not one in million. I am one among million.Me-lion.......</p>
						</div> 
						<div className="item"> 
							<i className="fa fa-quote-left icon" aria-hidden="true"></i>
							<p>GOLLA PAVAN KALYAN</p>
							<div className="border-line-h"></div>
							<p>People who loves you the most will warn you.
								Since, they feel that "you are their life.............."</p>
						</div> 
					</div> 
					<a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
					<a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
				</div> 
				</div>
			</div>
		</div>

		{/* Projects */}
		<div className="container-fluid projects hide" id="projects" style={{'display':'none','padding-left':'10px'}}>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">P</span>rojects
			</div>
			<div className="border-line-h"></div>
			<div className="col-12 margintop-10 header">SUMMER INTERNSHIPS </div>
			<div className="right-side" data-toggle="modal" data-target="#myModal">
				<h4><strong>ilead Education Portal</strong>	</h4>
				<span className="time">June 2020-August 2020</span>
				<p>This is a Web Application which provides online certificate courses in careerpaths(Iot, Data science, Machine Learnig).This project is being used by many online learners.</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">Reactjs</li>
					<li className="ul_li">SCSS</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
		    <p className="projectlink"><a href="https://ilead.appletoninnovations.com/">https://ilead.appletoninnovations.com/</a></p>
		    <div className="modal fade" id="myModal" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Project Title</h4>
						</div>
						<div className="modal-body">
							<img src="assets/projects/6.webp" width="100%" height="200px"/>
							<span className="time">June 2020-August 2020</span>
							<p>This is a Web Application which provides online certificate courses in careerpaths(Iot, Data science, Ml).This project is being used by many online learners.</p>
							<p><strong>Step 1:</strong> User needs to be signed up</p>
							<p><strong>Step 2:</strong> User has to login to purchase Learning Paths</p>
							<p><strong>Step 3:</strong> User needs to complete the courses in Learning path to get certified in that Learning Path</p>
							<p>User is havig 500 projects among which he can select maximum of 2 projects and get access to those projects</p>
							<h6>USED STACKS</h6>
							<ul>
								<li className="ul_li">Reactjs</li>
								<li className="ul_li">SCSS</li>
								<li className="ul_li">bootstrap</li>
								<li className="ul_li">CSS</li>
							</ul>
							<p className="projectlink"><a href="https://ilead.appletoninnovations.com/">https://ilead.appletoninnovations.com/</a></p>
						</div>
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
		    <div className="right-side" data-toggle="modal" data-target="#myModal2">
				<h4><strong> Particle Swarm Optimization on Benchmark Functions</strong></h4>
				<span className="time">June 2020-August 2020</span>
				<p>Swarm Intelligence is a branch of Artificial Intelligence where we observe nature and try to learn how different biological phenomena can be imitated in a computer system to optimize the scheduling algorithms. In PSO, the focus is on a group of birds. This group of birds is referred to as a "swarm". Now, all the birds are hungry and are searching for food. Now, the birds don’t know where the food particle is hidden or located. In such a scenario, how the algorithm to find the food particle should be designed.</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">Python</li>
				</ul>
				<p style={{'text-align': 'right'}}>
					<a href="#"></a>
				</p>
		    </div>
			<div className="border-line-h"></div>
			<div className="modal fade" id="myModal2" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Particle Swarm Optimization on Benchmark Functions</strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/4.webp" width="100%" height="250px"/><br/>
						<span className="time">June 2020-August 2020</span>
						<p>Swarm Intelligence is a branch of Artificial Intelligence where we observe nature and try to learn how different biological phenomena can be imitated in a computer system to optimize the scheduling algorithms. In PSO, the focus is on a group of birds. This group of birds is referred to as a "swarm". Now, all the birds are hungry and are searching for food. Now, the birds don’t know where the food particle is hidden or located. In such a scenario, how the algorithm to find the food particle should be designed.</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">Python</li>	
						</ul>
					</div>
					</div>
				</div>
			</div>
			<div className="right-side" data-toggle="modal" data-target="#myModal3">
			<h4><strong> Upladder</strong></h4>
			<span className="time">july 2020-Sept 2020</span>
				<p>Upladder is a Web Application which accepts data and generates resume.This application is being used by many jobs seekers.</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">Reactjs</li>
					<li className="ul_li">SCSS</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
		    <p className="projectlink"><a href="https://createresumeforme.web.app/">https://createresumeforme.web.app/</a></p>
			<div className="modal fade" id="myModal3" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Upladder </strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/1.webp" width="200" height="200px"/><br/>
						<span className="time">july 2020-Sept 2020</span>
						<p>Upladder is a Web Application which accepts data and generates resume.This application is being used by many jobs seekers.</p>
						<p><strong>Step 1:</strong> User needs to sign up</p>
						<p><strong>Step 2:</strong> User needs to sign in and select resume template </p>
						<p><strong>Step 3:</strong> Provide the details, preview resume and dowload the resume</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">Reactjs</li>
							<li className="ul_li">SCSS</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">CSS</li>
						</ul>
						<p className="projectlink"><a href="https://createresumeforme.web.app/">https://createresumeforme.web.app/</a></p>
					</div>
					</div>
				</div>
			</div>
			<div className="main">B.Tech </div>
			<div className="right-side" data-toggle="modal" data-target="#myModal4">
				<h4><strong> Weekdayidentifier</strong></h4>
				<span className="time">20 August 2020- 10 Sept 2020</span>
				<p>Developed a website which accept date and prints a week day.</p>
				<p>This will help you to find the days of different dates which might be useful for your studies and exams!</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">HTML</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">Javascript</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
		    <p className="projectlink"><a href="http://wdi.rf.gd/">http//:wdi.rf.gd</a></p>
			<div className="modal fade" id="myModal4" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Weekdatidentifier </strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/7.webp" width="200" height="200px"/><br/>
						<span className="time">20 August 2020- 10 Sept 2020</span>
						<p>Developed a website which accept date and prints a week day.</p>
						<p>This will help you to find the days of different dates which might be useful for your studies and exams!</p>
						<p><strong>Step 1:</strong> User needs to enter the date to which he wants to find the day</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">HTML</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">Javascript</li>
							<li className="ul_li">CSS</li>
						</ul>
						<p className="projectlink"><a href="http://wdi.rf.gd/">http//:wdi.rf.gd</a></p>
					</div>
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="right-side" data-toggle="modal" data-target="#myModalapp1">
				<h4><strong>Upladder-Applanding Page</strong></h4>
				<span className="time">Aug 2019-Sept 2020</span>
				<p>Developed an application which talks about Upladder(Aplication which accepts user details and generates resume)</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">ReactJs</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
		    <p className="projectlink"><a href="https://upladder-createresumewebapp.web.app/">https://upladder-createresumewebapp.web.app/</a></p>
			<div className="modal fade" id="myModalapp1" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Upladder </strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/1.webp" width="200" height="200px"/><br/>
						<span className="time">Aug 2019-Sept 2020</span>
						<p>Developed an application which talks about Upladder(Aplication which accepts user details and generates resume)</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">ReactJs</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">CSS</li>
						</ul>
						<p className="projectlink"><a href="https://upladder-createresumewebapp.web.app/">https://upladder-createresumewebapp.web.app/</a></p>
					</div>
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="right-side" data-toggle="modal" data-target="#myModalapp2">
				<h4><strong>Pro Statussaver</strong></h4>
				<span className="time">Aug 2019-Sept 2020</span>
				<p>Developed an application which talks about Khushiteluguapp -Pro Statussaver(An entertainment app where you can view ,share and upload short videos, photos)</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">ReacJs</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
		    <p className="projectlink"><a href="https://prostatusaver-allinone.web.app/">https://prostatusaver-allinone.web.app/</a></p>
			<div className="modal fade" id="myModalapp2" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Pro Statussaver</strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/3.webp" width="200" height="200px"/><br/>
						<span className="time">Aug 2019-Sept 2020</span>
						<p>Developed an application which talks about Khushiteluguapp -Pro Statussaver(An entertainment app where you can view ,share and upload short videos, photos)</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">ReacJs</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">CSS</li>
						</ul>
						<p className="projectlink"><a href="https://prostatusaver-allinone.web.app/">https://prostatusaver-allinone.web.app/</a></p>
					</div>
					{/* <!--div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					</div--> */}
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="right-side" data-toggle="modal" data-target="#myModalapp3">
				<h4><strong>AbrakadabrA</strong></h4>
				<span className="time">Aug 2019-Sept 2020</span>
				<p>Developed an application which talks about AbrakadabrA(Gaming platform-Find 5 differences of given images)</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">ReacJs</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">CSS</li>
				</ul>
			</div>
			<p className="projectlink"><a href="https://find5differences.web.app/">https://find5differences.web.app/</a></p>
			<div className="modal fade" id="myModalapp3" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Pro Statussaver</strong></h4>
					</div>
					<div className="modal-body">
						<img src="assets/projects/5.webp" width="200" height="200px"/><br/>
						<span className="time">Aug 2019-Sept 2020</span>
						<p>Developed an application which talks about AbrakadabrA(Gaming platform-Find 5 differences of given images)</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">ReacJs</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">CSS</li>
						</ul>
						<p className="projectlink"><a href="https://find5differences.web.app/">https://find5differences.web.app/</a></p>
					</div>
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="right-side" data-toggle="modal" data-target="#myModal5">
				<h4><strong>Managing Sports data in University (RGUKT)</strong></h4>
				<span className="time">Sept 2019-Jan 2020</span>
				<p>Developed an application which manages the data related to University sports events(Rajiv Gandhi University of Knowledge technologies, Basar).As a part of academic project</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">HTML</li>
					<li className="ul_li">bootstrap</li>
					<li className="ul_li">jQuery</li>
					<li className="ul_li">CSS</li>
					<li className="ul_li">Semantic Ui</li>
					<li className="ul_li">Php</li>
				</ul>
			</div>
			<div className="modal fade" id="myModal5" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Managing Sports data in University (RGUKT) </strong></h4>
					</div>
					<div className="modal-body">
						<span className="time">Sept 2019-Jan 2020</span>
						<p>Developed an application which manages the data related to University sports events(Rajiv Gandhi University of Knowledge technologies, Basar).As a part of academic project</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">HTML</li>
							<li className="ul_li">bootstrap</li>
							<li className="ul_li">jQuery</li>
							<li className="ul_li">CSS</li>
							<li className="ul_li">Semantic Ui</li>
							<li className="ul_li">Php</li>
						</ul>
					</div>
					</div>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="right-side" data-toggle="modal" data-target="#myModal6">
				<h4><strong>Praja - Seva 	</strong></h4>
				<span className="time">Dec 2018-Jan 2019</span>
				<p>Developed an application as subject academic project. Which provides Income, caste and residence certificates after accepting the required details.</p>
				<h6>USED STACKS</h6>
				<ul>
					<li className="ul_li">OOPS</li>
				</ul>
			</div>
			<div className="modal fade" id="myModal6" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title"><strong> Praja - Seva</strong></h4>
					</div>
					<div className="modal-body">
						<span className="time">Dec 2018-Jan 2019</span>
						<p>Developed an application as subject academic project. Which provides Income, caste and residence certificates after accepting the required details.</p>
						<h6>USED STACKS</h6>
						<ul>
							<li className="ul_li">OOPS</li>
						</ul>
					</div>
					</div>
				</div>
			</div>
		</div>

		{/* blog */}
		<div className="container-fluid blog hide" id="blog" style={{'display':'none'}}>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">L</span>atest posts
			</div>
			<div className="border-line-h"></div><br/>
			<div className="row" style={{"box-shadow": "0 1px 4px rgba(0,0,0,.14);"}}>
				<div className="col-lg-6">
					<img src={reactJs} width="100%" height="230" />
				</div>
				<div className="col-lg-6" style={{"padding": "20px;"}}>
					<q>Learning ReactJs</q>
					<p>Nothing in this world can stop learning, if we have the eagerness of learning.</p>
					<p>HAPPY LEARNING...</p>
				</div>
			</div>
		</div>

		{/* works */}
		<div className="container-fluid works myworks hide" id="works" style={{'display':'none'}}>
			<div className="col-12 margintop-10 header"><span className="first-letter">W</span>orks</div>
			<div className="border-line-h"></div>
			<ul>
				<li className="ul_li" onclick="All()">All</li>
				<li className="ul_li" onclick="Paintings()">Painting</li>
				<li className="ul_li" onclick="Drawings()">Drawing</li>
				<li className="ul_li" onclick="Photography()">Photography</li>
				<li className="ul_li" onclick="Certificates()">certificates</li>
			</ul>
			<div className="border-line-h"></div>
			
			
			<div className="row">
				{/* paintings */}
				<div className="col-lg-6 paintings workscolumn"  id="paintings" data-toggle="modal" data-target="#paint">
					<div>
						<img src="assets/paint/3.webp" className="worksimage" />
					</div>
				</div>
				<div className="modal fade" id="paint" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title"><strong> Paintings </strong></h4>
						</div>
						<div className="modal-body">
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/5.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>573x784</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/1.webp" width="100%" height="100%" />
								<p>573x784</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/3.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>681x851</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/4.webp" width="100%" height="100%" />
								<p>681x851</p>
							</div>
							</div>
							
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/6.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/7.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/8.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/9.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/10.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/11.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/12.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/13.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/14.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/15.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/paint/16.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/paint/17.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							
							</div>
						</div>
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
						
					</div>
				</div>

				{/* drawings */}
				<div className="col-lg-6 drawings workscolumn" id="drawing" data-toggle="modal" data-target="#draw">
					<div>
						<img src="assets/art/6.webp" className="worksimage" />
					</div>
				</div>
				<div className="modal fade" id="draw" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title"><strong> Arts </strong></h4>
						</div>
						<div className="modal-body">
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/2.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1440x2560</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/5.webp" width="100%" height="100%" />
								<p>1440x2560</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/3.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>507x922</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/7.webp" width="100%" height="100%" />
								<p>507x922</p>
							</div>
							</div>
							
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/10.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/11.webp" width="100%" height="100%" />
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/12.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/13.webp" width="100%" height="100%" />
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/14.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/15.webp" width="100%" height="100%" />
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/20.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/21.webp" width="100%" height="100%" />
								<p>3456x4608</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/18.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>2906x3942</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/22.webp" width="100%" height="100%" />
								<p>2891x4162</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/17.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3165x4023</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/19.webp" width="100%" height="100%" />
								<p>3381x3711</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/16.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3031x2768</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/23.webp" width="100%" height="100%" />
								<p>3979x2850</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/art/24.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/art/25.webp" width="100%" height="100%" />
								<p>3456x4608</p>
							</div>
							</div>
						</div>
						
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

						</div>
						
					</div>
				</div>
			</div>
			
			<div className="row">
				
				{/* photography */}
				<div className="col-lg-6 photography workscolumn"  id="photography" data-toggle="modal" data-target="#photo">
					<div>
						<img src="assets/clicks/14.webp" className="worksimage" />
					</div>
				</div>
				<div className="modal fade" id="photo" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title"><strong> Photography </strong></h4>
						</div>
						<div className="modal-body">
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/1.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>2128x2600</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/2.webp" width="100%" height="100%" />
								<p>2128x2600</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/4.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>4064x2128</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/18.webp" width="100%" height="100%" />
								<p>4064x2128</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/5.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x3456</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/8.webp" width="100%" height="100%" />
								<p>3456x3456</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/12.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>4608x2128</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/13.webp" width="100%" height="100%" />
								<p>4608x2128</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/6.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>2128x2660</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/7.webp" width="100%" height="100%" />
								<p>2128x2660</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/11.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x3456</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/10.webp" width="100%" height="100%" />
								<p>3456x3456</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/13.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>4608x2128</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/14.webp" width="100%" height="100%" />
								<p>4608x2128</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/clicks/17.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>3456x4608</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/clicks/3.webp" width="100%" height="100%" />
								<p>1890x2362</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-12">
								<img src="assets/clicks/16.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>2128x4608</p>
							</div>
							
							</div>
						</div>
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
						
					</div>
				</div>

				{/* certificates */}
				<div className="col-lg-6 certificates workscolumn" id="certificates" data-toggle="modal" data-target="#certi">
					<div>
						<img src="assets/cert/7.webp" className="worksimage" />
					</div>
				</div>
				<div className="modal fade" id="certi" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title"><strong> Certificates </strong></h4>
						</div>
						<div className="modal-body">
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/cert/1.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1754x1238</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/cert/2.webp" width="100%" height="100%" />
								<p>1754x1238</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/cert/3.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1754x1238</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/cert/4.webp" width="100%" height="100%" />
								<p>1754x1238</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/cert/5.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1754x1238</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/cert/6.webp" width="100%" height="100%" />
								<p>1754x1238</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/cert/8.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1685x2340</p>
							</div>
							<div className="col-lg-6">
								<img src="assets/cert/9.webp" width="100%" height="100%" />
								<p>1685x2340</p>
							</div>
							</div>
							<div className="row">
							<div className="col-lg-6">
								<img src="assets/cert/7.webp" width="100%" height="100%" />
								<div className="border-line-h"></div>
								<p>1754x1238</p>
							</div>
							
							</div>
						</div>
				
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						
						</div>
						
					</div>
				</div>

			</div>
		</div>

		{/* contact */}
		<div className="container-fluid contact hide" id="contact" style={{'display':'none'}}>
			<div className="col-12 margintop-10 header"><span className="first-letter">G</span>et in Touch</div>
			<div className="border-line-h"></div>
			<div className="row">
				<div className="col-lg-6" >
					<strong>ADDRESS</strong>...H.No:4-129/2,Bilalpur(v), Kohir(mdl),Sangareddy(dist), Hyderabad, Telangana, India
				</div>
				<div className="col-lg-6">
					<strong>Phone</strong>...<a href="tel:+918019735720" style={{"color":"gray"}}>+91 8019735720</a>
				</div>
			</div>
			<div className="border-line-h"></div>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">T</span>ext me...
			</div>
			<div className="row mt-2 container-fluid">
				<div className="col-lg-6 factscolumn" style={{"text-align": "left"}}>
					<a href="https://wa.me/+918019735720" target="_blank"><p>
					<FontAwesomeIcon icon={faWhatsapp} /> +91 8019735720</p></a>
				</div>
				<div className="col-lg-6 factscolumn" style={{"text-align":"left"}}>
					<a href="mailto:connectpavankalyan@gmail.com" target="_blank"><p>
					<FontAwesomeIcon icon={faEnvelope} /> connectpavankalyan@gmail.com</p></a>
				</div>
			</div>
			<div className="col-12 margintop-10 header">
				<span className="first-letter">F</span>ollow me...
			</div>
			<div className="row mt-2 container-fluid">
				<div className="col-lg-6 factscolumn" style={{"text-align":"left"}}>
					<a href="https://www.linkedin.com/in/pavan-kalyan-golla-38a3071b6" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} /> PAVAN KALYAN GOLLA</a>
				</div>
				<div className="col-lg-6 factscolumn" style={{"text-align":"left"}}>
					<a href="https://m.facebook.com/profile.php?id=100011854548932&ref=content_filter" target="_blank">
					<FontAwesomeIcon icon={faFacebook} /> Pavan Yadav Golla</a>
				</div>
			</div>
			<div className="row container-fluid">
				<div className="col-lg-6 factscolumn" style={{"text-align":"left"}}>
					<a href="https://twitter.com/GollaPavanKaly2" target="_blank">
					<FontAwesomeIcon icon={faTwitter} /> Pavan Yadav Golla</a>
				</div>
				<div className="col-lg-6 factscolumn" style={{"text-align":"left"}}>
					<a href="https://www.instagram.com/pavan_._._yadav/" target="_blank">
					<FontAwesomeIcon icon={faInstagram} /> pavan_._._yadav</a>
				</div>
			</div>
		</div>

	</div>
    );
  };
  
  export default Details;