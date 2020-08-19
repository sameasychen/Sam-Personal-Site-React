import React from 'react';

import { Link } from 'react-router-dom';



class Nav extends React.Component {

  constructor() {
    super()

  }


  render() {
    return (
      <div className="row nav mx-auto my-auto h-100">
        
        <Link className="link col" to="/">
        Home
        </Link>
        <Link className="link col" to="/Resume">
        Resume
        </Link>
        <Link className="link col" to="/Contact">
        Contact
        </Link>
        
      </div>


    );
  }
}

export default Nav;
