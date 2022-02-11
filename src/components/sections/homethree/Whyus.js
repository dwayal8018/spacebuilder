// Changed by D 
// Removed s from Our Differences
// Capitaled  S of sales in Enduring Value


import React, { Component } from 'react';

const whyusblock = [
    {
        id: 1,
        icon: "star",
        title: "Enduring Value",
        text: "We deliver every stage of the project, Right from research and acquisition, Marketing and Sales, to Construction and maintenance. We build Long lasting Landmarks."
    },
    {
        id: 2,
        icon: "apartment",
        title: "Track Record",
        text: "Space has delivered more than 20 projects in Pune Metropolitan Region in the past 20 years and has never failed to deliver a project."
    },
    {
        id: 3,
        icon: "sales-agent",
        title: "Quality",
        text: "We design Floor-plans with the Owner- Occupier in mind with emphasis on Spacious layouts, amenities and with high quality fixtures and fittings that people want to live in."
    }
]

class Whyus extends Component {
    render() {
        return (
            <div className="section section-padding infographics-3">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Our Moto</h5>
                        <h2 className="title">Our Difference</h2>
                    </div>
                    <div className="row">
                        {whyusblock.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="acr-infographic-item">
                                    <i className={"flaticon-" + item.icon + ""} />
                                    <div className="acr-infographic-item-body">
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyus;