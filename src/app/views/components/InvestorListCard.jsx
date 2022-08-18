import React from "react";
import { Card } from "react-bootstrap";

const InvestorListCard = ({slugName, name, profileType, capital, friends, followedStartups, avatar, preferredIndustries}) => {

  return (
    <div className="col-lg-4 col-xl-4 mb-4">
        <div className="card mb-4">
            <div className="card-body">
            <div className="row justify-content-left" >
            <div className="user-profile mb-4">
                    <div className="ul-widget-card__user-info">
                    <img className="profile-picture avatar-lg mb-1" src={avatar} alt="alt"  />

                    </div>
                    </div>

                <div className="ul-widget-card__title-info text-center mb-3">
                <div style={{marginLeft: 20, marginTop: 8}} className="row justify-content-center" >
                    {name && <p className="m-0 text-18">{name}</p>}
                </div>
                <div  style={{marginLeft: 20, marginTop: 3}}  className="row justify-content-center" >
                    {profileType && <p className="text-muted m-0">{profileType}</p>}
                </div>
                
                  </div> 
                </div>
            
                <div className="ul-widget-card__full-status mb-3">
                
                    <div className="ul-widget-card__title-info text-left mb-3"><p className="m-0 text-16">preferred industries</p> </div>
                    </div>
                <div className="ul-widget-card__full-status mb-3">   
                    <div className="ul-widget-card__title-info text-left mb-3">
                    <span className="badge badge-pill badge-outline-primary m-1">Artificial intelligence</span>  
                    <span className="badge badge-pill badge-outline-primary m-1">Business tools</span>  
                    <span className="badge badge-pill badge-outline-primary m-1">Edutech</span>  

                    </div>
                </div>
                <div className="mt-2">
                    <a href={`/investor/${slugName}`} className="btn btn-primary btn-block m-1" >View Profile</a>

                </div>
            </div>
        </div>
    </div>
      
  );
};

export default InvestorListCard;