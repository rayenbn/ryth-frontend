import React from "react";
import { Card } from "react-bootstrap";

const InvestorAvatarCard = ({name, profileType, profileImg, friendsCount, capital, followedStartupsCount, friendshipButtonName,friendshipButton}) => {

    return (
    <div className="card mb-4">
        <div className="card-body">
            <div className="ul-widget-card__title-info text-center mb-3">
            { name && <p className="m-0 text-24">{ name }</p>}
                {profileType && <p className="text-muted m-0">{profileType}</p>}
            </div>
            <div className="user-profile mb-4">
                <div className="ul-widget-card__user-info">
                    <div className="user-info" style={{marginTop: 'unset'}}>
                        <div className=" justify-content-center" style={{textAlign: 'center'}}>
                            <div className="small-12 medium-2 large-2 columns" style={{position: 'relative'}}>
                                <div className="circle">
                                    {/* User Profile Image */}
                                    {profileImg && <img className="profile-pic" src={profileImg} />}
                                </div>
                                {/* @if (auth()->user()->id == $client->id) */}
                                <div className="p-image">
                                    <i className="i-Camera upload-profile-image-button"></i>
                                    <input name="logo" className="profile-image-upload" id="profile-image-upload" type="file" accept="image/*"/>
                                </div>
                                {/* @endif */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ul-widget-card__full-status mb-3">
                <div className="ul-widget-card__status1"><span> {(capital || capital === 0) ?  '$' + capital : 'Not set'}</span><span className="text-mute">Capital</span></div>
                <div className="ul-widget-card__status1">{ (friendsCount || friendsCount === 0) && <span>{friendsCount}</span>}<span className="text-mute">Friends</span></div>
                <div className="ul-widget-card__status1">{(followedStartupsCount || followedStartupsCount === 0 ) && <span>{followedStartupsCount}</span>}<span className="text-mute">Startups followed</span></div>
            </div>
            { friendshipButtonName && <button className="btn btn-primary btn-block m-1" onClick={friendshipButton}>{friendshipButtonName}</button>}

        </div>
    </div>
  );
};

export default InvestorAvatarCard;