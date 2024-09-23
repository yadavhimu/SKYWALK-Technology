import React from "react";
import "./Service_page.css";
const Service_page = () => {
  return (
    <div className="container">
      <h1 className="headding">Our Services</h1>

      <div className="sub_container sm:flex ">
        <div className="left_container">
          <img
            className="bg-yellow-500 rounded-full"
            src="../images/websiteDesigning.png"
            alt=""
          />
        </div>

        <div className="right_container">
          <h1 className="right_heading">Website Designing</h1>
          <hr className="line_1" />
          <hr className="line_2" />
          <div className="right_pera">
            <p>
              We design, build and support websites and apps for <br /> clients
              worldwide. We make your business stand out. <br />
              Interested? Let's chat.
            </p>
          </div>
        </div>
      </div>
      <div className="sub_container">
        <div className="left_container_2">
          <h1 className="left_heading_2">Website Development</h1>
          <hr className=" line_1" />
          <hr className="line_2" />
          <div className="right_pera">
            <p>
              Getting a website developed is the easy part but getting the{" "}
              <br /> right responsive website that works seamlessly across all{" "}
              <br /> devices that is both attractive and useful is the
              challenge.
            </p>
          </div>
        </div>
        <div className="right_container-2">
          <img
            className="bg-yellow-500 rounded-full"
            src="../images/website Development.png"
            alt=""
          />
        </div>
      </div>
      <div className="sub_container">
        <div className="left_container_3">
          <img
            className="bg-yellow-500 rounded-full"
            src="../images/Software Development.png"
            alt=""
          />
        </div>
        <div className="right_container_3">
          <h1 className="right_heading_3">Software Development</h1>
          <hr className="line_3" />
          <hr className="line_4" />
          <div className="right_pera">
            <p>
              Understanding your requirements of Software <br /> Development and
              objectives is important to us. We <br /> listen and work together
              to create a truly unique experience.
            </p>
          </div>
        </div>
      </div>
      <div className="sub_container">
        <div className="left_container_2">
          <h1 className="left_heading_2">Graphics Designing</h1>
          <hr className="line_1" />
          <hr className="line_2" />
          <div className="right_pera">
            <p>
              Getting a website developed is the easy part but getting the{" "}
              <br /> right responsive website that works seamlessly across all{" "}
              <br /> devices that is both attractive and useful is the
              challenge.
            </p>
          </div>
        </div>
        <div className="right_container-2">
          <img
            className="bg-yellow-500 rounded-full"
            src="../images/Graphics Designing.png"
            alt=""
          />
        </div>
      </div>

      {/* <div>
        <div>
          <h1>
            Delta Soft System offers creative website design and development
            with dynamic functionality and attractive theme to grow your
            business and increase your sales:{" "}
          </h1>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default Service_page;
