import React from "react";
import { Card } from "react-bootstrap";

const UserProfileSideBar = ({residenceLocation, dateOfBirth, email, followedStartups}) => {
  return (
    <div className="card mb-4">
        <div className="card-body">
            <div className="card-title"><b>Intro</b></div>
            <div className="ul-widget-app__browser-list">
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Edit-Map text-22 mr-1"></i> Lives In 
                    {residenceLocation && <b className="text-dark ml-2">{residenceLocation}</b>}
                    </p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-Calendar text-22 mr-1"></i> Birth Date 
                    {dateOfBirth && <b className="text-dark ml-2">{dateOfBirth}</b>}
                    </p>
                </div>
                <div className="mb-4" style={{display: 'flex'}}>
                    <p className="text-light mb-1"><i className="i-MaleFemale text-22 mr-1"></i> Email
                    {email && <b className="text-dark ml-2">{email}</b>}
                    </p>
                </div>
            
                <div className="card-title" style={{display: 'flex',justifyContent: 'space-between'}}><b>Friends</b>
                    <a href="{{route('client.user-profile.friends', $client->id)}}"><span className="text-12 font-weight-300">All Friends</span></a>
                </div>
                <div className="ul-widget-app__work-list-img mt-4">
                    {/* @foreach($client->friends as $friend) */}
                    <a href="{{route('client.user-profile', $friend->slug_name)}}">
                        <img className="profile-picture avatar-sm rounded-circle" src="/assets/images/faces/face-2.jpg" alt="alt" />
                    </a>
                    {/* @endforeach */}
                </div>
            

                <div className="card-title mt-4">{followedStartups && <b>following {followedStartups} startup</b>}</div>
                <div className="ul-widget-app__work-list-img mt-4">
                    {/* @foreach($client->followedStartups as $startup) */}
                    <a href="{{ route('client.startup.show', [$startup->slug_name]) }}">
                        <img className="profile-picture avatar-sm rounded-circle" src="/assets/images/faces/face-3.jpg" alt="alt" />
                    </a>
                    {/* @endforeach */}
                </div>
            

            </div>
        </div>
    </div>
  );
};

export default UserProfileSideBar;