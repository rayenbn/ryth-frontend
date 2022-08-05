import React from "react";
import { Card } from "react-bootstrap";

const StartupListCard = ({companyName, industry, country, jobsCount, teamCount, avatar, slugName}) => {
  return (
    <div className="card col-md-3 col-4 col-12 mb-4  mr-4 " >
        <div className="card-body">
            <div className="ul-widget-card__title-info text-center mb-3">
                { companyName && <p className="m-0 text-24">{companyName}</p>}
                { industry && <p className="text-muted m-0">{ industry }</p>}
            </div>
            <div className="user-profile mb-4">
                <div className="ul-widget-card__user-info">
                <img className="profile-picture avatar-lg mb-2" src={avatar} alt="alt" />
                </div>
            </div>
            <div className="ul-widget-card__full-status mb-3">
            {country && <div className="ul-widget-card__status1"><span>{country}</span><span className="text-mute">Country</span></div>}
                <div className="ul-widget-card__status1">{ (jobsCount || jobsCount === 0) && <span>{jobsCount}</span>}<span className="text-mute">Jobs</span></div>
                <div className="ul-widget-card__status1">{ ( teamCount || teamCount=== 0 )&& <span>{teamCount}</span>}<span className="text-mute">Funds</span></div>
            </div>
            <div className="mt-2">
                <div className="row justify-content-center">
                    <a className="btn btn-primary btn-block m-1 col-5" href={`/startup/${slugName}`}>View</a>
                   
                   
                        {/* @if(!auth()->user()->isFollowingThisStartup($startup)) */}
                        <input type="hidden" name="buttonv" value="follow" />
                         {/* @else */}
                         <input type="hidden" name="buttonv" value="unfollow" />
                         {/* @endif */}
                        

                        <button className="btn btn-primary btn-block m-1 col-12" type="button" >
                        {/* @if(!auth()->user()->isFollowingThisStartup($startup)) */}
                            Follow
                        {/* @else */}
                            {/* Unfollow */}
                        {/* @endif */}
                        </button>

                </div>
            </div>
        </div>
    </div>
  );
};

export default StartupListCard;