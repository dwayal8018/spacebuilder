import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const images = [
    { img: 'assets/img/coming-soon/1.jpg' },
    { img: 'assets/img/coming-soon/2.jpg' },
    { img: 'assets/img/coming-soon/3.jpg' },
];

class Content extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "d-flex slick-dots",
        }
        return (
            <div className="section section-padding infographics-3">
            <div className="container">
                <div className="row">
                <div className="acr-cs-content-head">
                        
                    </div>
                    <div className="acr-cs-content-body">
                        <div className="acr-cs-text">
                            <div className="acr-dots-wrapper">
                                <div className="acr-dots" />
                            </div>
                    </div>
                    <div className="section-title-wrap mr-lg-30"></div>
                            <h3 className="title"><span className="custom-primary">GOOD CONSTRUCTION </span>is a science of combining ENGINEERING, ART and ECONOMICS.</h3>
                            <p className="subtitle">     At Space Builders, we have a team that comes from a variety of 
                            cultural backgrounds and has extensive experience in Engineering Design, Real Estate, Construction, 
                            and Facilities management.</p>
                            <p className="subtitle">The construction company also values relationships with its Customers, Architects, Consultants, Legal & various Govt. agencies, Bankers, Suppliers & Contractors. </p>
                            <p className="subtitle">Our cohesion towards work ethics, honesty, core values of fair dealings, attention to detail, combined with 
                            advanced eco-friendly concepts and timely possessions has confirmed our reputation in the Pune real estate industry as providers
                             of only the finest quality Residential & Commercial Spaces. Our Aim is to develop properties by our motto ‘Homes by design‘ so that our customers get their dream property at the right price.</p>

                    </div>
                        
                    
                </div>
            </div>
        </div>

            // <div className="acr-cs-container">
            //     <div className="acr-cs-content">
            //         <div className="acr-cs-content-head">
            //             <div className="acr-cs-logo">
            //                 <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" /></Link>
            //             </div>
            //         </div>
            //         <div className="acr-cs-content-body">
            //             <div className="acr-cs-text">
            //                 <div className="acr-dots-wrapper">
            //                     <div className="acr-dots" />
            //                 </div>
            //                 <h1 className="title">A Home For All Is <span className="custom-primary">Coming Soon</span> </h1>
            //                 <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            //             </div>
            //             <div className="acr-cs-newsletter">
            //                 <form>
            //                     <input type="text" placeholder="Email Address" className="form-control" name="email-newsletter" />
            //                     <button type="submit" className="btn-custom secondary" name="button">Subscribe</button>
            //                 </form>
            //                 <span>*We will notify you as soon as the website goes live.</span>
            //             </div>
            //         </div>
            //         {/* <div className="acr-cs-content-footer">
            //             <p> Copyright © 2020 <Link to="#">AndroThemes</Link> All Rights Reserved. </p>
            //             <ul className="social-media">
            //                 <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
            //                 <li> <Link to="#"> <i className="fab fa-instagram" /> </Link> </li>
            //                 <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
            //                 <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
            //             </ul>
            //         </div> */}
            //     </div>
                /* <div className="acr-cs-bg">
                    <Slider className="acr-cs-bg-slider" {...settings}>
                        {images.map((item, i) => (
                            <div key={i}>
                                <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} />
                            </div>
                        ))}
                    </Slider>
                </div> */
            // </div>
        );
    }
}

export default Content;