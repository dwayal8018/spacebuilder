import React, { Component } from 'react';

const counter = [
    {
        icon: "garage",
        value: "25+",
        title: "Years"
    },
    {
        icon: "sales-agent",
        value: "20+",
        title: "Projects"
    },
    {
        icon: "company",
        value: "5 Lakh",
        title: "SQ.FT. Ongoing"
    },
    {
        icon: "sold",
        value: "7 Lakh",
        title: "SQ.FT. Comming soon"
    }
]

class Counter extends Component {
    render() {
        return (
            <div className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/counter.jpg)" }}>
                <div className="container">
                    <div className="row">
                        {counter.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="acr-infographic-item">
                                    <i className={"flaticon-" + item.icon + ""} />
                                    {/* <h4>{new Intl.NumberFormat().format((item.value))}</h4> */}
                                   <h4> <p>{item.value}</p></h4>
                                  
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;