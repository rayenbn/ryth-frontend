import React, { Component, useEffect } from "react";
import { SimpleCard } from "@gull";
import StartupFilterCard from '../components/StartupFilterCard';
import StartupListCard from '../components/StartupListCard';
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getStartupsList } from '../../redux/actions/StartupsActions'

function StartupsPage ({startups, getStartupsList}) {
 
  useEffect(() => {
    getStartupsList()
  },[]) 

    return (
      <>
            <div className="col-xl-12 col-md-12 mb-4 row">
              <StartupFilterCard />
            </div>
            
            <div className="col-xl-12 col-md-12 mb-4 row justify-content-center">
              { startups && startups.map(startup => 
                <StartupListCard 
                  key={ startup.id }
                  slugName={ startup.slug_name }
                  companyName={ startup.company_name } 
                  industry={ startup.industry } 
                  country={ startup.country } 
                  jobsCount={321}
                  teamCount={ startup.team_count } 
                  avatar={ startup.profile_photo }
                />
              )}
            </div>
      </>
    );
}

const mapStateToProps = state => {
  return {
    startups: state.startup.startupsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStartupsList: () => dispatch(getStartupsList())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartupsPage);
