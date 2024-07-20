//Purpose: Provides information about the application
//-Explains the purpose of the application.
//-Describes the range of products and user benefits.

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Application</h1>
      <p>
        Our Product Catalog application is designed to provide you with a seamless shopping experience.
        We aim to offer a diverse selection of high-quality products ranging from electronics to home 
        appliances, fashion, and more. Our goal is to make it easy for you to find and purchase the 
        products you need, all from the comfort of your home.
  
        The application is regularly updated to ensure that you have access to the latest trends and 
        innovations. We work tirelessly to source the best products from reputable suppliers, ensuring 
        that you receive value for your money. Our intuitive interface and powerful search functionality 
        allow you to quickly find exactly what you're looking for.
     
        We also offer special deals and discounts, so be sure to check back often to take advantage of 
        these limited-time offers. Our dedicated customer support team is always here to help you with 
        any questions or issues you may have.
      
        Thank you for choosing our application for your shopping needs. We hope you enjoy your experience!
      </p>
    </div>
  );
};

export default About;
