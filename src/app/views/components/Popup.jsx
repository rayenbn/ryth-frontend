import React, { useEffect } from "react";
import "../../../styles/app/globals/components/_popup.scss";
import { useState } from "react";
const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="ul-widget__head __g-support v-margin">
          <button className="close-btn" onClick={props.handleClose}>
            X
          </button>
          <p className="ul-widget__head-title">
            Update your startup profile info
          </p>
        </div>

        <div className="row justify-content-left">
          <div className="cols justify-content-left">
            <p className="text-primary mb-1">company name</p>
            <input className="form-control" type="text"></input>
            <p className="text-primary mb-1">industry</p>
            <input className="form-control" type="text"></input>
            <p className="text-primary mb-1">stage</p>
            <select className="form-control">
              <option value="earlyStage">early stage</option>
              <option value="finalStage">final stage</option>
            </select>
            <p className="text-primary mb-1">Establishment Date</p>
            <input className="form-control" type="date"></input>
            <p className="text-primary mb-1">Country</p>
            <select className="form-control">
              <option value="china">china</option>
              <option value="tunisia">tunisia</option>
            </select>
            <p className="text-primary mb-1">Office Address</p>
            <input className="form-control" type="text"></input>
          </div>
          <div className="cols justify-content-left">
            <div style={{ marginLeft: 100, marginTop: 20 }}>
              <p className="text-primary mb-1">Bio</p>
              <textarea id="bio" name="bio" rows="5" cols="30"></textarea>
            </div>
            <div style={{ marginLeft: 100, marginTop: 40 }}>
              <p className="text-primary mb-1">description</p>
              <textarea
                id="description"
                name="description"
                rows="5"
                cols="30"
              ></textarea>
            </div>
            <br></br>
          </div>
          <div className="ul-widget__head __g-support v-margin"></div>
          <button
            style={{ position: "absolute", left: "500px", top: "420px" }}
            className="btn btn-primary mb-2"
            type="button"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
