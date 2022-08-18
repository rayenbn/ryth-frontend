import React from "react";
import { Card } from "react-bootstrap";
import CommentForm from "../CommentForm";

const StartupProfileInfo = ({description,industry,country,officeAddress, projectLevel,establishmentDate,websiteUrl}) => {
  return (
    <>
        <div className="card mb-4">
            <div className="card-body">
                <div className="ul-widget__head __g-support v-margin ">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title">General Information</h3>
                </div>
                <button className="btn btn-primary mb-2" type="button" data-toggle="modal" data-target=".edit-startup-profile-info">Edit Info</button>
                
            </div>
                {/* <!-- <h4>Personal Information</h4> --> */}
                {description && <p className="mb-4 mt-4">{description}</p>}
                {/* <!-- <hr> --> */}
                <div className="row">
                    <div className="col-md-4 col-6">
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-Calendar text-16 mr-1"></i> Industry</p>{industry && <span>{industry}</span>}
                        </div>
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Country</p>{country && <span>{country}</span>}
                        </div>
                        
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Office Address</p>{officeAddress && <span>{officeAddress}</span>}
                        </div>
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-Edit-Map text-16 mr-1"></i> Establishment Date</p>{establishmentDate && <span>{establishmentDate}</span>}
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-Globe text-16 mr-1"></i> Project Level</p>{projectLevel && <span>{projectLevel}</span>}
                        </div>
                        <div className="mb-4">
                            <p className="text-primary mb-1"><i className="i-Cloud-Weather text-16 mr-1"></i> Website</p>{websiteUrl && <span>{websiteUrl}</span>}
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default StartupProfileInfo;