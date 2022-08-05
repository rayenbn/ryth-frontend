import React from "react";
import { Card } from "react-bootstrap";

const StartupFilterCard = () => {
  return (
      <Card className="col-12 mb-4">
        <Card.Body> 
            <div className="card-title mb-3"><b>Search for a Startup</b></div>
            <form id="startups_search_form">
                <div className="row">
                    <div className="col-md-4 form-group row mb-3 mr-2 ml-2">
                        <label className=" col-form-label" htmlFor="country"><b>Country</b></label>
                        
                            <select className="form-control form-control-rounded" name="country" id="country">
                                <option value="" defaultValue>Choose</option>
                                <option value="country 1">country 1</option>
                                <option value="country 2">country 2</option>
                            </select>
                        
                    </div>
                    
                    <div className="col-md-4 form-group row mb-3 mr-2">
                        <label className=" col-form-label" htmlFor="industry"><b>Industry</b></label>
                        
                            <select className="form-control form-control-rounded" name="industry" >
                                <option value="" defaultValue>Choose</option>
                                <option value="industry 1">industry 1</option>
                                <option value="industry 2">industry 2</option>
                            </select>
                        
                    </div>

                    <div className="col-md-4 form-group row mb-3">
                        <label className="col-form-label"  htmlFor="company_name"><b>Company Name</b></label>
                        
                            <input className="form-control form-control-rounded" name="company_name" type="text" placeholder="Startup name" />
                        
                    </div>

                    <div className="col-md-12">
                        <button type="button" id="filter_startups" className="btn btn-primary float-right">Filter</button>
                    </div>
                </div>
            </form>
        </Card.Body>
      </Card>
      
  );
};

export default StartupFilterCard;