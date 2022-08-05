import React from "react";
import { Card } from "react-bootstrap";

const UserProfileHeader = ({name, proffesion, coverImg, avatar}) => {
  return (
    <div className="card user-profile o-hidden mb-4" style={{boxShadow: 'unset'}}>
        <div className="header-cover" style={{backgroundImage: `url(${coverImg})` }}>
            
            <button className="btn btn btn-outline-primary upload-cover-button m-2" 
                style={{position:'absolute',right: '10px',display: 'flex',zIndex: '9'}} type="button">
                <i className="i-Camera mr-2"></i> Change cover photo
            </button>
            
            <input name="cover_photo" className="cover-upload" id="cover-upload" type="file" accept="image/*"/>

        </div>
    
        <div className="user-info">
            <div className=" justify-content-center" style={{textAlign: 'center'}}>
                <div className="small-12 medium-2 large-2 columns" style={{position: 'relative'}}>
                    <div className="circle">
                        
                        { avatar && <img className="profile-pic" src={avatar} />}
                    </div>
                    
                    <div className="p-image">
                        <i className="i-Camera upload-profile-image-button"></i>
                        <input name="logo" className="profile-image-upload" id="profile-image-upload" type="file" accept="image/*" />
                    </div>
                    
                </div>
                <div className="text-center">
                    { name && <p className="m-0 text-24">{name}</p>}
                    { proffesion && <p className="text-muted mb-4">{proffesion}</p>}
                </div>
            
            </div>
        </div>

    </div>
  );
};

export default UserProfileHeader;