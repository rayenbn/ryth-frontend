import React, { Component } from "react";
import StartupProfileHeader from "../components/startup-profile/StartupProfileHeader";
import PostForm from "../components/PostForm";
import StartupProfileSideBar from "../components/startup-profile/StartupProfileSideBar";
import StartupProfileTabs from "../components/startup-profile/StartupProfileTabs";

class StartupProfile extends Component {
  render() {
    return (
      <>
          <StartupProfileHeader 
            coverImg="/assets/images/photo-wide-5.jpeg" 
            avatar="/assets/images/faces/face-2.jpg"
            companyName="Afroline creative group ltd"
            country="Tunisia"
            />

          <div className="row justify-content-md-center">
              <div className="col-lg-3 col-md-3 mb-4">
                <StartupProfileSideBar 
                    Bio="Lorem here is text Lorem here is text Lorem here is text Lorem here is text"
                    Industry="Fintech"
                    teamMembersCount={3432}
                />
                </div>
              <div className="col-lg-7 col-md-7 mb-4">
                  <PostForm />
                  <StartupProfileTabs />
              </div>
          </div>

      </>
    );
  }
}

export default StartupProfile;
