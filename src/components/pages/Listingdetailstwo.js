import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footerthree';
import Content from '../sections/listing-details-v2/Content';


class Listingdetailstwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Spacebuilders Group | Project Details</title>
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

export default Listingdetailstwo;