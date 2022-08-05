import React, { Component, useEffect } from "react";
import { SimpleCard } from "@gull";
import ScholarshipsFilterCard from '../components/ScholarshipsFilterCard';
import ScholarshipsListCard from '../components/ScholarshipsListCard';
import { connect } from "react-redux";
import { getScholarshipList } from '../../redux/actions/ScholarshipActions'

function ScholarshipsPage({scholarships, getScholarshipList}) {

    useEffect(() => {
      getScholarshipList()
    },[])

    return (

      <div className="row">
          <div className="col-xl-8 col-md-8 col-xs-12 mb-4">
              <div className="card">
                  <div className="card-body">
                        <div className="ul-widget__head">
                            <div className="ul-widget__head-label">
                                <h3 className="ul-widget__head-title mb-4">Scholarships List</h3>
                            </div>
                        </div>
                        <div className="ul-widget__body">

                        <div className="tab-content">
                          <div className="tab-pane active show" >
                              <div className="ul-widget5">
                                  {
                                    scholarships && scholarships.map(scholarship => 
                                    <ScholarshipsListCard 
                                      key={scholarship.id}
                                      id={scholarship.id}
                                      name={ scholarship.university.name } 
                                      degree={scholarship.degree.name }
                                      img={ scholarship.university.logo[0].url }
                                      scholarType={ scholarship.scholar_type }
                                      teachingLang={ scholarship.teaching_lang }
                                      scholarDuration={ scholarship.scholar_duration }
                                      scholarCoverage={ scholarship.scholar_coverage }
                                    />
                                    )
                                  }
                                 </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-md-4 col-xs-12  mb-4">
          <ScholarshipsFilterCard />
        </div>
      </div>

          
    );
}


const mapStateToProps = state => {
  return {
    scholarships: state.scholarship.scholarshipsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getScholarshipList: () => dispatch(getScholarshipList())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScholarshipsPage);

