import React from 'react';

import { Link } from 'react-router-dom';



class Nav extends React.Component {

  render() {
    return (
      <div className="row nav mx-auto my-auto h-100">
        
        <Link className="link col" to="/">
        Home
        </Link>
        <Link className="link col" to="/portfolio">
        Portfolio
        </Link>
        <Link className="link col" to="/contact">
        Contact
        </Link>
        
      </div>
    );
  }
}

export default Nav;
