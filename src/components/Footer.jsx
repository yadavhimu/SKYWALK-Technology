import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#f5af2c] mb-3 rounded-lg">
      <div className="md:flex ml-10  gap-14 my-10 mt-40 p-2 text-sm">
        <div>
          <p className="text-3xl  mb-5 font-bold">Services</p>
          <ul className="flex flex-col gap-1 text-black">
            {/* <NavLink
              className="mt-2 text-lg font-medium"
              to="/websitedesigning"
            >
              Website Designing
            </NavLink> */}
            <NavLink
              className="mt-3 text-lg font-medium"
              to="/websitedevelopment"
            >
              Website Development/Designing
            </NavLink>
            <NavLink
              className="mt-3 text-lg font-medium"
              to="/softwaredevelopment"
            >
              Software Development
            </NavLink>
            {/* <NavLink
              className="mt-3 text-lg font-medium"
              to="/graphicdesign"
            >
              Graphics Design
            </NavLink> */}
            <NavLink className="mt-3 text-lg font-medium" to="/googleadwords">
              Google Adword/PPC Packages
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-3xl  mb-5 font-bold">Our Product</p>
          <ul className="flex flex-col gap-1 text-black">
            <li className="mt-2 text-lg font-medium">
              {" "}
              Hotel Management Software
            </li>
            <li className="mt-3 text-lg font-medium">
              {" "}
              Hospital Management Software
            </li>
            <li className="mt-3 text-lg font-medium">
              {" "}
              School Management Software
            </li>
            <li className="mt-3 text-lg font-medium"> Salon Software</li>
            <li className="mt-3 text-lg font-medium"> Billing Software</li>
            <li className="mt-3 text-lg font-medium"> Restaurant Software</li>
          </ul>
        </div>
        <div>
          <p className="text-3xl  mb-5 font-bold">About Us</p>
          <ul className="flex flex-col gap-1 text-black">
            <NavLink className="mt-2 text-lg font-medium" to="/aboutus">
              About Company
            </NavLink>
            <NavLink className="mt-3 text-lg font-medium" to="/careers">
              Career
            </NavLink>
            <NavLink className="mt-3 text-lg font-medium" to="/contactus">
              Contact Us
            </NavLink>
            {/* <NavLink className="mt-3 text-lg font-medium" to="/contactus">
              Get a Quote
            </NavLink> */}
          </ul>
          <div className="flex mt-8 gap-2">
            <img src="./images/facebook.png" alt="" />
            <img src="./images/insta.png" alt="" />
          </div>
        </div>
        <div>
          <p className="text-2xl  mb-5  font-bold"></p>
          <ul className="flex flex-col gap-1  text-black">
            <NavLink
              className="mt-10 text-lg font-medium"
              to="/"
            >
              Terms & Conditions
            </NavLink>
            <NavLink
              className="mt-3 text-lg font-medium"
              to="/"
            >
              Privacy & Policy
            </NavLink>
            <NavLink
              className="mt-3 text-lg font-medium"
              to="/"
            >
              Refund Policy
            </NavLink>
          </ul>
        </div>
      </div>
      <div className=" text-center font-medium">
        Developed by Delta Soft System. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
