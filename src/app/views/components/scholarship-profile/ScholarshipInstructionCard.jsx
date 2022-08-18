import React from "react";
import { Card } from "react-bootstrap";

const ScholarshipInstructionCard = () => {
  return (
    
    <>
         <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">How to Apply</h4>
                <p className="card-text">
                <span className="badge badge-success  m-2">Step 1:</span> Click the "Apply Now" button above and pay scholarship application and service fee (all available payment methods).
                </p>
                <p className="card-text"><span className="badge badge-success  m-2">Step 2:</span> Wait for the payment confirmation, then our counselor will provide documents guidance (including the application form).
                </p>
                <p className="card-text">
                <span className="badge badge-success  m-2">Step 3:</span> Submit documents and wait for the result and admission documents (including admission letter, visa letter).
                </p>
                <br />
                <p className="card-text">
                Deadline for Payment: <span style={{color:'red'}}><b>Feb 28, 2021</b></span>
                </p>
                <p className="card-text">
                Deadline for Documents: <span style={{color:'red'}}><b>July 28, 2021</b></span>
                </p>
                <p className="card-text">
                Application & Service Fee: <span style={{color:'red'}}><b>$500 </b></span>
                
                </p>

                <a href="#" className="btn btn-outline-primary m-1" type="button">Apply now</a>
            </div>
        </div>
    </>
    
  );
};

export default ScholarshipInstructionCard;