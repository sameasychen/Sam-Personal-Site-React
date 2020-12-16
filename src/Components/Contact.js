import React from 'react';
import ContactForm from './ContactForm'

class Contact extends React.Component {

  render() {
    return (
      <div className="Contact">

        <div className="resumebanner">

          <div className="textsec">

            <h2><i class="far fa-envelope" /> Contact Me</h2>

          </div>
        </div>

        <ContactForm />

      </div>
    );
  }
}

export default Contact
