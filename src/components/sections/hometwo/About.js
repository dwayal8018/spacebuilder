// Changed by Dnyaneshwari -  At line 21  { <div className="acr-dots" /> } is commented.It was acquiring space at right and in mobile view it was scroling.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="section"> 
                <div className="container">
                <div className="row align-items-center">
                        <div className="col-lg-12">
                            <h2 className="title">Corporate Overview</h2>
                            <h3><span className="custom-primary">GOOD CONSTRUCTION </span>is a science of combining ENGINEERING, ART and ECONOMICS.</h3>
                           

                        </div>
                    </div>
                    <div className="row align-items-center">
                        
                        <div className="col-lg-6 mb-lg-30 acr-dots-wrapper acr-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/about-us-2.jpg"} alt="img" />
                            {/* <div className="acr-dots" /> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                {/* <h2 className="title">We provide state of the art real estate service</h2> */}

                                
                                <p className="subtitle">Space Builder Group is a renowned real estate developer established around 20 years back. The vision and dynamism of our founders has seen the company making remarkable strides. In last few years only, we have successfully completed many projects in various locations of Pune like Hinjewadi, Aundh, Baner, Ravet, and many more.</p>


                                {/* <p className="subtitle">We have strong presence in both residential and commercial sectors. Space Builder Group has successfully developed a special focus on creating personalized homes with all modern amenities at a affordable price for our valued customers and so our company has maintained our success graph.</p>
                                <p className="subtitle">We remain committed to our values that have made us what we are today. Commitment to excellence, ethical and transparent dealings including care for employees and customer satisfaction are values that are enshrined in our work culture. Our success has been a result of our customers and we believe that they are our best endorsers. It has been our endeavour to exceed our customers' expectations at all times.</p>
                                <p className="subtitle">Space Builder Group is famous for their Quality & Punctuality. We at Space Builder Group are very keen for the quality construction, timely possession, professionalism and business ethics with transparency in transactions, reliability & honesty. We also values the relationship with our Architects, Structural designers, Consultants, Legal & Financial consultants, various govt. & semi-govt. agencies & departments, Financial Institution & Bankers, Suppliers & Contractors etc.</p> */}
                                {/* <Link to="/listing-map" className="btn-custom">Browse Listings</Link> */}
                                <p className="subtitle">We have strong presence in both residential and commercial sectors. Space Builder Group has successfully developed a special focus on creating personalized homes with all modern amenities at a affordable price for our valued customers and so our company has maintained our success graph.</p>
                                <p className="subtitle">We remain committed to our values that have made us what we are today. Commitment to excellence, ethical and transparent dealings including care for employees and customer satisfaction are values that are enshrined in our work culture. Our success has been a result of our customers and we believe that they are our best endorsers. It has been our endeavour to exceed our customers' expectations at all times.</p>
                                <p className="subtitle">Space Builder Group is famous for their Quality & Punctuality. We at Space Builder Group are very keen for the quality construction, timely possession, professionalism and business ethics with transparency in transactions, reliability & honesty. We also values the relationship with our Architects, Structural designers, Consultants, Legal & Financial consultants, various govt. & semi-govt. agencies & departments, Financial Institution & Bankers, Suppliers & Contractors etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;