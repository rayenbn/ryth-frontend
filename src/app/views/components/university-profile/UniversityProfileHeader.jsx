import React from "react";
import { Card } from "react-bootstrap";

const UniversityProfileHeader = ({coverImg , logo, name, location}) => {
  return (
    
    <div className="card user-profile o-hidden mb-4">
        <div className="header-cover" style={{backgroundImage: `url(${coverImg})`}}></div>
        <div className="user-info">
            {logo && <img className="profile-picture avatar-lg mb-2" src={logo} alt="" />}
            {name && <p className="m-0 text-24">{name}</p>}
            {location && <p className="text-muted m-0">{location}</p>}
        </div>
    </div>
    
  );
};

export default UniversityProfileHeader;