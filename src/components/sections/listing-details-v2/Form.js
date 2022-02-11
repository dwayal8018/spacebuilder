import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Form.css'
import emailjs from "emailjs-com";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const mobileValidator = /^[789]\d{9}$/


export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            mobile: '',
            anyQuery:'',
            // password: '',
            // confirmpassword: '',
            usernameError: '',
            emailError: '',
            mobileError: '',
            // passwordError: '',
            // confirmpasswordError: '',
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
            "username",
            "email",
            "mobile",
            "anyQuery",
            // "password",
            // "confirmpassword"
        ]

        emailjs.sendForm(
            'service_2q9zbth',
            'template_bm8rxmy',
            e.target,
            "user_jcZ6galSrCY7TeBIFZunC"
   ).then (res =>{
   console.log (res);
   }).catch(err=> console.log(err));

        let isValid = true

        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid
        })

        if (isValid) this.setState({ isRegistered: true })
        else this.setState({ isRegistered: false })
        console.log(isValid);
        return this.state.isRegistered
    }

    validateField = (name) => {
        let isValid = false
        if (name === "username") isValid = this.validateUsername()
        else if (name === "email") isValid = this.validateEmail()
        else if (name === "mobile") isValid = this.validateMobile()
        else if (name === "anyQuery") isValid = true
        // else if (name === "password") isValid = this.validatePassword()
        // else if (name === "confirmpassword") isValid = this.validateConfirmPassword()

        return isValid

    }

    validateUsername = () => {
        let usernameError = ""
        const value = this.state.username

        if (value.trim() === "") usernameError = "Username is Required*"

        this.setState({
            usernameError
        })

        return usernameError === ""
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

    validateMobile = () => {
        let mobileError = ""
        const value = this.state.mobile

        if (value.trim() === "") mobileError = "Mobile is Required*"
        else if (!mobileValidator.test(value)) mobileError = "Mobile is not Valid"

        this.setState({
            mobileError
        })

        return mobileError === ""
    }

    // validatePassword = () => {
    //     let passwordError = ""
    //     const value = this.state.password

    //     if (value.trim() === "") passwordError = "Password is Required*"
    //     else if (!passwordValidator.test(value)) passwordError = "Password is not Valid"

    //     this.setState({
    //         passwordError
    //     })

    //     return passwordError === ""
    // }

    // validateConfirmPassword = () => {
    //     let confirmpasswordError = ""

    //     if (this.state.password !== this.state.confirmpassword) confirmpasswordError = "Password is not matching"

    //     this.setState({
    //         confirmpasswordError
    //     })

    //     return confirmpasswordError === ""
    // }

    render() {
        const {
            username,
            email,
            mobile,
            anyQuery,
            // password,
            // confirmpassword,
            usernameError,
            emailError,
            mobileError,
            // passwordError,
            // confirmpasswordError,
            isRegistered
        } = this.state
        return (

            <>

                <div className="register">
                    <div className="container">
                        {/* <div className="header">
                            <h1>Register</h1>
                            </div> */}
                        {isRegistered ?
                            (
                                <Redirect to="/listing-details-v2" />

                                // <div className="result">
                                //     <h2>Thanks for Registration</h2>
                                //     <br />
                                //     <h3>Find your details here:</h3>
                                //     <p>Username: {username}</p>
                                //     <p>Email:{email} </p>
                                //     <p>Mobile: {mobile} </p>
                                // </div>
                            ) : (
                                <>

                                    <div className="main">
                                        <div className="form-data text-center">

                                            {/* <div className="text">
                                                <h1>Registration</h1>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corporis corrupti esse maxime unde architecto vero exercitationem labore recusandae tenetur?
                                            </div> */}

                                            <div
                                                className="design">

                                                <form action="" method="" onSubmit={this.handleRegister}>
                                                    <div className="  form ">
                                                        <div className="header">
                                                            {/* <h1>Register</h1> */}
                                                        </div>
                                                        <div className=" form-group style">

                                                            <input type="text"
                                                                name="username" id="username"
                                                                className="input" value={username}
                                                                onChange={this.handleChange} autoComplete="off" placeholder="Name" />

                                                            {usernameError && (
                                                                <div className="errorMsg text-danger ">{usernameError}</div>
                                                            )}
                                                        </div>
                                                        <div className=" form-group style">

                                                            <input type="email"
                                                                name="email" id="email"
                                                                className="input" value={email}
                                                                onChange={this.handleChange} autoComplete="off" placeholder="Email" />

                                                            {emailError && (
                                                                <div className="errorMsg text-danger ">{emailError}</div>
                                                            )}
                                                        </div>
                                                        <div className=" form-group style">

                                                            <input type="tel"
                                                                name="mobile" id="mobile"
                                                                className="input" value={mobile}
                                                                onChange={this.handleChange} autoComplete="off" placeholder="Mobile" />

                                                            {mobileError && (
                                                                <div className="errorMsg text-danger ">{mobileError}</div>
                                                            )}
                                                        </div>
                                                        <div className=" form-group style">

                                                            <input type="textarea"
                                                                name="anyQuery" id="anyQuery"
                                                                className="input" value={anyQuery}
                                                                onChange={this.handleChange} autoComplete="off" placeholder="Any Query" />
                                                        </div>

                                                       
                                                        <div  >
                                                            <button type="submit" value="Register" className="submit text-center" >Submit</button>
                                                        </div>
                                                        {/* <div className="exist">Already have an Account? <a href="/" className="gotologin" id="login">Login</a></div> */}
                                                    </div>

                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            )}
                    </div>
                </div>
            </>
        )
    }
}



// import React, { Component } from 'react'
// import './Register.css'

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// const mobileValidator = /^[789]\d{9}$/

// export default class Reg extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             firstname:"",
//             laststname:"",//showing issue
//             email:"",
//             mobile:"",
//             password:"",
//             confirmPassword:"",
//             nameError:"",
//             emailError:"",
//             mobileError:"",
//             passwordError:"",
//             confirmPasswordError:"",
//             isRegistered:false
//         }

//     }

// keyPressed =(e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
//     console.log(this.state)
// }

// handleBlur=(e)=> {
//     const { name } = e.target

//     this.validateField(name)
//     return
// }

//  handleRegister  =(e) => {
//     e.preventDefault()
//     console.log(this.state);
//     let formFields=[
//         "firstname",
//         "lastname",
//         "email",
//         "mobile",
//         "password",
//         "confirmPassword",

//     ]

//     //Initially assigned true and then checked if any field is not valid
//     //if any field is not valid it returns false

//     let isValid=true;
//     formFields.forEach(fields => {
//         isValid = this.validateFields(fields) && isValid
//     })

//     //then go for form submission
//     // if all fields are valid then return true else return false

//     if(isValid) this.setState({isRegistered :true})
//     else this.setState ({isRegistered : false})

//     return this.state.isRegistered

// }

// validateFields= (name)=> {
//     var  isValid=true

//     if(name === "firstname") isValid=this.validateFirstname()
//     else if(name=== "email") isValid =this.validateEmail()
//     else if(name === "mobile") isValid = this.validateMobile()
//     else if(name === "password") isValid=this.validatePassword()
//     else if(name === "confirmPassword" ) isValid=this.validateConfirmPassword()

//     return isValid

// }

// validateFirstname =() => {
//     let nameError=""
//     const value=this.state.firstname

//     if(value.trim() === "") nameError ="Name is required"

//     this.setState({
//         nameError
//     })

//     return nameError === ""
// }

// validateEmail=() => {
//     let emailError =""
//     const value = this.state.email

//     if(value.trim() ==="") emailError="Email is Required!"
//     else if(!emailValidator.test(value)) emailError = "Email is not Valid!"

//     this.setState({
//         emailError
//     })

//     return emailError === ""
// }

// validateMobile =() => {
//     let mobileError =""
//     const value=this.state.mobile

//     if(value.trim() ==="") mobileError="Mobile Number is Required!"
//     else if(!mobileValidator.test(value)) mobileError ="Mobile number is not valid"

//     this.setState({
//         mobileError
//     })

//     return mobileError === ""
// }

// validatePassword = () => {
//     let passwordError = ""
//     const value =this.state.password

//     if(value.trim() ==="") passwordError="Password is required!"
//     else if(!passwordValidator.test(value)) passwordError ="Password is not valid"

//     this.setState({
//         passwordError
//     })

//     return passwordError ===""
// }

// validateConfirmPassword = () => {
//     let confirmPasswordError = ""

//     if(this.state.password !== this.state.confirmPassword) confirmPasswordError="Password is not Matching!"

//     this.setState({
//         confirmPasswordError
//     })

//     return confirmPasswordError ===""
// }

//     render() {
//         const {
//             firstname,
//             lastname,
//             email,
//             mobile,
//             password,
//            confirmPassword
//           } = this.state
//         return (
//             <div className="container">
//                 <div className="header">Sign Up</div>
//                 <form action="" onSubmit={this.handleRegister}>
//                     <div className="form">
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>First name</legend>
//                                 <input type="text" name="firstname" id="firstname" className="input" value={firstname} onChange={this.keyPressed}  onBlur={this.handleBlur} autoComplete="off" placeholder = "First name*"/>
//                             </fieldset>
//                             {this.state.nameError && (
//                                     <div className="errorMsg">{this.state.nameError}</div>
//                                 )}
//                         </div>
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>Last Name</legend>
//                                 <input type="text" name="lastname" id="lastname" className="input" value={lastname} onChange={this.keyPressed}  onBlur={this.handleBlur} placeholder = "Last Name*"/>
//                             </fieldset>
//                         </div>
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>Email</legend>
//                                 <input type="text" name="email" id="email" className="input" value={email} onChange={this.keyPressed}  onBlur={this.handleBlur} placeholder = "Email*"/>
//                             </fieldset>
//                             {this.state.emailError && (
//                                 <div className="errorMsg">{this.state.emailError}</div>
//                             )}
//                         </div>
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>Mobile</legend>
//                                 <input type="text" name="mobile" id="mobile" className="input" value={mobile} onChange={this.keyPressed}  onBlur={this.handleBlur} placeholder = "Mobile*"/>
//                             </fieldset>
//                             {this.state.mobileError && (
//                                 <div className="errorMsg">{this.state.mobileError}</div>
//                             )}
//                         </div>
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>Password</legend>
//                                 <input type="password" name="password" id="password" className="input" value={password} onChange={this.keyPressed}  onBlur={this.handleBlur} placeholder = "Password*"/>
//                             </fieldset>
//                             {this.state.passwordError && (
//                                 <div className="errorMsg">{this.state.passwordError}</div>
//                             )}
//                         </div>
//                         <div className="form-group">
//                             <fieldset>
//                                 <legend>Confirm Password</legend>
//                                 <input type="password" name="confirmPassword" id="confirmPassword" className="input" value={confirmPassword} onChange={this.keyPressed}  onBlur={this.handleBlur} placeholder = "ConfirmPassword*"/>
//                             </fieldset>
//                             {this.state.confirmPasswordError && (
//                                 <div className="errorMsg">{this.state.confirmPasswordError}</div>
//                             )}
//                         </div>
//                         <div className="submit">
//                             <input type="submit" value="Submit" />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
