import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


// Banner
const bannerpost = [
    {
        id: 1,
        img: 'assets/img/banner/f1.jpg',
        price: 852000,
        emitime: 60,
        location: 'Iris Watson, Frederick Nebraska 20620',
        beds: 3,
        baths: 2,
        area: 2499,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'House',
        view: 'City View',
        size: '89 Acres',
        condition: 'Brand New',
        backgroundColor: '#F4C9C8',
    },
    {
        id: 2,
        img: 'assets/img/banner/f2.jpg',
        price: 1200000,
        emitime: 60,
        location: 'Theodore Lowe, Azusa New York 39531',
        beds: 4,
        baths: 3,
        area: 3120,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'Duplex',
        view: 'Forest View',
        size: '180 Acres',
        condition: 'Brand New',
        backgroundColor: '#74A3AF',
    },
    {
        id: 3,
        img: 'assets/img/banner/f3.jpg',
        price: 1200000,
        emitime: 60,
        location: 'Theodore Lowe, Azusa New York 39531',
        beds: 4,
        baths: 3,
        area: 3120,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'Duplex',
        view: 'Forest View',
        size: '180 Acres',
        condition: 'Brand New',
        backgroundColor: '#DDE8AC',
    },
    {
        id: 4,
        img: 'assets/img/banner/f4.jpg',
        // img: 'assets/img/banner/f4444.jpg',
        //  img: 'assets/img/banner/baner4.png',
        // img: 'assets/img/banner/baner88.png',
        
        
        img1: 'assets/img/banner/banner4_1.png',
        img2: 'assets/img/banner/l1_88.png',
        address: 'S.NO.176,Near Aaditya Society, Main Baner Road,Baner,Pune',
        contact: 'Call: 9422007805',
        email: 'sales@spacebuilder.co',
        web: 'www.spacebuilder.co',
        // backgroundColor:'#FFE9D2',
        // backgroundColor: '#EFCEA9',
        // backgroundColor: '#F5ECDA',
        // backgroundColor: '#F6ECDD',
        backgroundColor: '#F4D8AE',


        price: 1200000,
        emitime: 60,
        location: 'Theodore Lowe, Azusa New York 39531',
        beds: 4,
        baths: 3,
        area: 3120,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        type: 'Duplex',
        view: 'Forest View',
        size: '180 Acres',
        condition: 'Brand New'
    },
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
        }
        return (
            <div className="banner banner-2">
            <Slider className="banner-slider  " ref={c => (this.slider = c)} {...settings}>
                    {bannerpost.map((item, i) => (
                        <div key={i} >
                            <div className="banner-inner bg-cover bg-center pt-5" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + item.img }} >
                                <div className="row pt-5 d-flex flex-row justify-content-around  align-items-center ">
                                    <div className="col-10 col-lg-3 col-sm-3 d-flex flex-column justify-content-center  align-items-center pb-3 ">
                                     
                                        <div className="row pt-5 pb-3 ">
                                            <img src={item.img1} alt="abc" className="" style={{
                                                width: '200px'
                                            }} />

                                        </div>


                                        {/* <div className="row">
                                            <p>{item.address}</p>
                                        </div>
                                        <div className="row w-50" >
                                            <img src={item.img2} alt="abc" />
                                        </div>
                                        <div className="row">
                                            <div className="col" style={{
                                             fontSize:'25px'
                                        }}>
                                                {item.contact}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row">
                                                {item.email}  |  {item.web}
                                            </div> */}
                                            {/* | 
                                            <div className="row">
                                               {item.web}
                                            </div> */}
                                        {/* </div> */}
                                    </div>

                                    {/* <div className="col-10 col-lg-7 col-sm-7 d-flex flex-column justify-content-center  align-items-center pt-5 pb-3">
                                        <div className="row ">
                                            <h2 style={{
                                            color: '#74533F', fontWeight:'600',fontSize:'25px'
                                        }}>The Landmark we promised,The Landmark we delivered !</h2>
                                        </div>
                                        <div className="row">
                                        <img src={item.img} alt="abc" className="dark-overlay" style={{
                                            width: 'auto'
                                        }} />

                                        </div>
                                    </div> */}
                                </div>

                            </div>

                            {/* Added by Its__D__ */}
                            {/* <div className="row order-1" >
                                    <div className="col-12 col-lg-4 col-sm-4 d-flex flex-column justify-content-center  align-items-center  ">
                                        <div className="row">
                                            <img src={item.img1} alt="abc" className=""style={{ 
                                        width:'200px' }}/>
                                            
                                        </div>
                                        <div className="row">
                                            <p>{item.address}</p>
                                        </div>
                                        <div className="row">
                                        <img src={item.img2} alt="abc" />
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                {item.contact}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                {item.email}  | {item.web}
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* Added by Its__D__ */}
                            {/* </div> */}



                            {/* <div className="acr-listing-details">
                                <div className="acr-listing-section">
                                    <div className="acr-listing-nav">
                                        <Link to="/listing-details-v1" className="btn-custom secondary">See more details</Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-section-price">
                                            <span>For Sale</span>
                                            <h3>${new Intl.NumberFormat().format((item.price).toFixed(2))}</h3>
                                            <span>Est. Mortgage</span>
                                            <p>${new Intl.NumberFormat().format((item.price / item.emitime).toFixed(2))}/mo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-section-body">
                                        <h4> <Link to="/listing-details-v1">{item.location}</Link> </h4>
                                        <div className="acr-listing-icons">
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bedroom" />
                                                <span>Beds</span>
                                                <span className="acr-listing-icon-value">{item.beds}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-bathroom" />
                                                <span>Baths</span>
                                                <span className="acr-listing-icon-value">{item.baths}</span>
                                            </div>
                                            <div className="acr-listing-icon">
                                                <i className="flaticon-ruler" />
                                                <span>Sqft</span>
                                                <span className="acr-listing-icon-value">{new Intl.NumberFormat().format((item.area).toFixed(2))}</span>
                                            </div>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <div className="acr-listing-section">
                                    <div className="acr-listing-controls">
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-share" />
                                        </Link>
                                        <Link to="#" className="acr-listing-control">
                                            <i className="flaticon-star" />
                                        </Link>
                                        <Link to="#" className="acr-schedule-tour acr-listing-control">
                                            <i className="flaticon-event" />
                                            <span>Schedule Link tour</span>
                                        </Link>
                                    </div>
                                    <div className="acr-listing-section-body">
                                        <div className="acr-listing-meta">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Type</span>
                                                        <p>{item.type}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>View</span>
                                                        <p>{item.view}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Lot Size</span>
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-3 col-sm-3">
                                                    <div className="acr-listing-meta-item">
                                                        <span>Condition</span>
                                                        <p>{item.condition}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                        </div>
                    ))}

                    
                </Slider>
                <div className="acr-arrows">
                    <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                    <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                </div>
            </div>
        );
    }
}

export default Banner;