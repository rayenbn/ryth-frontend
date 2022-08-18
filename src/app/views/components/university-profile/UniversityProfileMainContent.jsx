import React from "react";
import { Card } from "react-bootstrap";
import ScholarshipsListCard from "../ScholarshipsListCard";

const UniversityProfileMainContent = ({desc, name, scholarships, logo}) => {
    
  return (
    
    <div className="row">
    <div className="col-md-4">
        <div className="card mb-4">
            <div className="card-body ">
                {name && <h5 className="card-title">About {name}</h5>}
                {desc && <p className="card-text">{desc}</p>}
                
            </div>
        </div>

    </div>
    <div className="col-md-8 mb-4">
        <div className="card">
            <div className="card-body">
                <div className="ul-widget__head">
                    <div className="ul-widget__head-label">
                        <h3 className="ul-widget__head-title mb-4">Scholarships List</h3>
                    </div>
                </div>
                <div className="ul-widget__body">
                    <div className="tab-content">
                        <div className="tab-pane active show" >
                            <div className="ul-widget5">
                                { scholarships &&
                                    scholarships.map(scholarship => 
                                        <ScholarshipsListCard 
                                        key={ scholarship.id }
                                        id={ scholarship.id }
                                        name={name}
                                        degree={ scholarship.degree.name }
                                        img={logo}
                                        scholarType={ scholarship.scholar_type }
                                        teachingLang={ scholarship.teaching_lang }
                                        scholarDuration={ scholarship.scholar_duration }
                                        scholarCoverage={ scholarship.scholar_coverage }
                                        />
                                    )}
                           
                                    { !scholarships && <p>No scholarships are open for this moment!</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>
    
  );
};

export default UniversityProfileMainContent;