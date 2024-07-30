import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import img1 from "./q_60.jpeg";

const TeamModal = () => {
    return (
        <div style={{display:"flex", justifyContent:'space-around', alignItems:"center", position:"fixed", width:"100%", height:"100vh", border:"2px solid yellow", top:"0px", backgroundColor:"#485978d6"}}>
                <FaChevronLeft/>
            <div style={{width:"70%", border:"1px solid red", backgroundColor:"white"}}>
                <div style={{padding:"10px", display:"flex", justifyContent:"end"}}>
                    <TfiClose style={{cursor:"pointer"}}/>
                </div>
                <div style={{display:"flex", border:"1px solid red"}}>
                    <div style={{border:"1px solid blue", width:"30%", padding:"0px 40px"}}>
                    <div className='team-main-card' style={{border:"1px solid red"}}>
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
                    </div>
                    <div style={{border:"1px solid green", width:"70%"}}>
                        <p style={{fontSize:"2vw", fontWeight:"bold", color:"#163f81"}}>Chris Kostanecki</p>
                        <p style={{letterSpacing:"0.3rem"}}>MANAGING PARTNER, EXECUTIVE COMMITTEE</p>
                        <p>Bio</p>
                        <p>As a Founder and Managing Partner, Chris puts his 30 years in retail property investment sales to work serving clients, building the business and leading an investment sales company. His top priority is ensuring that the brokers and support team are top-notch, have great experience and are laser focused on the client experience. </p>
                        <p>As a Founder and Managing Partner, Chris puts his 30 years in retail property investment sales to work serving clients, building the business and leading an investment sales company. His top priority is ensuring that the brokers and support team are top-notch, have great experience and are laser focused on the client experience. </p>
                        <p>As a Founder and Managing Partner, Chris puts his 30 years in retail property investment sales to work serving clients, building the business and leading an investment sales company. His top priority is ensuring that the brokers and support team are top-notch, have great experience and are laser focused on the client experience. </p>
                        <p>As a Founder and Managing Partner, Chris puts his 30 years in retail property investment sales to work serving clients, building the business and leading an investment sales company. His top priority is ensuring that the brokers and support team are top-notch, have great experience and are laser focused on the client experience. </p>
                        <p>As a Founder and Managing Partner, Chris puts his 30 years in retail property investment sales to work serving clients, building the business and leading an investment sales company. His top priority is ensuring that the brokers and support team are top-notch, have great experience and are laser focused on the client experience. </p>
                    </div>
                </div>
            </div>
                <FaChevronRight/>
        </div>
    );
};

export default TeamModal;