import React from 'react';
import Logo from './pics/selfie150.jpg'

import divider from './pics/divider.jpg'
import react from './pics/React.jpg'
import pencil from './pics/pencil.jpg'

import { Link } from 'react-router-dom';



class IntroSec extends React.Component {

  constructor() {
    super()
    this.handleClickBtn = this.handleClickBtn.bind(this);

  }

  handleClickBtn(e) {

    this.props.history.pop('/contact');

  }

  render() {
    return (
      <div className="IntroSec container">

        <div className="introsec1 mx-auto my-5">
          <img className="mx-auto d-block rounded-circle" src={Logo} alt="" />
          <h2 className="text-center my-5">Hi</h2>
          <p className="text-center">I'm a front-end developer based in Ontario, Canada. I have a passion for web design and love to create web page and applications.</p>
        </div>

        <div className="my-5">
          <img className="mx-auto d-block" src={divider} />
        </div>


        <div className="introsec2 mx-auto my-5">
          <h2 className="text-center my-5">What I can do.</h2>


          <div className="mx-auto my-5 row">
            <div className="mx-auto col-md-4 col-sm-12">
              <img className="rounded-circle mx-auto d-block" src={pencil} alt="" Hello />
            </div>
            <div className="mx-auto col-md-8 col-sm-12">
              <h5 className="my-3">Design what you want</h5>
              <p>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
            </div>
          </div>

          <div className="mx-auto my-5 row">

            <div className="mx-auto col-md-8 col-xs-12">
              <h5 className="my-3">Design what you need</h5>
              <p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
            </div>
            <div className="intropic2 mx-auto col-md-4 col-xs-12">
              <img className="reactpic rounded-circle mx-auto d-block" src={react} alt="react_pic" Hello />
            </div>
          </div>

        </div>

        <div className="my-5">
          <img className="mx-auto d-block" src={divider} />
        </div>

        <div className="introsec3 mx-auto my-5">
          <h2 className="text-center my-5">I can help.</h2>

          <h5 className="text-center my-1">I'm currently available for </h5>
          <h5 className="text-center my-4">job opportunity or freelance work.</h5>

          <p className="text-center">If you are interested or have a project which needs my help, or just fancy sayting hi, then contact me.</p>


          <Link className="messagebtn mx-auto d-block btn btn-block" to="/Contact"><i class="far fa-envelope" /> Message me</Link>

      d


        </div>


      </div>
    );
  }
}

export default IntroSec;
