import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Location extends Component {
    render() {
        return (
            <div className="section section-padding bg-norepeat bg-bottom light-bg" style={{ backgroundImage: 'url("assets/img/misc/bldg.png")' }}>
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Find Your Paradise</h5>
                        <h2 className="title">By Location</h2>
                    </div>
                    <div className="row masonry">
                        <div className="col-lg-6 masonry-item">
                            <div className="acr-country-item acr-country-item-lg">
                                <div className="acr-country-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/countries/h1.jpg"} alt="country" />
                                </div>
                                <Link to="/listing-details-v2" className="acr-country-content">
                                    <h4>Ravet</h4>
                                    <span>64 Meridien</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 masonry-item">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/h2.jpg"} alt="country" />
                                        </div>
                                        <Link to="/#" className="acr-country-content">
                                            <h6>Ravet</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/h3.jpg"} alt="country" />
                                        </div>
                                        <Link to="/#" className="acr-country-content">
                                            <h6>Baner</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/h4.jpg"} alt="country" />
                                        </div>
                                        <Link to="/#" className="acr-country-content">
                                            <h6>Hinjewadi Phase-1 </h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="acr-country-item">
                                        <div className="acr-country-thumb">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/countries/h5.jpg"} alt="country" />
                                        </div>
                                        <Link to="/#" className="acr-country-content">
                                            <h6>Baner</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;