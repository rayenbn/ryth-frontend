import React, { Component, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getUniversitiesList } from '../../redux/actions/UniversityActions'
import { SimpleCard } from "@gull";
import UniversityFilterCard from '../components/UniversityFilterCard';
import UniversityListCard from '../components/UniversityListCard';

function UniversityPage ({universities, getUniversitiesList}) {

    useEffect(() => {
      getUniversitiesList()
    },[])

    return (
      <div>

            <div className="col-xl-12 col-md-12 mb-4">
              
              <UniversityFilterCard />
              
            </div>
          
            <div className="col-xl-12 col-md-12 mb-4 row">
              {
                universities &&
                universities.map(university => 
                <UniversityListCard 
                  key={university.id}
                  name={university.name} 
                  location={university.location}
                  scholarshipsCount={42}
                  // universityName="Zhejiang A & F University"
                  logo={university.logo[0].url}
                  id={university.id}
                />
                )
              }
             
            </div>
      </div>
    );
  }
// }

const mapStateToProps = state => {
  return {
    universities: state.university.universitiesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUniversitiesList: () => dispatch(getUniversitiesList())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UniversityPage);
