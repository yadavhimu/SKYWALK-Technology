import React from "react";
import "./About_us.css";
const About_us = () => {
  return (
    <div className="main_about">
      <div className="about_heading">
        <h1>Our Story</h1>
        <hr />
      </div>
      <div className="about_img">
        <div className="inside_about_img">
          <img src="./images/light1.png" alt="light" />
          <img
            className=" mt-36 mr-10 h-32 "
            src="./images/phone2.png"
            alt="phone"
          />
          <img
            className="object-contain mt-24"
            src="./images/tab3.png"
            alt="tab"
          />
          <img
            className=" mt-48 ml-24 h-20 gap-10 "
            src="./images/mug4.png"
            alt="light"
          />
        </div>
        <div className="line_img">
          <img src="./images/lineblue.png" alt="light" />
        </div>

        <p className="new_text" >
          Founded in July 2024, SKYWALK Technology is an Indian software based
          company. We provide full services in the area of Software development,
          Software Solutions, Web Designing, Web Development, Search Engine
          Optimization, Digital Marketing, IT solutions and Services. We offer a
          complete range of high quality design, consulting and development
          services to our clients.
        </p>
      </div>

      <div className="big_img  items-center flex justify-center mt-16">
        <img src="./images/laptop.jpeg" alt="" />
      </div>

      <div className="about_box">
        <div className="about_left">
          <h1>Our Vision</h1>
          <p className="left_p">
            Our vision is to set the highest standards in the
            fields of software development, Web Development,
             Search Engine Optimization, Digital Marketing, IT
            Solution and Services around the word across all domains.
          </p>
        </div>
        <img
          className=" bg-yellow-500 rounded-full"
          src="./images/white.png"
          alt=""
        />
      </div>
      <div className="about_box">
        <img
          className=" bg-yellow-500 rounded-full"
          src="./images/closedhand.png"
          alt=""
        />
        <div className="about_left">
          <h1>Our Strength</h1>
          <p className="left_p">
            At SKYWALK Technology, our first step is to understand the
            client/customer 
            requirement and specification,
             processes,operation and priorities. This help us to offer the
            best solution
            for business value and for specific needs. <br /> SKYWALK Technology
            is chosen as the best company in design, deliver and manage any type
            of Software/ Web based application of a very large of
            customers/clients that includes Government, Education, Corporate and
            others. Their continued trust on our ability makes us the
            intelligent choice.
          </p>
        </div>
      </div>
      <div className="about_text">
        <p className="about_text1">
          Our experience in our field, our expert programmers, testing team, and
          effective project management, help us to implement and deliver our
          projects on time. We have received excellent evaluations from our
          clients for on-time delivery, correctly implemented functionality and
          usability.
        </p>
        <p className="about_text2">
          Apart from our total commitment to our customer, the subsequent is
          what sets us apart:
        </p>
        <ul className="list-disc about_text3">
          <li>
            Our initiative is to concentrate which is what makes us best in our
            industry. We take every step to know our clients' requirements, and
            to seek out solutions that meet them or exceed them.
          </li>
          <li>
            Our dedicated team of skilled software testers, QA Lab, provides a
            full range of quality assurance services (QA), including software
            quality testing, test planning, test execution and reporting &
            control of software development processes.
          </li>
          <li>
            Our experience in our field, our expert programmers, testing team,
            and effective project management, help us to implement and deliver
            our projects on time. We have received excellent evaluations from
            our clients for on-time delivery, correctly implemented
            functionality and usefulness.
          </li>
        </ul>
      </div>
      <div className="about_last">
        <h1>Customer Relationship</h1>
        <hr />
        <div className="about_last_box">
          <div className="about_last_left">
            <p>
              SKYWALK Technology believes in a relationship where customers
              perceive they have been given more in attention than they
              expected. Our Customers are "touched" positively by the service,
              and remember the experience when the time involves buy or
              recommend again. We provide you with an e-mail address and a
              telephone and fax number for support. Our maximum reaction time is
              24 hours during the week, but we usually answer our customers
              within a couple of hours. We have an internet based network on our
              website. Outside normal working hours, customers need someone to
              show to, once they need help. For these needs, nothing beats
              web-based support. Customers, who are comfortable with computers,
              prefer getting to an internet site at their convenience and
              getting support.
            </p>
          </div>
          <div className="about_last_right">
            <img className=" bg-yellow-500 rounded-full" src="./images/handpic.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
