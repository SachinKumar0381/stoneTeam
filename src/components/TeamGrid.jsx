import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from "./q_60.jpeg";
import { FaArrowRight } from "react-icons/fa";
import "../assets/css/teamgrid.css";

const TeamGrid = ({gridName, nameColor}) => {
    return (
        <div className='team-grid-main-div'>
            <h1 className='team-grid-name' style={{color:`${nameColor}`}}>{gridName}</h1>
            <div className='team-grid-sec' style={{borderLeft:`2px solid ${nameColor}`}}>
                <Row className="g-5">
                    <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='team-main-card'>
                    <div className='team-card-img-div'>
                        <img src={img1} alt="" style={{width:"100%"}}/>
                        <div className='team-card-contact'>
                            <p className='team-cont-p'>CONTACT</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <p className='team-cont-name'>Chris Kostanecki</p>
                    <p className='team-cont-desg'>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                    </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='team-main-card'>
                    <div className='team-card-img-div'>
                        <img src={img1} alt="" style={{width:"100%"}}/>
                        <div className='team-card-contact'>
                            <p className='team-cont-p'>CONTACT</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <p className='team-cont-name'>Chris Kostanecki</p>
                    <p className='team-cont-desg'>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                    </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='team-main-card'>
                    <div className='team-card-img-div'>
                        <img src={img1} alt="" style={{width:"100%"}}/>
                        <div className='team-card-contact'>
                            <p className='team-cont-p'>CONTACT</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <p className='team-cont-name'>Chris Kostanecki</p>
                    <p className='team-cont-desg'>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                    </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='team-main-card'>
                    <div className='team-card-img-div'>
                        <img src={img1} alt="" style={{width:"100%"}}/>
                        <div className='team-card-contact'>
                            <p className='team-cont-p'>CONTACT</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <p className='team-cont-name'>Chris Kostanecki</p>
                    <p className='team-cont-desg'>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                    </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12}>
                    <div className='team-main-card'>
                    <div className='team-card-img-div'>
                        <img src={img1} alt="" style={{width:"100%"}}/>
                        <div className='team-card-contact'>
                            <p className='team-cont-p'>CONTACT</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <p className='team-cont-name'>Chris Kostanecki</p>
                    <p className='team-cont-desg'>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TeamGrid;