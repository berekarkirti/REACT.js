import React from 'react';
import './Template.css';

const Template = () => {
  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center align-items-center">

        <div className="col-12 col-md-6 text-md-start">

          {/*------------Heading------------*/}
          <h1>Hi, Hi, I'm John Deo.</h1>

          {/*------------Paragraph------------*/}
          <p className="paragraph">A freelance Web developer from London. I convert custom web designs to bootstrap templates.</p>
          <p className="paragraph">I make YouTube videos and write Blog.</p>

          {/*------------Button------------*/}
          <div className="text-start">
            <a href="#" className="btn btn-primary btn-lg rounded-pill">I'M AVAILABLE</a>
          </div>

          {/*------------Social-icons------------*/}
          <div className="icons mt-4">
            <a href="#" className="social me-4"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social me-4"><i className="bi bi-twitter"></i></a>
            <a href="#" className="social me-4"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social"><i className="bi bi-github"></i></a>
          </div>
          
        </div>



        <div className="col-12 col-md-6">

           {/*------------Image------------*/}
          <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="John Deo" className="img-fluid" />

        </div>

      </div>
    </div>
  );
}

export default Template;
