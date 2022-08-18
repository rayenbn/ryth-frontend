import React, { Component, useEffect } from "react";
import { SimpleCard } from "@gull";
import InvestorFilterCard from '../components/InvestorFilterCard';
import InvestorListCard from '../components/InvestorListCard';
import { connect } from "react-redux";
import { getInvestorsList } from '../../redux/actions/InvestorActions'

function InvestorsPage ({investors, getInvestorsList}) {

    useEffect(() => {
      getInvestorsList()
    },[])

    return (
      <>
            <InvestorFilterCard />

            <div className="col-xl-12 col-md-12 mb-4 px-0 row">
              {investors && investors.map(investor =>
                <InvestorListCard 
                key={ investor.id }
                slugName={ investor.slug_name }
                name={ investor.name }
                profileType="Investor"
                capital={ investor.capital }
                friends={ investor.friends_count }
                followedStartups={ investor.followed_startups_count }
                avatar={ investor.profile_photo }
                />
              )}
              { !investors && <p>No Investors found</p>}
            </div>
      </>
    );
}

const mapStateToProps = state => {
  return {
    investors: state.investor.investorsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInvestorsList: () => dispatch(getInvestorsList())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvestorsPage);
