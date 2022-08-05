import React from "react";
import { Card } from "react-bootstrap";

const ScholarshipsFilterCard = () => {
  return (
    <div className="card mb-4">
        <div className="card-body">
            <div className="card-title mb-3">Browse and Apply 2022 China Scholarships</div>
                <div className="row">
                    <form id="scholarship_search_form">
                    
                        <div className="col-md-12 form-group mb-3">
                            <label className="col-form-label"  htmlFor="program"><b>Program</b></label>
                                <input className="form-control form-control-rounded" id="program"  name="program" type="text" placeholder="Pick a program name" />
                        </div>

                        <div className="col-md-12 form-group mb-3" >
                            <label htmlFor="type"><b>Type:</b> </label>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="type" value="" /><span>All</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="type" value="full scholarship" /><span>Full Scholarship</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary">
                                    <input type="radio" name="type" value="partial scholarship" /><span>Partial Scholarship</span><span className="checkmark"></span>
                                </label>    
                            </div>
                        </div>
                        
                        <div className="col-md-12 form-group mb-3" >
                            <label htmlFor="coverage"><b>Coverage:</b> </label>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="coverage" value="" /><span>Any</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="coverage" value="tuition" /><span>Tuition</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="coverage" value="accommodation" /><span>Accommodation</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="coverage" value="living allowance" /><span>Living Allowance</span><span className="checkmark"></span>
                                </label>
                            
                            </div>
                        </div>

                        <div className="col-md-6 form-group  mb-3">
                            <label className="col-form-label"  htmlFor="city"><b>City</b></label>
                                <select name="city" className="form-control form-control-rounded">
                                    <option value="">Any</option>
                                        <option value="city 1">city 1</option>
                                        <option value="city 2">city 2</option>
                                </select>
                        </div>
                        <div className="col-md-6 form-group  mb-3">
                            <label className="col-form-label" htmlFor="university"><b>University</b></label>
                                <select name="university" className="form-control form-control-rounded">
                                    <option value="">Any</option>
                                        <option value="university name">university name</option>
                                        <option value="university name">university name</option>
                                </select>
                        </div>

                        <div className="col-md-12 form-group mb-3">
                            <label htmlFor="picker3"><b>Degree:</b> </label>
                            <div style={{display: 'flex', 'flexWrap': 'wrap'}}>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="degree" value="" /><span>All</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="degree" value="bachelor" /><span>Bachelor</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="degree" value="master" /><span>Master</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="degree" value="doctoral" /><span>Doctoral</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary">
                                    <input type="radio" name="degree" value="associate" /><span>Associate</span><span className="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 form-group mb-3" >
                            <label htmlFor="picker3"><b>Language:</b> </label>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="language" value="" /><span>All</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="language" value="chinese" /><span>Chinese</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary mr-4">
                                    <input type="radio" name="language" value="english" /><span>English</span><span className="checkmark"></span>
                                </label>
                                <label className="checkbox checkbox-outline-primary">
                                    <input type="radio" name="language" value="other" /><span>Other</span><span className="checkmark"></span>
                                </label>
                            </div>
                        </div>

                    
                        <div className="col-md-12">
                            <button type="button" id="filter_scholarships" className="btn btn-primary float-right">Search</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
      
  );
};

export default ScholarshipsFilterCard;