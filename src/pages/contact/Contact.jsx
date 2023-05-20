// import React from 'react'
// import './Contact.scss'

// export default function About() {
//   return (
//     <div className="abt">
//       <h1 className='abt1'>CONTACT US</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Sunt assumenda rem nisi dolore cumque nulla porro earum harum rerum, architecto cum impedit hic eos maxime quod eum corporis modi consectetur</p>
//     </div>
//   )
// }
import React from "react";
import "./Contact.scss";

function ContactUsPage() {
  return (
    <div className="ContactUsPage">
      <h1>Contact Us</h1>
      <p>Thank you for your interest in contacting us. Please fill out the form below and we will get back to you as soon as possible.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default ContactUsPage;
