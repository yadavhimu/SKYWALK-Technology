import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="main-box">
      <div className="Box">
        <div className="box-1">
          <h1 className="heading">Technology</h1>
          <p className="sub-text">
            We empower our clients with adaptive web applications built using
            open-source and web technologies and also practices to simplify
            complex business workflows
          </p>
        </div>
        <div className="box-2">
          <h1 className="heading">Clients</h1>
          <p className="sub-text">
            Our diverse client base across various industries have successfully
            leveraged our rich web expertise to launch highly scalable
            applications.
          </p>
        </div>
        <div className="box-3">
          <h1 className="heading">Experience</h1>
          <p className="sub-text">
            We have carved out a distinct segment in web application development
            alongside valued consulting and analysis solutions to serve growing
            businesses and industry leaders
          </p>
        </div>
        <div className="box-4">
          <h1 className="heading">Services</h1>
          <p className="sub-text">
            At Delta Soft System, we focus on a convergence of technology and
            consulting to create innovative web applications delivering secure,
            scalable and intuitive functionality to your end users.
          </p>
        </div>
      </div>
      <div className="sub_box">
        <div className="left">
          <div className="flex justify-center">
          <img className="animate-bounce" src="../images/cube.png" alt="cube" />
          </div>
          
        </div>
        <div className="right mt-16">
          <h1 className="heading"> WHY DELTA SOFT SYSTEM ?</h1>
          <p className="right_text">
            <span className="bold_text">Delta Soft System </span >is a software development company that has set new
            and higher quality standard for services. As a leader in SEO, Web
            Design, e-Commerce, Website Conversion, and Internet Marketing
            Services, our firm prides ourselves on driving traffic, converting
            visitors, and measuring effectiveness to ultimately deliver real
            results for our clients.<br/> <span className="bold_text">Delta Soft System</span> aim to make your online
            business experience smooth, speedy and efficient.<br/> Our association
            who specialize in various services like Website Designing, Web
            Development, Software Development, Digital Marketing and Graphics
            Designing. Get in touch with our team today to experience what makes
            Delta Soft System stand apart from other agencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
