
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer1">
      <div className="cont">
        <h1>CONTACT US</h1>
        <div className="contac"> 
        <AiFillPhone />
        <span>+21676534521</span>
        <br/>
          <AiOutlineMail />
          <span>rescuefood@gmail.com</span>
        </div>
      </div>
      <img src="/images/donate.jpg" alt="donate" />
      <div className="cont">
        <h1>ABOUT US</h1>
        <p >
          Food Rescue is committed to reducing food waste and food insecurity.
          Using our web-based app, we engage volunteers to transfer excess fresh
          food from grocers, restaurants, and other sources, to social service
          agencies that feed people who are food insecure.
        </p>
      </div>
    </div>
  );
};

export default Footer;
