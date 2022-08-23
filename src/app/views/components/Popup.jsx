import React, { useEffect } from "react";
import '../../../styles/app/globals/components/_popup.scss'
import {useState} from "react";


function Popup(props) {
    const [show, setShow] = useState(true);

    const handleOnClick = () => {
        setShow(false);
    }
    return (props.trigger) ? (
       <>
        <div className="popup" style={{
            visibility: show ? "visible":"hidden",
            
        }}>

        <div className= "popup-inner">
        <button className="close-btn" onClick={handleOnClick} >X</button>
        {props.children}
        <h4>Update your startup profile info</h4>
        <div className="row justify-content-left" >
        <div className="cols justify-content-left" >
        <p className="text-primary mb-1">company name</p>
        <input className="inputPopup" type="text"></input>
        <p className="text-primary mb-1">industry</p>
        <input className="inputPopup" type="text"></input>
        <p className="text-primary mb-1">stage</p>
        <select className="inputPopup">
        <option value="earlyStage">early stage</option>
        <option value="finalStage">final stage</option>
        </select>
        <p className="text-primary mb-1">Establishment Date</p>
        <input className="inputPopup" type="date"></input>
        <p className="text-primary mb-1">Country</p>
        <select className="inputPopup">
        <option value="china">china</option>
        <option value="tunisia">tunisia</option>
        </select>
        <p className="text-primary mb-1">Office Address</p>
        <input className="inputPopup" type="text"></input>
        </div>
        <div className="cols justify-content-left" >
        <div  style={{marginLeft: 100 , marginTop: 20}}  >
         <p className="text-primary mb-1">Bio</p>
         <textarea id="bio" name="bio" rows="5" cols="30"></textarea>
         </div>
         <div  style={{marginLeft: 100 , marginTop:40}}   >
         <p className="text-primary mb-1">description</p>
         <textarea id="description" name="description" rows="5" cols="30"></textarea>
        </div>
        <br></br>
        </div>
        </div>
        <button className="btn btn-primary mb-1">Save changes</button>
        
        </div>

        </div>
        </> 
    ) :"";
};
export default Popup