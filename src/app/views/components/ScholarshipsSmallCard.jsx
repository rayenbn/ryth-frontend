import React from "react";
import { Card, CardImg } from "react-bootstrap";
// import { profileImg } from "/assets/images/faces/1.jpg";

const ScholarshipsSmallCard = ({ universityName, scholarType, img }) => {
  return (
  
    <div className="ul-widget4__item ul-widget4__users">
        <div className="ul-widget4__img">
        <img id="userDropdown" src={img} alt=""  />

        </div>
        <div className="ul-widget2__info ul-widget4__users-info">
            {scholarType && <a className="ul-widget2__title" href="">{scholarType} </a> }
            {scholarType && <span className="ul-widget2__username" href="#">{universityName}</span>}
        </div>
        <div className="ul-widget4__actions">
            <a className="btn btn-outline-primary m-1" href="" >Apply</a>
        </div>
    </div>


  );
};


export default ScholarshipsSmallCard;
