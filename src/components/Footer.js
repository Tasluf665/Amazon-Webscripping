import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalFooter } from "react-bootstrap";

export const Footer = () => {
  return (
    <div expand="lg" className="bg-dark text-white bottom">
      <p className="footer_p">
        <em>Copyright © 2022 All Rights Reserved</em>
      </p>
    </div>
  );
};
