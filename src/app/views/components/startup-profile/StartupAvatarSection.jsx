import React from "react";
import { Card } from "react-bootstrap";

const StartupAvatarSection = ({avatar,companyName,country}) => {
  return (
    <div className="row justify-content-md-center">
        <div className="col-lg-10 col-md-10 mb-4">
            <div className="card mb-4" style={{boxShadow: 'unset'}}>
                <div className="row no-gutters">
                        <div className="mx-4" style={{position: 'relative',width: '100x'}}>
                            <img className="rounded-circle " src={avatar} alt="" />
                            {/* @if( $startup->client_id == auth()->user()->id) */}
                            <div className="p-image">
                                <i className="i-Camera upload-profile-image-button"></i>
                                <input name="logo" className="profile-image-upload" id="profile-image-upload" type="file" accept="image/*"/>
                            </div>
                            {/* @endif */}
                        </div>

                        <div className="col-xs-12 " style={{display: 'grid',alignContent: 'center'}}>
                            {companyName && <p className="ml-4 mr-0 mb-0  text-24">{companyName}</p>}
                            {country && <p className="text-muted ml-4 mb-4">{country}</p>}
                        </div>
                </div>
                <button className="btn btn-raised btn-raised-secondary m-1" type="button" 
                    style={{position:'absolute',right: '10px',bottom: '0',display: 'flex',zIndex: '9'}} >Follow</button>
            </div>
        </div>
    </div>
  );
};

export default StartupAvatarSection;