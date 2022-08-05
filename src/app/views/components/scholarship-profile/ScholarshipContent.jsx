import React from "react";
import { Card } from "react-bootstrap";

const ScholarshipContent = ({logo, universityName, degree, scholarType, teachingLang, scholarDuration, scholarCoverage,desc}) => {
  return (
    
    <>
      <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="ul-widget5__pic">{logo && <img src={logo} alt="Third slide" />}</div>
                    </div>
                    <div className="col-md-9">
                        {universityName && <h5 className="card-title">{universityName}</h5>}
                        {degree && <p className="ul-widget5__desc">{degree}</p>}
                        <div className="ul-widget5__info"><span>Type:</span>{scholarType && <span className="text-primary">{scholarType}</span>}<span>Language:</span>{teachingLang && <span className="text-primary">{teachingLang}</span>}</div>
                        <div className="ul-widget5__info"><span>Duration:</span>{scholarDuration && <span className="text-primary">{scholarDuration}</span>}<span>Coverage:</span>{scholarCoverage && <span className="text-primary">{scholarCoverage}</span>}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-body ">
                <h5 className="card-title">Scholarship Coverage</h5>
                {desc && <p className="card-text">{desc}</p>}
            </div>
        </div>
    </>
    
  );
};

export default ScholarshipContent;