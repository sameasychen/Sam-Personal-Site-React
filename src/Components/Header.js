import React from 'react';
import Nav from './Nav'
import Logo from '../pics/selfie80.jpg'

class Header extends React.Component {

  render() {
    return (
      <div className="Header mx-auto container-fluid row">
        
          <div className="logopic col-4 mt-2 h-100">
          
            <img src={Logo} className="img-fluid rounded-circle mx-auto d-block" alt='Logo'/>

          </div>

          <div className="navlist col-8 h-100">
            <Nav />
          </div>
        
        
      </div>
    );
  }
}

export default Header;
