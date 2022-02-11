import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { type } from '../../../data/category.json'

class Findhome extends Component {
    render() {
        return (
            <div className="section cta-banner" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/cta/cc1.jpg )" }}>
                <div className="container">
                    <div className="cta cta-3">
                        <div className="row">
                            <div className="col-lg-6 mb-lg-30">
                                <div className="section-title-wrap">
                                    <h5 className="custom-primary">Find a Home</h5>
                                    <h2 className="title">Build Your Family</h2>
                                    <p className="subtitle">
                                    At Space Builders, You have an array of properties to choose from. Looking for the home of your dreams? Or are u in search of the Perfect Office Space for your Business Growth? We have you covered. Discover our properties in the heart of Pune Neighbourhoods.
                                    </p>
                                    <Link to="/listing-map" className="btn-custom">Browse Listings</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 infographics-4">
                                <div className="row">
                                    {type.slice(0, 4).map((item, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="acr-infographic-item">
                                                <i className={"flaticon-" + item.icon + ""} />
                                                <div className="acr-infographic-item-body">
                                                    <h5>{item.title}</h5>
                                                    {/* <p>{item.text}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Findhome;