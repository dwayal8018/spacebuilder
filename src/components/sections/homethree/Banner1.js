import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Banner1.css'
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
        // img: 'assets/img/banner/final_f4.jpg',
        // img: 'assets/img/banner/f4444.jpg',
        img: 'assets/img/banner/baner4.png',
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

class Banner1 extends Component {
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

 {/* Start Second Slider */}

                    {/*  */}
                    <div>
                        <div className="banner-inner bg-cover bg-center pt-5 " style={{ backgroundImage: "url(" + 'assets/img/banner/wakad88.png' + ")", }}  >
                            <div className="row pt-5 pb-5 d-flex flex-row justify-content-around  align-items-center" >
                                <div className=" bannercontent col-10 col-lg-8 col-sm-8 d-flex flex-column align-items-center pb-3 pt-3 pr-5 ">

                                    <div className="row  ">
                                        <img src='assets/img/banner/l2 88.png' alt="abc" className="" style={{
                                            width: '300px'
                                        }} />
                                    </div>
                                    <div className="row pl-5 justify-content-center  align-items-center">
                                        <h3 className="text-center"> Call: 9422007805 </h3>

                                    </div>
                                    <div className="row pl-5 justify-content-center  align-items-center">
                                        <h6> Email: sales@spacebuilder.co <br /> Web: www.spacebuilder.co</h6>
                                    </div>
                                    <div className="row  ">
                                        <img src='assets/img/banner/l1 88.png' alt="abc" className="" style={{
                                            width: '300px'
                                        }} />
                                    </div>

                                </div>

                                <div className="col-10 col-lg-4 col-sm-4 d-flex flex-column justify-content-center  align-items-center  pb-3">
                                    <div className="row ">
                                        <img src='assets/img/banner/aviva1.png' alt="abc" className="dark-overlay" style={{
                                            width: 'auto'
                                        }} />
                                    </div>
                                    <div className="row ">
                                        <img src='assets/img/banner/text22.jpg' alt="abc" className="dark-overlay" style={{
                                            width: 'auto'
                                        }} />
                                    
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*  */}

                    {/* End Second Slider */}

                    {/* Start first Slider */}
                    

                    {/*  */}
                    <div>
                        <div className="banner-inner bg-cover bg-center " style={{ backgroundColor: '#74A3AF', }} >
                            <div className="row banner banner-2 slick-list text-center">
                            
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 box1" >
                                    <img src='assets/img/banner/99.png' alt="abc" className=""  />                                        

                                </div>                                
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 box  ">
                                   
                                    <img src='assets/img/banner/09.jpg' alt="abc" className=" " />
                                </div>
                            </div>
                                <div className="row-col text-center ">
                                <h4 >Biggest RoofTop Terrace | 30+ Amenities </h4> 
                                        <h4>Vastu Compliant Homes | 3 Flates per Floor</h4>
                                </div>

                        </div>
                    </div>
                    {/*  */}

                    {/* End first Slider */}

                   

                    {/* Start Third Slider */}

                    
                    <div>
                        <div className="banner-inner bg-cover bg-center pt-5" style={{ backgroundColor: '#FDCEA8', }} >
                            <div className="row slides pt-5 d-flex flex-row  align-items-center justify-content-center ">

                                <div className="col-12 col-lg-6 col-sm-6 d-flex flex-column justify-content-center  align-items-center  ">

                                    <div className="row  ">
                                        <img src='assets/img/banner/banner4_1.png' alt="abc" className="" style={{
                                            width: '300px'
                                        }} />
                                    </div>

                                </div>

                                <div className="col-12 col-lg-6 col-sm-6 d-flex flex-column justify-content-center  align-items-center p-5 ">
                                    <div className="row ">
                                        <h2 style={{
                                            color: '#74533F', fontWeight: '600', fontSize: '25px'
                                        }}>The Landmark we promised,The Landmark we delivered !</h2>
                                        {/* </div>
                                <div className="row"> */}
                                        <img src='assets/img/banner/baner5.png' alt="abc" className="dark-overlay" style={{
                                            width: '900px',
                                            Height: 'auto'
                                        }} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*  */}
                    {/* End Third Slider */}

                </Slider>
                <div className="acr-arrows">
                    <i className="slider-prev fas fa-arrow-left slick-arrow" onClick={this.previous} />
                    <i className="slider-next fas fa-arrow-right slick-arrow" onClick={this.next} />
                </div>
            </div>

        )
    }
}

export default Banner1
