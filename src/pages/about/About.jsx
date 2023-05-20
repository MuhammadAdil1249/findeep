// import React from 'react'
// import './About.scss'

// export default function About() {
//   return (
//     <div className="abt">
//       <h1 className='abt1'>ABOUT US</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Sunt assumenda rem nisi dolore cumque nulla porro earum harum rerum, architecto cum impedit hic eos maxime quod eum corporis modi consectetur</p>
//     </div>
//   )
// }
import React from 'react';
import './About.scss';
import HaseebAshrafImg from './imags/haseeb.jpg';
import AdilShahidImg from './imags/adil.jpeg';
import HammadSaleemImg from './imags/hammad.jpeg';
import SohailIqbalImg from './imags/dr.sohail.jpeg'

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="members">
        <div className="member">
          <img src={SohailIqbalImg} alt="Sohail Iqbal" />
          <h3>Sohail Iqbal</h3>
          <p>Advisor, Director of HPC Lab</p>
        </div>
        <div className="member">
          <img src={HammadSaleemImg} alt="Hammad Saleem" />
          <h3>Hammad Saleem</h3>
          <p>Co-founder, Final Year Computer Science Student at NUST</p>
        </div>
        <div className="member">
          <img src={AdilShahidImg} alt="Adil Shahid" />
          <h3>Adil Shahid</h3>
          <p>Co-founder, Final Year Computer Science Student at NUST</p>
        </div>
        <div className="member">
          <img src={HaseebAshrafImg} alt="Haseeb Ashraf" />
          <h3>Haseeb Ashraf</h3>
          <p>Co-founder, Final Year Computer Science Student at NUST</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
