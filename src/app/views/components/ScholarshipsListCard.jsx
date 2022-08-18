import React from "react";

const ScholarshipsListCard = ({ id, name, degree, img, scholarType, teachingLang, scholarDuration, scholarCoverage }) => {
  return (
  
        <div className="ul-widget5__item">
            <div className="ul-widget5__content">
                <div className="ul-widget5__pic">
                    { img && <img src={img} alt="Third slide" />}
                </div>
                <div className="ul-widget5__section">
                    { name && <a className="ul-widget4__title" href="">{name}</a>}
                    { degree && <p className="ul-widget5__desc">{degree}</p>}
                    <div className="ul-widget5__info">
                        <span>Major:</span>{ scholarType && <span className="text-primary">{scholarType}</span>}
                        <span>Language:</span>{ teachingLang && <span className="text-primary">{teachingLang}</span>}
                    </div>
                    <div className="ul-widget5__info">
                        <span>Duration:</span>{ scholarDuration && <span className="text-primary">{scholarDuration}</span>}
                        <span>Coverage:</span>{ scholarCoverage && <span className="text-primary">{scholarCoverage}</span>}
                    </div>
                </div>
            </div>
            <div className="ul-widget5__content">
                <div className="ul-widget5__stats">
                <a className="btn btn-raised btn-raised-primary m-1" href={`/scholarship/${id}`}>Apply</a>
                </div>
            </div>
        </div>         

  );
};


export default ScholarshipsListCard;
