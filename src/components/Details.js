import React , { useEffect }from 'react';
import '../App/CSS/Details.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';



const Details = () => {
  
    return (
      <div className="container details-main margintop-16">
       
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
    
    );
  };
  
  export default Details;