import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I am </span>
          <span>Anmol Raj</span>
          <span>
          (i) I am final-year B-Tech student at DTU,specializing in Information Technology.
          <br />
          (ii) I'm skilled in frontend development and have knowledge about backend technologies.
          <br />
          (iii) I have extensive web development project and video editing experience.
          <br />
          (iv) I'm well versed with DSA and core computer fundamental subjects.
          <br />
          (v) I'm also passionate about teaching and love to play badminton.

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/Anmol2801"><img src={Github} alt= "" /> </a> 
        <a href="https://www.linkedin.com/in/anmol-raj-0255a7201/"><img src={LinkedIn} alt=""/></a> 
        <a href="https://www.instagram.com/anmol_lui/"><img src={Instagram} alt="" /></a> 
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-10%", left: "74%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="  Coding " text2="Enthusiast" />
        </motion.div>
        <motion.div
          initial={{ top: "55%", left: "54%" }}
          whileInView={{ left: "63%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="POR" text2="Holder" />
        </motion.div>
      
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
