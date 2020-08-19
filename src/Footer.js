import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="Footer">
      <div className="sitemap mx-auto row">
        <div className="text-center col">
          <a className="link" href="">Linkedin</a>
        </div>
        <div className="text-center col">
          <a className="link" href="https://github.com/sameasychen">Github</a>
        </div>


        <div className="text-center col">
        <Link className="link mx-auto" to="/Contact"> Hire me</Link>
        </div>
      </div>
      
      <hr className="FooterHr"/>
      <p class="copyright text-center small my-0">©Copyright 2020. All Rights Reserved</p>

    </div>
  );
}

export default Footer;
