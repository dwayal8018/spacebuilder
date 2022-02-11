// Changed by D 
// Capitaled  g of gated in Paragraph


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aboutus extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 acr-single-img-wrapper mb-lg-30">
                            <div className="section-title-wrap section-header acr-dots-wrapper">
                                <h2 className="title">Our Projects</h2>
                                <div className="acr-dots" />
                            </div>
                            <img src={process.env.PUBLIC_URL + "/assets/img/listings-list/66.jpg"} alt="listing" />
                        </div>
                        <div className="col-lg-6 acr-single-img-wrapper">
                            <div className="section-title-wrap">
                                <img src={process.env.PUBLIC_URL + "/assets/img/about/01.jpg"} alt="listing" />
                                <p className="subtitle"> Since its inception in 1995, Space Builders has aimed at Redefining Luxury across mid - segment housing by inventing, discovering & delivering contemporary lifestyle solutions. 

Our design ethos and commitment towards magnificence is reflected in the projects we have handed over. At present, we are developing Gated communities in the fastest growing neighbourhoods, Luxury homes, Standalone landmarks & Commercial spaces. Our Projects are spread over PMR (Pune Metropolitan Region) </p>
                               
                                <Link to="/projects" className="btn-link custom-primary">Browse Listings <i className="fas fa-arrow-right" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;