// Changed by Dnyaneshwari -
// At line 552 col-12 added is added
// At line 1153 <ModalEnquiry /> added

import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Accordion, Card } from 'react-bootstrap';
import listing from '../../../data/listings.json';
import Calculator from '../../layouts/Calculator';
import $ from 'jquery';
import 'magnific-popup'
import classNames from 'classnames';
import Slider from 'react-slick';
import Listingmap from "./Listingmap"

import ModalEnquiry from './ModalEnquiry'
import Form from './Form'
import emailjs from "emailjs-com";
import ContactUsForm from './ContactUsForm'


const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidator = /^[789]\d{9}$/

const gallerytip = (
  <Tooltip>
    Gallery
  </Tooltip>
);
const bedstip = (
  <Tooltip>
    Beds
  </Tooltip>
);
const bathstip = (
  <Tooltip>
    Bathrooms
  </Tooltip>
);
const areatip = (
  <Tooltip>
    Square Feet
  </Tooltip>
);

const mainslider = [
  {
    img: "assets/img/listing-single/11.jpg",
    theader: "Designer Elevation & Entrance",
    text: "Experience  3 Tier Secure Community Living.",
  },
  {

    img: "assets/img/listing-single/22.jpg",
    theader: "Swimming Pool",
    text: "Rejuvenate your senses with an outdoor pool & Designer Multipurpose Clubhouse. ",
  },
  {
    img: "assets/img/listing-single/33.jpg",
    theader: "Recreation Zone",
    text: "Ample open space for Children Play area  & Party events",
  },
  {
    img: "assets/img/listing-single/44.jpg",
    theader: "Rooftop Terrace",
    text: "15000 Sq.ft of expansive views with Cross-fit area, Meditation Deck & Senior Citizen Sit-outs  designed for the select few. ",
  },
  {
    img: "assets/img/listing-single/55.jpg",
    theader: "Excellent Connectivity",
    text: "Lush Green surroundings  with the conveniences of Shops, Hospitals & Entertainment.",
  },
];
const mainslider2 = [
  {
    img: "assets/img/listing-single/55.jpg",
    text: "ons service images like that5",
  },
  {
    img: "assets/img/listing-single/44.jpg",
    text: "ons service images like that4",
  },
  {
    img: "assets/img/listing-single/33.jpg",
    text: "ons service images like that3",
  },
  {
    img: "assets/img/listing-single/22.jpg",
    text: "ons service images like that2",
  },
  {
    img: "assets/img/listing-single/11.jpg",
    text: "ons service images like that1",
  },
];
const mainslider3 = [
  {
    img: "assets/img/listing-single/c1.jpg",
    text: "ons service images like that5",
  },
  {
    img: "assets/img/listing-single/c2.jpg",
    text: "ons service images like that4",
  },
  {
    img: "assets/img/listing-single/c3.jpg",
    text: "ons service images like that3",
  },
  {
    img: "assets/img/listing-single/c4.jpg",
    text: "ons service images like that2",
  },
];
const docslider3 = [
  {
    img: "assets/img/listing-single/rera.jpg",
    text: "Rera certificate",
  },
  {
    img: "assets/img/listing-single/rera2.jpg",
    text: "Documents",
  },
];
const configuration = [
  {
    img: "assets/img/listing-single/2bhk-rubby-2d.jpg",
    text: "2BHK RUBY",
    text1: "Carpet : 682 Sq.ft",

  },
  {
    img: "assets/img/listing-single/2bhk-rubby-3d.jpg",
    text: "2BHK RUBY",
    text1: "Carpet : 682 Sq.ft",
  },
];
const configuration1 = [
  {
    img: "assets/img/listing-single/2bhk-emerald-2d.jpg",
    text: "2BHK EMERALD",
    text1: "Carpet : 794 Sq.ft",

  },
  {
    img: "assets/img/listing-single/2bhk-emerald-3d.jpg",
    text: "2BHK EMERALD",
    text1: "Carpet : 794 Sq.ft",
  },
];
const configuration2 = [
  {
    img: "assets/img/listing-single/2bhk-daimond-2d.jpg",
    text: "2BHK DAIMOND",
    text1: "Carpet : 966 Sq.ft",

  },
  {
    img: "assets/img/listing-single/2bhk-daimond-3d.jpg",
    text: "2BHK DAIMOND",
    text1: "Carpet : 966 Sq.ft",
  },
];
const thumbslider = [
  { img: 'assets/img/listing-single/11.jpg' },
  { img: 'assets/img/listing-single/22.jpg' },
  { img: 'assets/img/listing-single/33.jpg' },
  { img: 'assets/img/listing-single/44.jpg' },
  { img: 'assets/img/listing-single/55.jpg' },
];

class Listingwrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showmore: false,
      nav1: null,
      nav2: null,
      navs1: null,
      navs2: null,

      gallary: true,
      fname:'',
      phone:'',
      email:'',
      subject:'',
      comment:'',
      date:'',
      nameError:'',
      phoneError:'',
      emailError:'',
      isRegistered: false


    }
    this.showmoretoggle = this.showmoretoggle.bind(this)
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
        "comment",
        "date",
        
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
    else if (name === "comment") isValid =true
    else if (name === "date") isValid =true
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

  showmoretoggle() {
    this.setState({
      showmore: !this.state.showmore
    })
  }
  componentDidMount() {
    function popup() {
      $('.gallery-thumb').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
      });
      $('.gallery-thumb1').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
      });
      $('.gallery-thumbg1').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
      });


    }
    popup();
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,

      navs1: this.sliders1,
      navs2: this.sliders2


    });
  };
  render() {
    const {
      fname,
      email,
      phone,
      subject,
      date,
      comment,
      nameError,
      emailError,
      phoneError,
      isRegistered
  } = this.state
    const settings1 = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    };
    const settings2 = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      dots: true
    };
    const Documents = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      dots: true
    };
    const settingsthumb = {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    }
   
   
    return (
      <div className="section listing-wrapper">
        <div className="container">
          <div className="row" id="modal">

            {/* projects images Start */}
            <div className="col-12">
              <div className="listing-thumbnail">
                <div>
                  <Slider
                    className="listing-thumbnail-slider-main"
                    asNavFor={this.state.navs2}
                    ref={(slider) => (this.sliders1 = slider)}
                    {...settings1}
                  >
                    {mainslider.map((item, i) => (
                      <div>
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-12 justify-content-center">
                            <Link
                              key={i}
                              to={item.img}
                              className="slider-thumbnail-item gallery-thumb1 col-12"
                            >
                              <img
                                src={
                                  process.env.PUBLIC_URL + "/" + item.img
                                }
                                alt="listing"
                              />
                            </Link>
                          </div>
                          <div className="col-lg-4 col-md-4 d-flex justify-content-center align-self-center text-center">
                            <div className="col-12">
                              <div className="row justify-content-center">
                                <h2>{item.theader}</h2>
                              </div>
                              <div className="row">
                                <h6>{item.text}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  {/* <Slider className="listing-thumbnail-slider-main col-4 d-flex justify-content-center align-self-center text-center" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} {...settings} >
                                        {mainslider.map((item, i) => (
                                            // <div className="row" style={{display:"flex"}}>
                                            //     <div className="col-7">
                                            // <Link key={i} to={item.img} className="slider-thumbnail-item gallery-thumb">
                                            //     <img src={process.env.PUBLIC_URL + "/" + item.img} alt="listing" />
                                            // </Link>
                                            // </div>
                                            <h5>{item.text}</h5>
                                            // </div>
                                        ))}
                                    </Slider> */}
                </div>
                <Slider
                  className="listing-thumbnail-slider-nav"
                  asNavFor={this.state.navs1}
                  ref={(slider) => (this.sliders2 = slider)}
                  {...settingsthumb}
                >
                  {thumbslider.map((item, i) => (
                    <div key={i} className="slider-thumbnail-item col-12">
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.img}
                        alt="listing"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* gallery start */}
            <h4 className="col-12 my-4 justify-content-center">Gallery</h4>
            <div className="col-6 text-center ">
              <button
                class="btn-custom secondary w-100"
                name="button"
                onClick={() => this.setState({ gallary: true })}
              >
                Project Images
              </button>
            </div>
            <div className="col-6 text-center">

              <button
                class="btn-custom secondary w-100"
                name="button"
                onClick={() => this.setState({ gallary: false })}
              >
                Construction progress
              </button>
            </div>
            <div className="col-12 mt-2 px-5">
              {this.state.gallary ? (
                <Slider
                  className="listing-thumbnail-slider-main"
                  // asNavFor={this.state.nav2}
                  // ref={(slider) => (this.slider1 = slider)}
                  {...settings2}
                >
                  {mainslider2.map((item, i) => (
                    <div>
                      <Link
                        key={i}
                        to={item.img}
                        className="slider-thumbnail-item gallery-thumbg1 col-12 "
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/" + item.img}
                          alt="listing"

                        />

                      </Link>

                    </div>
                  ))}
                </Slider>
              ) : (
                <Slider
                  className="listing-thumbnail-slider-main"
                  // asNavFor={this.state.nav2}
                  // ref={(slider) => (this.slider1 = slider)}
                  {...settings2}
                >
                  {mainslider3.map((item, i) => (
                    <div className="acr-country-item acr-country-item-lg">
                      <div className="acr-country-thumb">

                        <img
                          style={{}}
                          src={process.env.PUBLIC_URL + "/" + item.img}
                          alt="listing"
                        />
                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/countries/6.jpg"} alt="country" /> */}
                      </div>
                      <Link key={i} to={item.img} className="acr-country-content">


                        <h4>64 Meridien</h4>
                        <span>8th Slab completed - Aug 21’</span>


                      </Link>
                    </div>
                    // <div className="row masonry"> 
                    // <div className="acr-country-item acr-country-item-lg">
                    //   <Link
                    //     key={i}
                    //     to={item.img}
                    //     className="slider-thumbnail-item gallery-thumb col-12"
                    //   >
                    //     <img
                    //       style={{}}
                    //       src={process.env.PUBLIC_URL + "/" + item.img}
                    //       alt="listing"
                    //     />
                    //       <h3 className="">
                    //         8th Slab completed - Aug 21’
                    //       </h3>

                    //   </Link>
                    // </div>
                    // </div>
                  ))}
                </Slider>
              )}
            </div>

            {/* gallery end */}
            {/* Content Start */}
            {/* <div className="listing-content">
              <h4>Plans and configuration</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
                <Link to="#">Lorem Ipsum has been the industry's</Link>{" "}
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div> */}
            {/* Content End */}

            <h4 className="col-12 my-4">Plans and configuration</h4>
            <div className="col-sm-12 col-md-4 listing-n">
              <Slider className="listing-thumbnail-n" {...settings2} >
                {configuration.map((item, i) => (
                  <div className="">
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>
                    <Link
                      key={i}
                      to={item.img}
                      className="slider-thumbnail-item gallery-thumb col-12 "
                    >

                      <img
                        src={process.env.PUBLIC_URL + "/" + item.img}
                        alt="listing"
                      />

                    </Link>
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>

                    <div className="col-12">

                      <p className="listing-author-n">{item.text1}</p>
                    </div>

                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-sm-12 col-md-4 listing-n">
              <Slider className="listing-thumbnail-slider-main" {...settings2} >
                {configuration1.map((item, i) => (
                  <div>
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>
                    <Link
                      key={i}
                      to={item.img}
                      className="slider-thumbnail-item gallery-thumb col-12 "
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.img}
                        alt="listing"
                      />
                    </Link>
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>

                    <div className="col-12">

                      <p className="listing-author-n">{item.text1}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-sm-12 col-md-4 listing-n">
              <Slider className="listing-thumbnail-slider-main" {...settings2} >
                {configuration2.map((item, i) => (
                  <div>
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>
                    <Link
                      key={i}
                      to={item.img}
                      className="slider-thumbnail-item gallery-thumb col-12 "
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/" + item.img}
                        alt="listing"
                      />
                    </Link>
                    <div className="col-12">
                      <p className="listing-author-n">{item.text}</p>
                    </div>

                    <div className="col-12">

                      <p className="listing-author-n">{item.text1}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="listing-thumbnail col-12 ">
              <h4>Location</h4>
              <p>
                Located in Pune West, off the Mumbai-Bangalore Highway and minutes from the Mukai Chowk &
                Akurdi Railway Station, is SPACE 64 Meridien A 2+ acre project comprising 2 and 3 bedroom apartments in
                Ravet. Ravet’s proximity to the bustling new marketplaces and IT industries  in Hinjewadi, Wakad , Talwade,
                Navi- Mumbai and its easy access to the Hospitals, Entertainment & Education hubs and thus makes it the preferred property
                in West Pune  for home buyers.
              </p>

              <div className="listing-map-wrapper col-12 ">
                <Listingmap />
              </div>
            </div>

            <div className="col-lg-12">
              {/* Price Range In the area Start */}
              {/* <div className="section">
                                <div className="acr-area-price">
                                    <span style={{ left: '30%' }}>852,000$</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="acr-area-price-wrapper">
                                        <div className="acr-area-price-min">
                                            <h5>562,000$</h5>
                                            <span>Lowest</span>
                                        </div>
                                        <h5>Price range in the area</h5>
                                        <div className="acr-area-price-max">
                                            <h5>1,280,000$</h5>
                                            <span>Highest</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              {/* Price Range In the area End */}
              {/* <div className="section section-padding pt-0 acr-listing-features">
                                <h4>Features</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="listing-feature-wrapper">
                                            <div className="listing-feature">
                                                <i className="flaticon-picture" />
                                                <h6 className="listing-feature-label">Propery Type</h6>
                                                <span className="listing-feature-value">House</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-bone" />
                                                <h6 className="listing-feature-label">Pet Friendly</h6>
                                                <span className="listing-feature-value">Yes</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-chair" />
                                                <h6 className="listing-feature-label">Furnished</h6>
                                                <span className="listing-feature-value">Yes</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-fan" />
                                                <h6 className="listing-feature-label">Cooling</h6>
                                                <span className="listing-feature-value">Yes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="listing-feature-wrapper">
                                            <div className="listing-feature">
                                                <i className="flaticon-bathroom" />
                                                <h6 className="listing-feature-label">Bathrooms</h6>
                                                <span className="listing-feature-value">3</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-pillow" />
                                                <h6 className="listing-feature-label">Bed Rooms</h6>
                                                <span className="listing-feature-value">4</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-mailbox" />
                                                <h6 className="listing-feature-label">Mail box</h6>
                                                <span className="listing-feature-value">Yes</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-ruler" />
                                                <h6 className="listing-feature-label">Property Size</h6>
                                                <span className="listing-feature-value">3,000 Sqft</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className={classNames("load-more-features btn-custom-2 light-grey btn-block", { "d-none": this.state.showmore })} onClick={this.showmoretoggle}>Show More</button>
                                <div className={classNames("hidden-listing-features", { "d-block": this.state.showmore })}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="listing-feature">
                                                <i className="flaticon-key" />
                                                <h6 className="listing-feature-label">Property Id</h6>
                                                <span className="listing-feature-value">BPFXQEI</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-garage" />
                                                <h6 className="listing-feature-label">Parking</h6>
                                                <span className="listing-feature-value">Yes</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-history" />
                                                <h6 className="listing-feature-label">Year Built</h6>
                                                <span className="listing-feature-value">1979</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="listing-feature">
                                                <i className="flaticon-new" />
                                                <h6 className="listing-feature-label">Condition</h6>
                                                <span className="listing-feature-value">New</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-ruler" />
                                                <h6 className="listing-feature-label">Lot Size</h6>
                                                <span className="listing-feature-value">89 Acres</span>
                                            </div>
                                            <div className="listing-feature">
                                                <i className="flaticon-eye" />
                                                <h6 className="listing-feature-label">View</h6>
                                                <span className="listing-feature-value">City View</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section pt-0 acr-listing-nearby">
                                <h4>What's Nearby</h4>
                                <div className="listing-nearby-item">
                                    <h6 className="custom-success">
                                        <i className="fas fa-utensils" />Restaurants
            </h6>
                                    <ul>
                                        <li>
                                            <span><b>The One</b> <span>(1.3 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>Elephant</b> <span>(0.2 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>Jorgie and Clyne</b> <span>(3.2 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="listing-nearby-item">
                                    <h6 className="custom-danger">
                                        <i className="fas fa-graduation-cap" />Education
            </h6>
                                    <ul>
                                        <li>
                                            <span><b>Greater Moscow Liberty School</b> <span>(1.3 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>Chandler Highschool</b> <span>(0.2 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>Insitution of Science and Technology</b> <span>(3.2 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="listing-nearby-item">
                                    <h6 className="custom-warning">
                                        <i className="fas fa-shopping-basket" />Essentials
            </h6>
                                    <ul>
                                        <li>
                                            <span><b>Joe's 24/7 Groceries</b> <span>(0.6 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>Frank and Joe</b> <span>(0.9 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span><b>All United Store</b> <span>(1.2 km)</span> </span>
                                            <ul>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                             */}

                             
              <div className="section pt-0">
                <h4>Property Video</h4>
                
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five
                  centuries, but also the leap
                </p> */}
                
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6LSBfrzJYBs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="section pt-0 ">
                <h4>Documentation</h4>
             
                {/* <h6><center>Download Rustomjee Summit E-Brochure</center></h6> */}
                
                <Slider className="listing-thumbnail-slider-nav" {...Documents} >
                  {docslider3.map((item, i) => (
                    <div key={i} className="slider-thumbnail-item d-flex justify-content-center flex-column align-items-center">
                      
                      {/* <Link
                          key={i}
                          to={item.img}
                          className="slider-thumbnail-item gallery-thumb col-12 "
                        > */}
                        
                      <img
                        style={{ maxHeight: "200px" }}
                        src={process.env.PUBLIC_URL + "/" + item.img}
                        alt="listing"
                      />
                      <h6>{item.text}</h6>
                      <div className="justify-content-center">
                        <Link
                          key={i}
                          to={item.img}
                          className="slider-thumbnail-item gallery-thumb col-12"
                        >
                          Download
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
 
              {/* <div className="section pt-0 acr-listing-history">
                                <h4>Property History</h4>
                                <Accordion defaultActiveKey="0" className="with-gap">
                                    <Card>
                                        <Accordion.Collapse eventKey="0" className="collapseparent">
                                            <Card.Body>
                                                <div className="row">
                                                    <div className="col-sm-4">

                                                        <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/history-1.jpg"} alt="property history" />
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <h5>The Beginning</h5>
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                                            tempor,
                                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                                1979 - 1999
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey="1" className="collapseparent">
                                            <Card.Body>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/history-2.jpg"} alt="property history" />
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <h5>The Rebuilding Phase</h5>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                                2000 - 2012
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey="2" className="collapseparent">
                                            <Card.Body>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/history-3.jpg"} alt="property history" />
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <h5>Modernization</h5>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                                2013 - Till date
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                </Accordion>
                            </div>
                             */}
{/* <ContactUsForm /> */}

                  {/* //////////////////// */}
                      {/*  uncomment below    */}
                      {isRegistered ?
                (
                  <>
                    <Redirect to="/listing-details-v2"/>
                   
              <div className="text-center"><h2> Sent Successfully!</h2>
              </div>
               
                    </>
                ) : (
              <div className="section pt-0">
                <h4>Schedule Link tour</h4>
                <form onSubmit={this.handleRegister}>
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fname" value={fname} onChange={this.handleChange}
              />
               {nameError && (<div className="errorMsg text-danger "  >{nameError}</div>)}
            </div>
            <div className="col-md-6 form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email" value={email} onChange={this.handleChange}
              />
 {emailError && (<div className="errorMsg text-danger "  >{emailError}</div>)}
            </div>
            <div className="col-md-6 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone" value={phone} onChange={this.handleChange}
              />
             {phoneError && (<div className="errorMsg text-danger "  >{phoneError}</div>)}
            </div>
            <div className="col-md-6 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Date"
                name="date" value={date} onChange={this.handleChange}
              />
            </div>
            <div className="col-md-12 form-group">
              <textarea
                className="form-control"
                placeholder="Type your comment..."
                name="comment" value={comment} onChange={this.handleChange}
                rows={7}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-custom primary"
            name="tbutton"
          >
            Send
          </button>
           </form>
      </div>
       )}
                  {/* ///////////////////////////// */}
                  {/* <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" placeholder="Full Name" name="name" value={name}
                                                onChange={this.handleChange} />
                                            {nameError && (
                                                <div className="errorMsg text-danger "  >{nameError}</div>)}
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" value={email}onChange={this.handleChange} />

                                            {emailError && (
                                                <div className="errorMsg text-danger"  >{emailError}</div>
                                            )}
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
                                            <label>Date</label>
                                            <input type="text" className="form-control" placeholder="Date" name="date" value={date}
                                                onChange={this.handleChange} />
                                        </div>
                                  
                                        <div className="col-md-12 form-group">
                                            <label>Your Message</label>
                                            <textarea className="form-control" placeholder="Type your message..." name="comment" value={comment}
                                                onChange={this.handleChange} rows={7} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom primary">Schedule Tour</button>
                               
                </form>
              </div> 
*/}

              {/* //////////////////// */}
              {/* Pagination Start */}
              {/* <div className="section p-0 post-single-pagination-wrapper">
                                <div className="post-single-pagination post-prev">
                                    <i className="fas fa-arrow-left" />
                                    <Link to="#" className="post-single-pagination-content">
                                        <span>Prev Listing</span>
                                        <h6>Theodore Lowe, Azusa New York 39531</h6>
                                    </Link>
                                </div>
                                <div className="post-single-pagination post-next">
                                    <Link to="#" className="post-single-pagination-content">
                                        <span>Next Listing</span>
                                        <h6>Cecilia Chapman, Mankato Mississippi 96522</h6>
                                    </Link>
                                    <i className="fas fa-arrow-right" />
                                </div>
                            </div> */}
              {/* Pagination End */}
              {/* Similar Start */}
              {/* <div className="section section-padding">
                                <h4>Similar Listings</h4>
                                <div className="row">
                                    {listing.slice(0, 2).map((item, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="listing">
                                                <div className="listing-thumbnail">
                                                    <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="listing" /></Link>
                                                    <div className="listing-badges">
                                                        {
                                                            item.star === true ? <span className="listing-badge featured"> <i className="fas fa-star" /> </span> : ''
                                                        }
                                                        {
                                                            item.sale === true ? <span className="listing-badge sale">On Sale</span> : ''
                                                        }
                                                        {
                                                            item.pending === true ? <span className="listing-badge pending"> Pending</span> : ''
                                                        }
                                                        {
                                                            item.rental === true ? <span className="listing-badge rent"> Rental</span> : ''
                                                        }
                                                    </div>
                                                    <div className="listing-controls">
                                                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                                                        <Link to="#" className="compare"><i className="fas fa-sync-alt" /></Link>
                                                    </div>
                                                </div>
                                                <div className="listing-body">
                                                    <div className="listing-author">
                                                        <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" />
                                                        <div className="listing-author-body">
                                                            <p> <Link to="#">{item.authorname}</Link> </p>
                                                            <span className="listing-date">{item.postdate}</span>
                                                        </div>
                                                        <Dropdown className="options-dropdown">
                                                            <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu-right">
                                                                <ul>
                                                                    <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Agent</Link> </li>
                                                                    <li> <Link to="mailto:+123456789"> <i className="fas fa-envelope" /> Send Message</Link> </li>
                                                                    <li> <Link to="/listing-details-v1"> <i className="fas fa-bookmark" /> Book Tour</Link> </li>
                                                                </ul>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <h5 className="listing-title"> <Link to="/listing-details-v1" title={item.title}>{item.title}</Link> </h5>
                                                    <span className="listing-price">{new Intl.NumberFormat().format((item.monthlyprice).toFixed(2))}$ <span>/month</span> </span>
                                                    <p className="listing-text">{item.text}</p>
                                                    <div className="acr-listing-icons">
                                                        <OverlayTrigger overlay={bedstip}>
                                                            <div className="acr-listing-icon">
                                                                <i className="flaticon-bedroom" />
                                                                <span className="acr-listing-icon-value">{item.beds}</span>
                                                            </div>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger overlay={bathstip}>
                                                            <div className="acr-listing-icon">
                                                                <i className="flaticon-bathroom" />
                                                                <span className="acr-listing-icon-value">{item.bathrooms}</span>
                                                            </div>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger overlay={areatip}>
                                                            <div className="acr-listing-icon">
                                                                <i className="flaticon-ruler" />
                                                                <span className="acr-listing-icon-value">{new Intl.NumberFormat().format((item.area))}</span>
                                                            </div>
                                                        </OverlayTrigger>
                                                    </div>
                                                    <div className="listing-gallery-wrapper">
                                                        <Link to="/listing-details-v1" className="btn-custom btn-sm secondary">View Details</Link>
                                                        <OverlayTrigger overlay={gallerytip}>
                                                            <Link to="#" className="listing-gallery"> <i className="fas fa-camera" /> </Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                             */}
              {/* Similar End */}
            </div>
            {/* Listings End */}
            {/* Sidebar Start */}
            {/* <div className="col-lg-4">
                            <div className="sidebar sticky-sidebar">
                                <div className="sidebar-widget sidebar-widget-agent">
                                    <h5>Meet The Agent</h5>
                                    <div className="media sidebar-author listing-agent">
                                        <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/people/1.jpg"} alt="agent" /></Link>
                                        <div className="media-body">
                                            <h6> <Link to="#">Freddy Burben</Link> </h6>
                                            <span>Company Agent</span>
                                        </div>
                                        <Dropdown className="options-dropdown">
                                            <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                                <ul>
                                                    <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Agent</Link> </li>
                                                    <li> <Link to="/listing-grid"> <i className="fas fa-th-list" /> View Listings</Link> </li>
                                                    <li> <Link to="#"> <i className="fas fa-star" /> Save Agent</Link> </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email Address" name="email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" rows={3} placeholder="Enter your message" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn-custom primary light btn-block">Send Message</button>
                                    </form>
                                </div>
                                <div className="sidebar-widget">
                                    <h5>Recent Listings</h5>
                                    {listing.filter(function (item) { return item.recent === true }).slice(0, 4).map((item, i) => (
                                        <div key={i} className="listing listing-list">
                                            <div className="listing-thumbnail">
                                                <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="listing" /></Link>
                                            </div>
                                            <div className="listing-body">
                                                <h6 className="listing-title"> <Link to="/listing-details-v1" title={item.title}>{item.title}</Link> </h6>
                                                <span className="listing-price">{new Intl.NumberFormat().format((item.monthlyprice).toFixed(2))}$ <span>/month</span> </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sidebar-widget">
                                    <h5>Mortgage Calculator</h5>
                                    <Calculator />
                                </div>
                            </div>
                        </div>
                         */}
            {/* Sidebar End */}


          
            {/* <Form /> */}

            <ModalEnquiry/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Listingwrapper;