import React from "react";
import { Card } from "react-bootstrap";

const StartupProfileSideBar = ({Bio,Industry,teamMembersCount}) => {
  return (
        <>
        <div className="card mb-4">
            <div className="card-body">
                {/* <!-- begin::widget-stats-1--> */}
                <div className="ul-widget1">
                    <div className="ul-widget__item">
                        <div className="ul-widget__info">
                            <h3 className="ul-widget1__title">About</h3>
                            {Bio && <span className="ul-widget__desc text-mute">{Bio}</span>}
                        </div>
                    </div>

                    <div className="ul-widget__item">
                        <div className="ul-widget__info">
                            <h3 className="ul-widget1__title">Industry</h3>
                            {Industry && <span className="ul-widget__desc text-mute">{Industry}</span>}
                        </div>
                    </div>
                    
                    <div className="ul-widget__item">
                        <div className="ul-widget__info">
                            <h3 className="ul-widget1__title">Introduction Video</h3>

                             {/* @if($startup->video_intro)
                            <video controls width="100%" controlsList="nodownload">
                                <source src="/{{ $startup->video_intro }}"
                                        type="video/mp4">
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                            @else */}
                                {/* @if($startup->client_id == auth()->user()->id) */}
                                <button className="btn btn-outline-info" type="button" data-toggle="modal" data-target=".upload_intro_video">Upload Video</button>
                                {/* @endif */}
                            {/* @endif */}
                        </div>
                    </div>
                    
                </div>
                {/* <!-- end::widget-stats-1--> */}

            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h3 className="heading">Team</h3>
                {teamMembersCount && <p className="text-mute">{teamMembersCount} Member</p>}
                <div className="ul-widget-app__work-list-img mt-4">
                    <a href="/profile">
                        <img className="profile-picture avatar-sm rounded-circle" src="/assets/images/faces/face-4.jpg" alt="alt" />
                    </a>
                    <a href="/profile">
                        <img className="profile-picture avatar-sm rounded-circle" src="/assets/images/faces/face-6.jpg" alt="alt" />
                    </a>
                </div>
                {/* <div className="mt-5">
                    <!-- <button className="btn btn-primary m-1" type="button" data-toggle="modal" data-target="#exampleModal">
                        View team members
                    </button> -->
                    <!-- <a className="btn btn-primary m-1" href="#" type="button">View team php artisan members</a> -->
                </div> */}
            </div>
        </div>
        </>
  );
};

export default StartupProfileSideBar;