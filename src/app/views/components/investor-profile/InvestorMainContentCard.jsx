import React from "react";
import { Card } from "react-bootstrap";

const InvestorMainContentCard = ({profession, residenceLocation, gender, dateOfBirth, email, websiteUrl, linkedUrl,preferredIndustries, Bio}) => {
  return (
    
    <div className="card mb-4">
    <div className="card-body">
        <div className="ul-widget__head __g-support v-margin ">
            <div className="ul-widget__head-label">
                <h3 className="ul-widget__head-title m-1"><b>Personal Information</b></h3>
            </div>
            <button className="btn btn-primary mb-2" type="button" data-toggle="modal" data-target=".edit-investor-profile-info">Edit Info</button>
        </div>
    
        <br />
        <div className="row">
            <div className="col-md-4 col-6">
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Face-Style-4 text-22 mr-1"></i> Profession {profession && <b className="text-dark ml-2">{profession}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Edit-Map text-22 mr-1"></i> Lives In { residenceLocation && <b className="text-dark ml-2">{residenceLocation}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Gender { gender && <b className="text-dark ml-2">{gender}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Calendar text-16 mr-1"></i> Birth Date { dateOfBirth && <b className="text-dark ml-2">{dateOfBirth}</b>}</p>
                </div>
            </div>
            <div className="col-md-4 col-6">
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-MaleFemale text-22 mr-1"></i> Email {email && <b className="text-dark ml-2">{email}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Cloud-Weather text-22 mr-1"></i> Website {websiteUrl && <b className="text-dark ml-2">{websiteUrl}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Linkedin-2 text-22 mr-1"></i> Linkedin {linkedUrl && <b className="text-dark ml-2">{linkedUrl}</b>}</p>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <h3 className="ul-widget__head-title m-1"><b>Preferred industries</b></h3>
              
                {preferredIndustries && preferredIndustries.map((industry, index) => 
                    <span className="badge badge-pill badge-outline-primary p-2 m-1" key={index}>{ industry } </span>
                )}


            </div>
        </div>
        <hr /><h4><b>Bio</b></h4>{Bio && <p className="mb-4">{Bio}</p>}
       
    </div>
</div>
  );
};

export default InvestorMainContentCard;