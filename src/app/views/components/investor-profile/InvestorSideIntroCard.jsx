import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const InvestorSideIntroCard = ({residenceLocation, dateOfBirth, email, followers}) => {
  return (
    <div className="card mb-4">
        <div className="card-body">
            <div className="card-title"><b>Intro</b></div>
            <div className="ul-widget-app__browser-list">
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Edit-Map text-22 mr-1"></i> Lives In {residenceLocation && <b className="text-dark ml-2">{residenceLocation}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Calendar text-22 mr-1"></i> Birth Date { dateOfBirth && <b className="text-dark ml-2">{dateOfBirth}</b>}</p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-MaleFemale text-22 mr-1"></i> Email {email && <b className="text-dark ml-2">{email}</b>}</p>
                </div>
               
                <div className="card-title"><b>Followers</b></div>
                <div className="ul-widget-app__work-list-img mt-4">
                    {
                        followers && followers.map(follower => 
                            <Link to={`/profile/${follower.slug_name}`} key={follower.id} >
                                <img className="profile-picture avatar-sm rounded-circle" src={follower.profile_photo} alt="alt" />
                            </Link>
                        )
                    }
                </div>
                <div className="mt-5">
                    <a className="btn btn-primary m-1" href="{{route('client.user-profile.friends', $client->id)}}" type="button">All Followers</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InvestorSideIntroCard;