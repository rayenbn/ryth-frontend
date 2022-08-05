import React, { Component, useEffect } from "react";
import { SimpleCard } from "@gull";
import ScholarshipContent from '../components/scholarship-profile/ScholarshipContent';
import ScholarshipInstructionCard from '../components/scholarship-profile/ScholarshipInstructionCard';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getScholarship } from '../../redux/actions/ScholarshipActions'
import axios from "axios";

function ScholarshipProfile() {

    const scholarship = useSelector((state) => state.scholarship.selectedScholarship);
    const { scholarshipId } = useParams();
    const dispatch = useDispatch();

    const fetchScholarshipDetail = async () => {
      const response = await axios.get(`scholarships/${scholarshipId}`)
                      .catch((err) => {
                        console.log("err ", err);
                      });
        dispatch(getScholarship(response.data.data))
    };

    useEffect(() => {
      if(scholarshipId && scholarshipId !== "") fetchScholarshipDetail();
    },[scholarshipId]);

    return (
      <>
        {scholarship && 
          <div className="row">
              <div className="col-md-8">
                    <ScholarshipContent 
                      logo={ scholarship.university.logo[0].url }
                      universityName={ scholarship.university.name }
                      degree={ scholarship.degree.name }
                      scholarType={ scholarship.scholar_type }
                      teachingLang={ scholarship.teaching_lang }
                      scholarDuration={ scholarship.scholar_duration }
                      scholarCoverage={ scholarship.scholar_coverage }
                      desc={ scholarship.desc }
                    />
              </div>
              <div className="col-md-4">
                  <ScholarshipInstructionCard />
              </div>
          </div>
        
        }
      </>

    );
}

export default ScholarshipProfile;
