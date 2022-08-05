import React from "react";
import { Card } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import StartupProfileTimeline from "./StartupProfileTimeline";
import StartupProfileInfo from "./StartupProfileInfo";

const StartupProfileTabs = () => {
  return (

        <div className="mt-4">
            <Tabs
                defaultActiveKey="Feeds"
                className="card card-body justify-content-center profile-nav mb-4 p-3 nav-pills"
                style={{flexDirection: 'initial'}}
            >
                <Tab eventKey="Feeds" title="Feeds">
                    <StartupProfileTimeline 
                        avatar="/assets/images/faces/face-5.jpg"
                        companyName="Rythminno"
                        industry="Blockchain"
                        content="Lorem post content for startup Lorem post content for startup"
                        likesCount={755}
                        commentsCount={984}
                    />
                </Tab>
                <Tab eventKey="Profile" title="Profile">
                    <StartupProfileInfo 
                        description="Lorem herer for dexruiption about startup"
                        industry="Education"
                        country="Tunisia"
                        officeAddress="Rue habib bourghiba, tunis"
                        projectLevel="Prototype stage"
                        establishmentDate="10-12-2021"
                        websiteUrl="www.rythmino.com"
                    />
                </Tab>
                <Tab eventKey="Jobs" title="Jobs">
                    <div className="card mb-4">
                        <div className="card-body" >
                            <h2>No open job now!</h2>
                            <h4>Check Again in few days or follow us to get last updates about our news and open jobs.</h4>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
  );
};

export default StartupProfileTabs;