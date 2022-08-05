import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfileHeader from "../components/user-profile/UserProfileHeader";
import UserProfileSideBar from "../components/user-profile/UserProfileSideBar";
import UserProfileMainContent from "../components/user-profile/UserProfileMainContent"; 

class UserProfile extends Component {
  render() {
    return (
      <>


        <div className="row justify-content-md-center">
            <div className="col-lg-10 col-md-10 mb-4">
                <UserProfileHeader 
                  name="Johny"
                  proffesion="Full-stack developer"
                  coverImg="/assets/images/faces/2.jpg" 
                  avatar="/assets/images/faces/face-1.jpg"
                />
            </div>
        </div>


        <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-3 mb-4">
               <UserProfileSideBar 
                 residenceLocation="Kelbia"
                dateOfBirth="09-03-1994"
                email="rayenbn26@gmail.com"
                followedStartups={322}
               />
              
            </div>
            <div className="col-lg-7 col-md-7 mb-4">
                <UserProfileMainContent 
                  bio="Lorem some text description hereLorem some text description hereLorem some text description here" 
                  residenceLocation="China, Guangzhou" 
                  gender="Male" 
                  dateOfBirth="09-03-1994"
                  email="rayenbn26@gmail.com" 
                  websiteUrl="www.rayenbennasr.com" 
                  linkedUrl="www.linkedin.com" 
                  githubUrl="www.github.com"
                  startupsCount="746" 
                  companyName="Rythminno"
                  school="South china university"
                  profession="Full-stack developer"
                />
            </div>
        </div>

      </>
    );
  }
}

export default UserProfile;
