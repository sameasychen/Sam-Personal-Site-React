import React from 'react';



function Footer() {
  return (
    <div className="Footer">
      <div className="sitemap mx-auto row">
        <div className="text-center col">
          <a className="link" href="">Linkedin</a>
        </div>
        <div className="text-center col">
          <a className="link" href="">Github</a>
        </div>
        <div className="text-center col">
          <a className="link" href="">hire me</a>
        </div>
      </div>
      
      <hr className="FooterHr"/>
      <p class="copyright text-center small">©Copyright 2020-2021. All Rights Reserved</p>

    </div>
  );
}

export default Footer;
