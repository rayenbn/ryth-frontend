import React from "react";
import { Card } from "react-bootstrap";

const UniversityFilterCard = () => {
  return (
      <Card className="mb-4">
        <Card.Body>
            <div className="card-title mb-3">Browse and Apply for chinese universities</div>
            <form id="universities_search_form">
                <div className="row">
            
                    <div className="col-md-6 form-group row mb-3">
                        <label className="col-sm-3 col-form-label" htmlFor="city"><b>City</b></label>
                        <div className="col-sm-9">
                            <select className="form-control form-control-rounded" name="city">
                                <option value="">Any</option>
                                    <option value="city1">city1</option>
                                    <option value="city2">city2</option>
                            </select>
                        </div>
                    </div>
                
                    <div className="col-md-6 form-group row mb-3">
                        <label className="col-sm-3 col-form-label"  htmlFor="university"><b>University</b></label>
                        <div className="col-sm-9">
                            <input className="form-control form-control-rounded" name="university" type="text" placeholder="Search by university name" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <button type="button" id="filter_universities" className="btn btn-primary float-right">Filter</button>
                    </div>
                </div>
            </form>
        </Card.Body>
      </Card>
      
  );
};

export default UniversityFilterCard;