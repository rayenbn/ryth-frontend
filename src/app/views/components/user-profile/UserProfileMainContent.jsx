import React from "react";
import { Card } from "react-bootstrap";

const UserProfileMainContent = ({bio, residenceLocation, gender, dateOfBirth, email, websiteUrl, linkedUrl, githubUrl,startupsCount, companyName,
    school, profession}) => {
  return (
    <div className="card mb-4">
        <div className="card-body">
            <div className="ul-widget__head __g-support v-margin ">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title m-1"><b>Personal Information</b></h3>
                </div>
                <button className="btn btn-primary mb-2" type="button" data-toggle="modal" data-target=".edit-profile-info">Edit Info</button>
            </div>
            
            { bio && <p className="mb-4 mt-4">{bio}</p>}
            <div className="row">
                <div className="col-md-4 col-6">
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Face-Style-4 text-16 mr-1"></i> Profession</p>
                        {profession && <span>{profession}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Edit-Map text-16 mr-1"></i> Lives In</p>
                        {residenceLocation && <span>{residenceLocation}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Gender</p>
                        {gender && <span>{gender}</span>}
                    </div>
                
                </div>
                <div className="col-md-4 col-6">
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Calendar text-16 mr-1"></i> Birth Date</p>
                        {dateOfBirth && <span>{dateOfBirth}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Email</p>
                        { email && <span>{email}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Home1 text-16 mr-1"></i> School</p>
                        { school && <span>{school}</span>}
                    </div>
                </div>
                <div className="col-md-4 col-6">
                
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Cloud-Weather text-16 mr-1"></i> Website</p>
                        {websiteUrl && <span>{websiteUrl}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Linkedin text-16 mr-1"></i> Linked url</p>
                        {linkedUrl && <span>{linkedUrl}</span>}
                    </div>
                    <div className="mb-4">
                        <p className="text-primary mb-1"><i className="i-Globe text-16 mr-1"></i> Github url</p>
                        {githubUrl && <span>{githubUrl}</span>}
                    </div>
                </div>
            </div>
            <hr />
            <h4>{ startupsCount && <b>Enrolled in {startupsCount} Startups</b>}</h4>
            <div className="row">
                {/* @foreach ($client->startups as $startup) */}
                <div className="mt-2 mb-4 col-md-4 col-12" style={{justifyContent: 'normal'}}>
                    <img className="profile-picture avatar-sm rounded-circle" src="/assets/images/faces/face-4.jpg" alt="alt" />
                    <a href="{{ route('client.startup.show', [$startup->slug_name]) }}">
                    {companyName && <span className="text-15 ml-3">{companyName}</span>}
                    </a>
                </div>
                {/* @endforeach */}

            </div>
        </div>
    </div>
  );
};

export default UserProfileMainContent;