import React from "react";
import { Card } from "react-bootstrap";

const InvestorListCard = ({slugName, name, profileType, capital, friends, followedStartups, avatar}) => {
  return (
    <div className="col-lg-4 col-xl-4 mb-4">
        <div className="card mb-4">
            <div className="card-body">
                <div className="ul-widget-card__title-info text-center mb-3">
                    {name && <p className="m-0 text-24">{name}</p>}
                    {profileType && <p className="text-muted m-0">{profileType}</p>}
                </div>
                <div className="user-profile mb-4">
                    <div className="ul-widget-card__user-info">
                    <img className="profile-picture avatar-lg mb-2" src={avatar} alt="alt" />

                    </div>
                </div>
            
                <div className="ul-widget-card__full-status mb-3">
                    <div className="ul-widget-card__status1">{ (capital || capital === 0) && <span>${capital}</span>}<span className="text-mute">Capital</span></div>
                    <div className="ul-widget-card__status1">{(friends || friends === 0 ) && <span>{friends}</span>}<span className="text-mute">Friends</span></div>
                    <div className="ul-widget-card__status1">
                        {(followedStartups || followedStartups === 0) && <span>{followedStartups}</span>}
                        <span className="text-mute">Startups followed</span>
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