import React from "react";
import { Card } from "react-bootstrap";
import RichTextEditor from '../../../@gull/components/RichTextEditor';

const PostForm = () => {
  return (
    <>
      <Card >
        <Card.Body>
          <div className="input-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Write comment"
              aria-label="comment"
              // rows={4}
              style={{ height: 70 }}
            ></textarea>
          </div>
            <div className="input-group-append mt-4">
              <button
                className="btn btn-primary"
                type="button"
                id="button-comment3"
              >
                Post
              </button>
            </div>
        </Card.Body>
      </Card>
      
    </>
  );
};

export default PostForm;