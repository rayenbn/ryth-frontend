import React from "react";
import { Card } from "react-bootstrap";

const InvestorFilterCard = () => {
  return (
      <Card className="mb-4">
        <Card.Body>
        <div className="card-title mb-3"><b>Search for an Investor</b></div>
            <form id="investors_search_form">
                <div className="row">
                    <div className="col-md-4 form-group row mb-3 mr-2 ml-2">
                        <label className=" col-form-label" htmlFor="country"><b>Country</b></label>
                        
                            <select className="form-control form-control-rounded" name="country" id="country">
                                <option value="" defaultValue>Any</option>
                                <option value="country1">country1</option>
                                <option value="country2">country2</option>
                            </select>
                       
                    </div>
                    
                    <div className="col-md-4 form-group row mb-3 mr-2">
                        <label className=" col-form-label" htmlFor="industry"><b>Industry</b></label>
                       
                            <select className="form-control form-control-rounded" name="industry" >
                                <option value="" defaultValue>Any</option>
                               
                                <option value="industry1">industry1</option>
                                <option value="industry2">industry2</option>
                                
                            </select>
                        
                    </div>

                    <div className="col-md-4 form-group row mb-3">
                        <label className="col-form-label"  htmlFor="name"><b>Name</b></label>
                       
                            <input className="form-control form-control-rounded" name="name" type="text" placeholder="Investor name" />
                       
                    </div>

                    <div className="col-md-12">
                        <button type="button" id="filter_investors" className="btn btn-primary float-right">Filter</button>
                    </div>
                </div>
            </form>
        </Card.Body>
      </Card>
      
  );
};

export default InvestorFilterCard;