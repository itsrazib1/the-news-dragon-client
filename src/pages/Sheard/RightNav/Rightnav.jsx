import React from "react";
import { Button } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const Rightnav = () => {
  return (
    <>
      <div className="p-2">
        <h4 className="text-start">Login With</h4>
        <Button className="mb-3 px-5" variant="outline-primary">
          
          <FaGoogle /> Log In With Google
        </Button>
        <br />
        <Button className="px-5" variant="outline-secondary">
          
          <FaGithub /> Log In With GitHub
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <div className="text-start">
          <p className="border p-3">
            
            <FaFacebook />
            &nbsp; Facebook
          </p>
          <p className="border p-3">
            
            <FaTwitter />
            &nbsp; Twitter
          </p>
          <p className="border p-3">
            <FaInstagram />
            &nbsp; Instagram
          </p>
        </div>
        <QZone />
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Rightnav;
