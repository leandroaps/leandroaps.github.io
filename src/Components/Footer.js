/* eslint-disable react/prop-types */
/* eslint-disable vars-on-top */
import React from "react";

const Footer = props => {
  if (props.data) {
    var networks = props.data.social.map(network => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className} />
        </a>
      </li>
    ));
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
