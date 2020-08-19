import React from 'react';
import ContactForm from './ContactForm'

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import MyComponent from './GoogleMap';


class Contact extends React.Component {

  constructor() {
    super()

  }



  render() {
    return (
      <div className="Contact">

        <div className="resumebanner">

          <div className="textsec">

            <h2><i class="far fa-envelope" /> Contact Me</h2>

          </div>
        </div>

        <ContactForm />

        {/* <MyComponent/> */}

      </div>
    );
  }
}

export default Contact
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyD-g4346Jbyx626QmWPTh-mfaCiYeR6hjY")
// })(Contact)