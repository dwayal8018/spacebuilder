import React, { Component, Fragment } from 'react';
import Contactform from './Contactform';
import Contactinfo from './Contactinfo';
import Email from './Email'

class Content extends Component {
    render() {
        return (
            <Fragment> 
                <Contactinfo/>
                <Contactform/>
                {/* <Email /> */}
            </Fragment>
        );
    }
}

export default Content;