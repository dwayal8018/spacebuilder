import React, { Component, Fragment } from 'react';
import Agentsslider from '../home/Agentsslider';
import Testimonials from '../home/Testimonials';
import About from '../hometwo/About';
import Counter from './Counter';
import  Commitment from './Commitment';
import Video from './Video';
import Whyus from '../homethree/Whyus';
import Corporate from '../../pages/Corporate';
import icon1 from '../../../assets/img/misc/icon1.png'
import icon2 from '../../../assets/img/misc/icon2.png'
import icon3 from '../../../assets/img/misc/icon3.png'
import icon4 from '../../../assets/img/misc/icon4.png'
import icon5 from '../../../assets/img/misc/icon5.png'
import icon6 from '../../../assets/img/misc/icon6.png'
import building from '../../../assets/img/misc/building.jpg'


import "./about.css"
class Content extends Component {
    render() {
        return (
          <Fragment>
            <About />
            <Whyus />
            <Counter />
            <Testimonials />
            <Commitment/>
{/* <div className="row">

            <div className="section pb-0"> */}
              {/* <div className="container"> */}
              
              {/* <div className="row">
                <div className="col-md-4 px-0 bg-about-3">
                  <img className="w-100 h-100" style={{maxHeight:"400px"}} src={building} />
                </div>
                <div className="col-md-8 p-3  about-3">
                  <h2>Space builder commitment</h2>
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
              </div> */}
              {/* </div> */}
              {/* <Agentsslider /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <Video /> */}
          </Fragment>
        );
    }
}

export default Content;