import React from "react";
import { Card } from "react-bootstrap";

const StartupCoverImage = ({ coverImg }) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-10 col-md-10 mb-4">
        <div
          className="card user-profile o-hidden mb-4 "
          style={{ boxShadow: "unset" }}
        >
          <div
            className="header-cover"
            id="startup-cover"
            style={{ backgroundImage: `url(${coverImg})` }}
          >
            <button
              className="btn btn btn-outline-primary upload-cover-button m-2"
              style={{
                position: "absolute",
                right: "10px",
                display: "flex",
                zIndex: "9",
              }}
              type="button"
            >
              <i className="i-Camera mr-2"></i> Change cover photo
            </button>
            <input
              name="cover_photo"
              className="cover-upload"
              id="cover-upload"
              type="file"
              accept="image/*"
            />
            <input name="id" value="{{ $startup->id }}" type="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCoverImage;
