// Changed by Dnyaneshwari -<p>Configurati


import React, { Component } from "react";
import "./Banner.css"


class Banner extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div
              className="subheader subheader-2 bg-cover "
              style={{
                backgroundImage:
                  "url(" +
                  process.env.PUBLIC_URL +
                  "/assets/img/listing-single/main-11.jpg)",
              }}
            >
{/* style={{
                backgroundImage:
                  "url(" +
                  process.env.PUBLIC_URL +
                  "/assets/img/listing-single/main-11.jpg)", */}
              <div className="container">
                <div className="subheader-inner">
                  {/* <span className="listing-badge rent">For Sale</span> */}
                  <h1 className="text-white">
                  64 Meridien
                  </h1>
                  <span className="listing-address">
                    {" "}
                    <i className="fas fa-map-marker-alt" /> 64 MERIDIEN Besides Sentosa Resort, Mumbai Bangalore HW, Ravet, PUNE, Maharashtra 412101{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 m-auto ">
            <h4 className="text-black">
       
            <img src={"assets/img/listing-single/64m.png"} alt="listing" />
            </h4>
           
            <div className="progressbar">
              <ul id="progress">
                <li>
                  <div class="node green"></div>
                  <p>Current status:  Ongoing</p>
                </li>
                <li>
                  <div class="divider green"></div>
                </li>
                <li>
                  <div class="node green"></div>
                  {/* <p>Configuration Available: 2 & 3 BHK Residences</p> */}
                  <p> 2 & 3 BHK Residences</p>
                </li>
                <li>
                  <div class="divider green"></div>
                </li>
                <li>
                  <div class="node green"></div>
                  <p>OC Status: RERA date for OC - Oct 23’ </p>
                </li>
                <li>
                  <div class="divider green"></div>
                </li>
                <li>
                  <div class="node green"></div>
                  <p>Starting 55 Lakhs & 75 Lakhs ( all incl.)</p>
                </li>
              </ul>
            </div>
            <span className="listing-address">
              <i className="fas fa-map-marker-alt" /> 64 MERIDIEN Besides Sentosa Resort, Mumbai Bangalore HW, Ravet, PUNE, Maharashtra 412101{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
