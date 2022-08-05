import React, { Component, useEffect } from "react";
import InvestorAvatarCard from "../components/investor-profile/InvestorAvatarCard";
import InvestorSideIntroCard from "../components/investor-profile/InvestorSideIntroCard";
import InvestorMainContentCard from "../components/investor-profile/InvestorMainContentCard"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getInvestor } from "../../redux/actions/InvestorActions";
import { addFriend } from "../../redux/actions/InvestorActions";
import { deleteFriendRequest } from "../../redux/actions/InvestorActions";
import { getInvestorFollowers } from "../../redux/actions/InvestorActions";

function UserInvestorProfile() {
  
    const investor = useSelector((state) => state.investor.selectedInvestor);
    const { investorSlugName } = useParams();
    const dispatch = useDispatch();
    
    const fetchInvestorDetail = async () => {
      const response = await axios.get(`investor/${investorSlugName}`)
                      .then( async (res) => {
                        dispatch(getInvestor(res.data.data))
                        const reqRes = await axios.get(`clients/profile/${res.data.data.id}/friends?prev=true`)
                                        .then((result) => {
                                          dispatch(getInvestorFollowers(result.data.data))
                                        })
                                        .catch((err) => {
                                          console.log("err ", err);
                                        });       
                      })
                      .catch((err) => {
                        console.log("err ", err);
                      });   
    };

    useEffect(() => {
      if(investorSlugName && investorSlugName !== "") fetchInvestorDetail();
    },[investorSlugName])

    const friendshipButton = (type, investorId) => {
      console.log('clicked');
        switch (type){
          case "Add friend": {dispatch(addFriend(investorId))}
          case "Remove friend": {dispatch(deleteFriendRequest(investorId))}
        }
    }

    return (
      <>

        <div className="row justify-content-md-center">

          <div className="col-lg-3 col-md-3 mb-4">
            {
              investor && 
              <InvestorAvatarCard 
                name={ investor.name }
                profileType={ investor.profile_type }
                profileImg={ investor.profile_photo } 
                friendsCount={ investor.friends_count }
                capital={ investor.capital }
                followedStartupsCount={ investor.followed_startups_count }
                friendshipButtonName = { investor.freindshipStatus }
                friendshipButton = { () => friendshipButton(investor.freindshipStatus, investor.id) }
              />
            }
              
            {
              investor && 
              <InvestorSideIntroCard 
                residenceLocation={ investor.residence_location }
                dateOfBirth={ investor.date_of_birth }
                email={ investor.email }
                followers={ investor.followers }
              />
            }
              

          </div>

          <div className="col-lg-7 col-md-7 mb-4">
          {
              investor && 
              <InvestorMainContentCard 
                profession={ investor.profession }
                residenceLocation={ investor.residence_location }
                gender={ investor.gender }
                dateOfBirth={ investor.date_of_birth }
                email={ investor.email }
                websiteUrl={ investor.website_url }
                linkedUrl={ investor.linked_url }
                preferredIndustries={investor.preferred_industries}
                Bio={ investor.bio }
              />
          }
          </div>
        </div>

      </>
    );
}

export default UserInvestorProfile;
