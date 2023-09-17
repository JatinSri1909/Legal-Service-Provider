// Home.js
import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div id="home-section" className="page">
      <h1>Welcome to Legal Service Provider</h1>
      <p>Your Trusted Partner for Legal Solutions in India</p>
      <p>Are you in need of legal advice or services in India? Look no further. Legal Service Provider is your trusted partner in connecting you with experienced legal professionals across the country. We understand that navigating the legal landscape can be daunting, and that's why we're here to simplify the process for you.</p>
      <p>Our platform is designed to cater to individuals and businesses alike. Whether you're facing a legal challenge, require consultation, need documents drafted and notarized, or seek mediation and dispute resolution services, we've got you covered. With a vast network of skilled lawyers, arbitrators, mediators, notaries, and document writers, we ensure that you find the right legal expert for your specific needs.</p>
      <p>At Legal Service Provider, we believe in transparency, quality, and accountability. Our commitment to excellence is reflected in every interaction you have with our legal professionals. We are dedicated to providing accessible and reliable legal services to citizens in India.</p>
      <p>Explore our comprehensive range of legal services and get the legal assistance you need today.</p>
      <button className="button" onClick={() => props.smoothScrollTo("services-section")}>Explore Services</button>
    </div>
  );
}


export default Home;
