import React from "react";
import { Card } from "react-bootstrap";


const StartupCommentSection = () => {
  return (
    <div>
        
        <Card className="w-100">
                <Card.Body className="p-4">
                 <div>
                   <p className="m-0">comment section added</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center"><div>

                    <form action="#" method="POST" >
                          <input name="postid" type="hidden" value="id" />
                             <span  className="link-muted">
                     
                                <button className="btn-custom" style={{all: 'unset',cursor: 'pointer'}} type="button" 
                                id="likebtn2"
                                // onClick="giveLike(id)"
                                >
                                <i className="i-Like  text-primary " ></i>
                                </button> 
                                <span class="ml-1" >2</span>

                            </span>
                        </form>
                        
                      </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

    </div>

   
  );
};

export default StartupCommentSection;