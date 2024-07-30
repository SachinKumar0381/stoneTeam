import React from 'react';

const OurTeamBanner = () => {
    return (
        <div style={{backgroundColor: "#223b57", padding:"100px 0px", position:"relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "30px"}}>
                <hr style={{ border: "1px solid #d7d5d5", width: "5%", height: "0px" }} />
                <h1 style={{ whiteSpace: "nowrap", flexShrink: 0, color: "white", fontSize: "5vw", margin:"0px" }}>Our Team</h1>
                <hr style={{ border: "1px solid #d7d5d5", width: "80%", height: "0px" }} />
            </div>
            <div style={{marginLeft:"7%", width:"50%"}}>
                <p style={{color:"white", fontSize:"20px"}}>
                    At CP Partners, we challenge ourselves to be the agents we’d want to work with. The results speak for themselves. While our team is obsessive about giving every client white-glove personal attention, we’re also insanely productive. CP Partners does more business per agent than almost any other firm in our category.
                </p>
            </div>
            <div style={{position:"absolute",right:"20%", top:"100px", width:"7%"}}>
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-background"
    width="100%"
    height="100%"
    viewBox="0 0 99.081 143.17"
  >
    <g id="arrow" data-name="arrow" transform="translate(1.414 1)">
      <path
        id="triangle"
        data-name="triangle"
        d="M453.885,1099.033l47.057,47.057,49.2-49.2"
        transform="translate(-453.886 -1004.919)"
        fill="none"
        stroke="#efefef"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ strokeDasharray: '136.128', strokeDashoffset: '0' }}
      />
      <line
        id="line"
        data-name="line"
        y1="141.17"
        transform="translate(47.057)"
        fill="none"
        stroke="#efefef"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ strokeDasharray: '141.17', strokeDashoffset: '0' }}
      />
    </g>
  </svg>
  </div>
  <div style={{position:"absolute", top:"50px", right:"10%", width:"20%"}}>
  <svg
      className="circle-background"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 457.595 457.595"
    >
      <circle
        id="circle-id-33127268537"
        data-name="circle-id-33127268537"
        cx="227.797"
        cy="227.797"
        r="227.797"
        transform="translate(1 1)"
        fill="none"
        stroke="#efefef"
        strokeMiterlimit="10"
        strokeWidth="2"
        style={{ strokeDasharray: '1430.71', strokeDashoffset: '0' }}
      />
    </svg>
    </div>
        </div>

    );
};

export default OurTeamBanner;