import React, { Component, Fragment } from 'react';
import Agentsslider from '../home/Agentsslider';
import Testimonials from '../home/Testimonials';
import Aboutus from './Aboutus';
import Banner from './Banner2';
import Banner1 from './Banner1';
import Banner3 from './Banner3';
import Clients from './Clients';
import Findhome from './Findhome';
import Location from './Location';
import Recentlisting from './Recentlisting';
import Whyus from './Whyus';

class Content extends Component {
    render() {
        return (
            <Fragment>
                {/* <Banner /> */}
                {/* <Banner1 /> */}
                
                <Banner3 />
                
                <Whyus />
                <Aboutus />
                <Location />
                <Recentlisting />
                <Findhome />
                <div className="section pb-0">
                    <Agentsslider />
                </div>
                <div style={{marginTop:'-80px'}}>
                    <Testimonials />
                </div>
                {/* <div className="section pt-0">
                    <Clients/>
                </div> */}
            </Fragment>
        );
    }
}

export default Content;