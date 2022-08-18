import React from "react";
import { Card } from "react-bootstrap";
import RichTextEditor from '../../../@gull/components/RichTextEditor';

const CommentForm = () => {
  return (
    <>
      <div class="input-group">
          <input class="form-control" type="text" name="comment" placeholder="Write comment" ariaLabel="comment" />
          <div class="input-group-append">
              <button class="btn btn-primary" id="button-comment2" type="button" onclick="postComment({{$post->id}})">
                  <i class="i-Paper-Plane"></i>
              </button>
          </div>
      </div>
    </>
  );
};

export default CommentForm;