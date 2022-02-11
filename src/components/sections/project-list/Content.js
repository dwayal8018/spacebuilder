
// Changed by Dnyaneshwari -<div className="container"> container word is added

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Sidebar from '../../layouts/Shopsidebar';
import listing from '../../../data/projectdata.json';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';


const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const gridtip = (
    <Tooltip>
        Grid
    </Tooltip>
);
const listtip = (
    <Tooltip>
        List
    </Tooltip>
);
const maptip = (
    <Tooltip>
        Map
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

class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: listing,
            currentPage: 1,
            itemsPerPage: 6,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }

    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        // const renderitems = currentitems.map((item, i) => {
        //     return <div key={i} className="col-md-4">
        //         <div className="listing">
        //             <div className="listing-thumbnail">
        //                 <Link to="/listing-details-v2"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="listing" /></Link>
        //                 <div className="listing-badges">
        //                     {
        //                         item.star === true ? <span className="listing-badge featured"> <i className="fas fa-star" /> </span> : ''
        //                     }
        //                     {
        //                         item.sale === true ? <span className="listing-badge sale">On Sale</span> : ''
        //                     }
        //                     {
        //                         item.pending === true ? <span className="listing-badge pending"> Pending</span> : ''
        //                     }
        //                     {
        //                         item.rental === true ? <span className="listing-badge rent"> Rental</span> : ''
        //                     }
        //                 </div>
        //                 {/* <div className="listing-controls">
        //                     <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
        //                     <Link to="#" className="compare"><i className="fas fa-sync-alt" /></Link>
        //                 </div> */}
        //             </div>
        //         <div className="listing-body">
        //             <div className="listing-author">
        //                 <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" />
        //                 <div className="listing-author-body">
        //                     <p> <Link to="#">{item.authorname}</Link> </p>
        //                     <span className="listing-date">{item.postdate}</span>
        //                 </div>

        //             </div>
        //             <h5 className="listing-title"> <Link to="/listing-details-v2" title={item.title}>{item.title}</Link> </h5>
        //             {/* <span className="listing-price">{new Intl.NumberFormat().format((item.monthlyprice).toFixed(2))}$ <span>/month</span> </span> */}
        //             <p className="listing-text">{item.text}</p>

        //             <div className="listing-gallery-wrapper">
        //                 <Link to="/listing-details-v2" className="btn-custom btn-sm secondary">View Details</Link>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        // });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });

        return (
            <div className="container">
                {/* start ongogin project */}

                <div className="listing">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/listing-details-v2"><img src="assets/img/listings/project-main-1.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="/listing-details-v2">{ }64 Meridien - Ravet</Link> </h5>
                                        <p className="listing-date">{ } Towers : 5</p>
                                        <p className="listing-date">{ }Storey: 13 </p>
                                        <p className="listing-date">{ }Apartment: 2 & 3 Bed Residences</p>
                                        <p className="listing-date">{ }Flat area: 682 Sqft. Onwards</p>
                                        <p className="listing-date">{ }Project size: 250 units</p>
                                        <p className="listing-date">{ }Status: Ongoing </p>
                                    </div>
                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/listing-details-v2" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/project-main-2.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }AVIVA - Hinjewadi Phase I </Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 11 </p>
                                        <p className="listing-date">{ }Apartment: 1 & 2 Bed Residences</p>
                                        <p className="listing-date">{ }Flat area: 458 Sqft. Onwards</p>
                                        <p className="listing-date">{ }Project size: 105 units</p>
                                        <p className="listing-date">{ }Status: Ongoing </p>
                                    </div>


                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/project-main-3.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }Shivom Regency - Baner</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 10 </p>
                                        <p className="listing-date">{ }Apartment: Showrooms & Commercial Office Spaces</p>
                                        <p className="listing-date">{ }Flat area: 800 Sqft. Onwards</p>
                                        <p className="listing-date">{ }Project size: 50 units</p>
                                        <p className="listing-date">{ }Status: Completed 2020 </p>
                                    </div>
                                </div>

                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* close ongogin project */}
                <div className="section cta-banner" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/cta/cc1.jpg )" }}>
                    <div className="row">
                        <div className="cta cta-3">

                            <div className="col-lg-12 mb-lg-30">
                                <div className="section-title-wrap">
                                         {/* changed by Dnyaneshwari > Space Builder  -> Space Builder's */}
                                    <h5 className="custom-primary">Space Builder's</h5>
                                    <h2 className="title">Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start completed project section */}

                <div className="listing">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Myra.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ } Myra - Wadgaonsheri</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 5</p>
                                        <p className="listing-date">{ }Apartment: 2 & 3 Bed Residences</p>
                                        <p className="listing-date">{ }Project size: 30 units</p>
                                        <p className="listing-date">{ }Status: Completed 2019 </p>
                                    </div>
                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>

                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/West-wind-park.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }West Wind Park -Hinjewadi Phase I</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 10</p>
                                        <p className="listing-date">{ }Apartment: 1 & 2 Bed Residences</p>
                                        <p className="listing-date">{ }Project size: 75 units</p>
                                        <p className="listing-date">{ }Status: Completed 2017 </p>
                                    </div>

                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>

                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Mystique.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }Mystique - Wadgaonsheri</Link> </h5>
                                        <p className="listing-date">{ }Towers : 1</p>
                                        <p className="listing-date">{ }Storey : 4 </p>
                                        <p className="listing-date">{ }Apartment : 2 & 3 Bed Residences</p>
                                        <p className="listing-date">{ }Project size : 24 units</p>
                                        <p className="listing-date">{ }Status: Completed 2016 </p>
                                    </div>
                                </div>

                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider one completed of completed project */}

                <div className="listing">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Kulshree.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ } Kulshree - Balewadi</Link> </h5>
                                        <p className="listing-date">{ }Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 4</p>
                                        <p className="listing-date">{ }Apartment: 2 Bed Residences</p>
                                        <p className="listing-date">{ }Project size: 16 units</p>
                                        <p className="listing-date">{ }Status: Completed 2015 </p>
                                    </div>
                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Madhav-Baugh.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }Madhav Baugh - Hadapsar</Link> </h5>
                                        <p className="listing-date">{ } Towers : 7</p>
                                        <p className="listing-date">{ }Storey: 5</p>
                                        <p className="listing-date">{ }Apartment: 2 Bed Residences</p>
                                        <p className="listing-date">{ }Project size: 105 units</p>
                                        <p className="listing-date">{ }Status: Completed 2014 </p>
                                    </div>

                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Marigold.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }Marigold - Sinhagad Road</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 8 </p>
                                        <p className="listing-date">{ }Apartment: 2 Bed Residences</p>
                                        <p className="listing-date">{ }Project size: 45 units</p>
                                        <p className="listing-date">{ }Status: Completed 2012 </p>
                                    </div>
                                </div>

                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="listing">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Alankar.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ } Alankar - Dhankawdi</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 7</p>
                                        <p className="listing-date">{ }Apartment: 2 & 2.5 BHK</p>
                                        <p className="listing-date">{ }Project size: 25 units</p>
                                        <p className="listing-date">{ }Status: Completed 2011 </p>
                                    </div>
                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>

                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Madhav-Classic.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                         {/* changed by Dnyaneshwari > = (equal to)  -> - (dash) */}
                                        <h5> <Link to="#">{ }Madhav Classic - Aundh</Link> </h5>
                                        <p className="listing-date">{ } Towers : 1</p>
                                        <p className="listing-date">{ }Storey: 5</p>
                                        <p className="listing-date">{ }Apartment: 3 BHK</p>
                                        <p className="listing-date">{ }Project size: 10 units</p>
                                        <p className="listing-date">{ }Status: Completed 2002 </p>
                                    </div>

                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>

                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Mahalasa.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ }Mahalasa - Bhusari colony</Link> </h5>
                                        <p className="listing-date">{ }Towers : 1</p>
                                        <p className="listing-date">{ }Storey : 5 </p>
                                        <p className="listing-date">{ }Apartment : 2 & 3  BHK</p>
                                        <p className="listing-date">{ }Project size : 20 units</p>
                                        <p className="listing-date">{ }Status: Completed 2010 </p>
                                    </div>
                                </div>

                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------- */}
                <div className="listing">

                    <div className="row ">
                        <div className="col-lg-4 ">


                        </div>
                        <div className="col-lg-4 ">
                            <div className="listing-thumbnail">
                                <Link to="/#"><img src="assets/img/listings/Other-Projects.jpg" alt="listing" /></Link>
                            </div>
                            <div className="listing-body">
                                <div className="listing-author">
                                    <div className="listing-author-body">
                                        <h5> <Link to="#">{ } Other Completed Project List</Link> </h5>
                                        {/* <p className="listing-date">{ } Towers : 1</p>
                    <p className="listing-date">{ }Storey: 7</p>
                    <p className="listing-date">{ }Apartment: 2 & 2.5 BHK;</p>
                    <p className="listing-date">{ }Project size: 25 units</p>
                    <p className="listing-date">{ }Status: Completed 2011 </p> */}
                                    </div>
                                </div>
                                <div className="listing-gallery-wrapper">
                                    <Link to="/#" className="btn-custom btn-sm secondary">View Details</Link>

                                </div>
                                <br />
                            </div>
                        </div>

                        <div className="col-lg-4 ">


                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Content;