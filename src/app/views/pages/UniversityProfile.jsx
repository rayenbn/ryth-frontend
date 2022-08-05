import axios from "axios";
import React, { Component, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import UniversityProfileHeader from "../components/university-profile/UniversityProfileHeader";
import UniversityProfileMainContent from "../components/university-profile/UniversityProfileMainContent";
import { getUniversity } from '../../redux/actions/UniversityActions'

function UniversityProfile () {
  const university = useSelector((state) => state.university.selectedUniversity)
  const {universityId} = useParams();
  const dispatch = useDispatch();

  const fetchUniversityDetail = async () => {
    const response = await axios.get(`universities/${universityId}`)
                    .catch((err) => {
                      console.log("err ", err);
                    });
                    console.log(response.data.data);
      dispatch(getUniversity(response.data.data))
  };

  useEffect(() => {
    if(universityId && universityId !== "") fetchUniversityDetail();
  },[universityId])

    return (
      <>
        {
          university && 
          <>
                <UniversityProfileHeader 
                  coverImg={ university.bg_image[0].url }
                  logo={ university.logo[0].url }
                  name={ university.name }
                  location={ university.location }
                />

                <UniversityProfileMainContent
                  name={ university.name }
                  desc={ university.desc }
                  scholarships={ university.scholarships }
                  logo={ university.logo[0].url }
                />
          </>
        }
      </>
    );
}

// const mapStateToProps = state => {
//   return {
//     university: state.university.university
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getUniversity: () => dispatch(getUniversity())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UniversityProfile);
export default UniversityProfile;
