import React from 'react';

import IntroSec from './IntroSec'

function Home() {
  return (
    <div className="Home mx-auto container-fluid mt-0">

      <div className="homebanner">

        <div className="textsec">
          {/* <img className="mainpic img-fluid mx-auto d-block" src={blank} /> */}
          
          <h1>I'm Sam</h1>
         
          <h4>a front-end developer.</h4>
          
          
        </div>
      </div>

      <IntroSec />


    </div>
  );
}

export default Home;
