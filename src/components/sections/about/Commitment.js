// Changed by Dnyaneshwari -<div className="container"> </div> added

import React, { Component } from 'react';
import icon1 from '../../../assets/img/misc/icon1.png'
import icon2 from '../../../assets/img/misc/icon2.png'
import icon3 from '../../../assets/img/misc/icon3.png'
import icon4 from '../../../assets/img/misc/icon4.png'
import icon5 from '../../../assets/img/misc/icon5.png'
import icon6 from '../../../assets/img/misc/icon6.png'

const counter = [
    {
        icon: "garage",
        value: 24934,
        title: "Listings"
    },
    {
        icon: "sales-agent",
        value: 65317,
        title: "Agents"
    },
    {
        icon: "company",
        value: 4658,
        title: "Agencies"
    },
    {
        icon: "sold",
        value: 67335,
        title: "Listings Sold"
    }
]

class Commitment extends Component {
    render() {
        return (
            <div className="section section-padding">
             {/* <div className="container"> */}
            <div className="row">

                {/* Need to see here */}
                <div className="col-md-4 col-12 bg-about-3">
                    {/* <img className="w-100 h-100" style={{maxHeight:"400px"}} src="assets/img/misc/building.jpg" /> */}
                    <img className="w-100  h-100" style={{maxHeight:"400px"}} src="assets/img/misc/abt.jpg" />
                </div>

                <div className="col-md-8 col-12  about-3">
                    
                    {/* changed by Dnyaneshwari > Space Builder commitment -> The Space Commitment */}
                    <h2 className="text-center"> The Space Commitment</h2>

                    <div className="row">
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon1} />
                            <h6>On Time Delivery</h6>
                        </div>
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon2} />
                            <h6>Top Notch construction quality</h6>
                        </div>
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon3} />
                            <h6>1000+ satisfied customer</h6>
                        </div>
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon4} />
                            <h6>Top Class Partners</h6>
                        </div>
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon5} />
                            <h6>Well qualified support team</h6>
                        </div>
                        <div className="col-md-4 col-sm-6  px-3  text-center">
                            <img src={icon6} />
                            <h6>Transparency</h6>
                        </div>
                    </div>



                </div>

            </div>
          {/* </div> */}
          </div>
        );
    }
}

export default Commitment;