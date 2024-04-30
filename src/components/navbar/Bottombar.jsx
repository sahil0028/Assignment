import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { offers } from '../data/data';

const Bottombar = () => {
  return (
    <div className="bottomBarContainer">
      <div className="location select-box">
        <FaLocationDot />
        <select name="" id="">
          <option value="">Mumbai,India</option>
          <option value="">Delhi,India</option>
          <option value="">Punjab,India</option>
        </select>
        <IoIosArrowForward />
      </div>
      <div className="offers">
        {
          offers.map((elem,id)=>{
            return(
              <div key={`${elem}_${id}`} className="offer">{elem}</div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Bottombar;
