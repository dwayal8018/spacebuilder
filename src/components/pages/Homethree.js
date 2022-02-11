import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headerthree';
// import Header from '../layouts/Header';

import Header from '../layouts/Headertwo';

import Footer from '../layouts/Footerthree';
import Content from '../sections/homethree/Content';

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Spacebuilders Group  | Homepage</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Homethree;