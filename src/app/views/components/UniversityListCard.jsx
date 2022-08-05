import React from "react";
import { Card } from "react-bootstrap";

const UniversityListCard = ({id, name, location, scholarshipsCount, universityName, logo}) => {
  return (
    <div className="card mb-4 col-8">
        <div className="card-body">
            <div className="row">
                <div className="col-md-3 pr-0 mr-0">
                    <div className="ul-widget5__pic">
                    { logo && <img src={logo} alt="Third slide" />}
                    </div>
                </div>
                <div className="col-md-6">
                    { name && <h2 className="mt-2">{name}</h2>}
                    { location && <p className="ul-widget5__desc" style={{fontSize: '1.2rem'}}>{location}</p>}
                    <div className="ul-widget5__info">
                        <span>Number of scholarships:</span>
                        { scholarshipsCount && <span className="text-primary"> {scholarshipsCount}</span>}
                        <span>Applications:</span>
                        { universityName && <span className="text-primary">{universityName}</span>}
                    </div>
                    
                </div>
                <div className="ul-widget5__content">
                    <div className="ul-widget5__stats">
                        <a className="btn btn-raised btn-raised-primary m-1" href={`university/`+id}>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UniversityListCard;