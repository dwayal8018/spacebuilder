import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import emailjs from "emailjs-com";


const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidator = /^[789]\d{9}$/

// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm(
//         'service_2q9zbth',
    //   'template_bm8rxmy',
    //   e.target,
    //   "user_jcZ6galSrCY7TeBIFZunC"
//        ).then (res =>{
//        console.log (res);
//        }).catch(err=> console.log(err));
//     }


class Contactform extends Component {

    constructor() {
        super()
        this.state = {
            fname: '',
            phone: '',
            email: '',
            subject: '',
            comment: '',
            nameError: '',
            phoneError: '',
            emailError: '',
            isRegistered: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleRegister = (e) => {
        e.preventDefault()

        console.log(this.state)

        const formFields = [
            "fname",
            "email",
            "phone",
        ]

        emailjs.sendForm(
            'service_2q9zbth',
            'template_bm8rxmy',
            e.target,
            "user_jcZ6galSrCY7TeBIFZunC"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));

        let isValid = true

        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid
        })

        if (isValid) this.setState({ isRegistered: true })
        else this.setState({ isRegistered: false })

        return this.state.isRegistered
    }

    validateField = (name) => {
        let isValid = false
        if (name === "fname") isValid = this.validateName()
        else if (name === "email") isValid = this.validateEmail()
        else if (name === "phone") isValid = this.validatePhone()

        return isValid

    }

    validateName = () => {
        let nameError = ""
        const value = this.state.fname

        if (value.trim() === "") nameError = "Name is Required*"

        this.setState({
            nameError
        })

        return nameError === ""
    }

    validateEmail = () => {
        let emailError = ""
        const value = this.state.email

        if (value.trim() === "") emailError = "Email is Required*"
        else if (!emailValidator.test(value)) emailError = "Email is not Valid"

        this.setState({
            emailError
        })

        return emailError === ""
    }

    validatePhone = () => {
        let phoneError = ""
        const value = this.state.phone

        if (value.trim() === "") phoneError = "Phone Number is Required*"
        else if (!phoneValidator.test(value)) phoneError = "Phone Numberis not Valid"

        this.setState({
            phoneError
        })

        return phoneError === ""
    }


    render() {
        const {
            fname,
            email,
            phone,
            subject,
            comment,
            nameError,
            emailError,
            phoneError,
            isRegistered
        } = this.state

        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-30">
                            <div className="acr-locations bg-bottom bg-norepeat" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}>
                                <img src={process.env.PUBLIC_URL + "/assets/img/contacts.jpg"} alt="" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Pune</h5>
                                            <h5>India</h5>
                                            <div className="acr-location-address">
                                                {/* Changed by Dnyaneshwari Wayal 
                                                address copied from Find Us */}
                                                <p>1, Matai chambers, 63 Erandwane, Near Mhatre Bridge, Pune, Maharashtra, India 411004</p>
                                                <Link to="tel:+123456789">020 2543 2149</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        {/* <div className="acr-location">
                                            <h5>Tbilsi</h5>
                                            <h5>Georgia</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(134) 984 438</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-sm-6">
                                        {/* <div className="acr-location">
                                            <h5>Moscow</h5>
                                            <h5>Russia</h5>
                                            <div className="acr-location-address">
                                                <p>Lawrence Moreno 935-9940 Tortor. Street</p>
                                                <Link to="tel:+123456789">(443) 893 109</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-sm-6">
                                        {/* <div className="acr-location">
                                            <h5>Cairo</h5>
                                            <h5>Egypt</h5>
                                            <div className="acr-location-address">
                                                <p>Aaron Hawkins 5587 Nunc. Avenue</p>
                                                <Link to="tel:+123456789">(009) 338 148</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>



                        {isRegistered ?
                            (
                                <>
                                    <Redirect to="/contact" />
                                    
                                    <div className="text-center"><h2> Sent Successfully!</h2>
                                    </div>
                                    
                                    {/* // <div className="result">
                        <h2>Thanks for Registration</h2>
                        <br />
                        <h3>Find your details here:</h3>
                        <p>Username: {username}</p>
                        <p>Email:{email} </p>
                        <p>Mobile: {mobile} </p>
                    </div> */}
                                </>
                            ) : (


                                <div className="col-lg-6">
                                    <div className="section-title-wrap section-header">
                                        <h5 className="custom-primary">Contact Us</h5>
                                        <h2 className="title">Got Any Questions?</h2>
                                    </div>
                                    <div className="comment-form">
                                        <form onSubmit={this.handleRegister}>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" className="form-control" placeholder="Full Name" name="fname" value={fname}
                                                        onChange={this.handleChange} />
                                                    {nameError && (
                                                        <div className="errorMsg text-danger "  >{nameError}</div>)}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label>Subject</label>
                                                    <input type="text" className="form-control" placeholder="Subject" name="subject" value={subject}
                                                        onChange={this.handleChange} />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={phone}
                                                        onChange={this.handleChange} />

                                                    {phoneError && (
                                                        <div className="errorMsg text-danger " >{phoneError}</div>
                                                    )}
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />

                                                    {emailError && (
                                                        <div className="errorMsg text-danger"  >{emailError}</div>
                                                    )}
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <label>Your Message</label>
                                                    <textarea className="form-control" placeholder="Type your message..." name="comment" value={comment}
                                                        onChange={this.handleChange} rows={7} />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn-custom primary">Send Message</button>
                                        </form>
                                    </div>
                                </div>

                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;