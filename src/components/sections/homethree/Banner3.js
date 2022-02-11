import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const bannerPost = [
//     {
//         img: 'assets/img/banner/f02.jpg',
//     },
//     {
//         img: 'assets/img/banner/f03.jpg',
//     },
//     {
//         img: 'assets/img/banner/f04.jpg',
//     },
// ]

class Banner3 extends Component {
    render() {
        return (

 <> 
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="2000">
      <img src='assets/img/banner/f02.jpg' className="d-block w-100" alt='assets/img/banner/f02.jpg'/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src='assets/img/banner/f03.jpg' className="d-block w-100" alt='assets/img/banner/f02.jpg'/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src='assets/img/banner/f04.jpg' className="d-block w-100" alt='assets/img/banner/f02.jpg'/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

 {/* <div id="carouselExampleIndicators" className="carousel slide"  >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"  >
    <div className="carousel-item active" data-interval="500"  >
      <img src='assets/img/banner/f02.jpg' className="d-block w-100" alt='assets/img/banner/f02.jpg'/>
    </div>
    <div className="carousel-item active" data-interval="500">
      <img src='assets/img/banner/f03.jpg' className="d-block w-100" alt='assets/img/banner/f03.jpg'/>
    </div>
    <div className="carousel-item" data-interval="500">
      <img src='assets/img/banner/f04.jpg' className="d-block w-100" alt='assets/img/banner/f04.jpg'/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
</>

        )
    }
};

// ReactDOM.render(<Banner3/>,document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page
// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
export default Banner3;