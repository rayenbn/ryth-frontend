import React from "react";
import { Card, CardImg } from "react-bootstrap";
// import { profileImg } from "/assets/images/faces/1.jpg";

const StartupSideCard = ({ CompanyName, industry, img }) => {
  return (
  
        <div className="ul-widget4__item ul-widget4__users">
            <div className="ul-widget4__img">
                <img className="profile-picture avatar-sm rounded-circle" style={{width: '2.5rem',height: '2.5rem'}} 
                src={img} alt="{{ $startup->profile_photo }}" />
            </div>
            <div className="ul-widget2__info ul-widget4__users-info">
                { CompanyName && <a className="ul-widget2__title" href="">{CompanyName} </a>}
                {industry && <span className="ul-widget2__username" href="">{industry}</span>}
            </div>
        </div>

  );
};


export default StartupSideCard;
