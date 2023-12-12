import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import IEEE from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Privilege from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            <b>i)</b> I worked as a Subject Matter Expert at Chegg India. 
            <br />
            <b>ii)</b> I am Corporate Executive and event management executive at IEEE DTU
            <br />
           <b>iii)</b> I teach Chemistry and Maths at Privilege Institue Delhi
            <br />
            <b>iv)</b> I worked as a video editor for a Youtube Channel.  
            <br />
            <b>v)</b> I served as Public Relations Head at Cognitive Minds DTU 
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={IEEE} alt="" />
          </div>
          <div className="w-secCircle">
            <img style={{Width :'0px'}}src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Privilege} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
