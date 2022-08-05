import React from "react";
import { Card, CardImg } from "react-bootstrap";
// import { profileImg } from "/assets/images/faces/1.jpg";

const UniversityCard = ({ name, address, img }) => {
  return (
  
        <div className="card mb-2">
            <div className="card-body">
                <div className="ul-widget4__item ul-widget4__users p-0" >
                    <div className="ul-widget4__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="ul-widget2__info ul-widget4__users-info">
                    { name && <a className="ul-widget2__title" href="">{name}</a>}
                    { address && <span className="ul-widget2__username" href="">{address}</span>}
                </div>
                </div>
            </div>
        </div>

  );
};


export default UniversityCard;
