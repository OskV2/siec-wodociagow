import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import GithubIcon from "../../img/github-icon.png";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container">
        <div className="row">
          <div className="footer col-12">
            <Link className="footer__link" to='https://github.com/OskV2' target="_blank">
              <img src={GithubIcon} alt="" />
              <span>github/OskV2</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
