import React from "react";
import "./Lower_section.css";
const Lower_section = () => {
  return (
    <div className="main_lower">
      <div className="inner_lower">
        <div className="inner_left">
          <h1>
            Why we are <br/> right choice in your<br/> on-line
            success!
          </h1>
        </div>
        <div className="inner_right">
          <h1>
            Empowering Business Owners to build their Faith For Bigger {" "}
            Business Success! So, We want to encourage you to work on 
            living your dreams now. Don't wait{" "}
            <span className="bold_text">SKYWALK Technology</span> will {" "}
            help you out.
          </h1>
        </div>
      </div>
      <div className="inner_lower1">
        <div className="left_1">
          <img src="../images/tec56.png" alt="" />
        </div>
        <div className="right_1">
          <div className="right_1_inside">
            <h1>
              Technology That We <br /> Used
            </h1>
          </div>
        </div>
      </div>
      <div className="inner_lower1">
        <div className="left_2">
          <div className="left_2_inside">
            <h1>
              Content Management <br />
              System
            </h1>
          </div>
        </div>
        <div className="right_2">
          <img src="../images/CMS.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lower_section;
