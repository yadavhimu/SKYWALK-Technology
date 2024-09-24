import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className=" flex items-center justify-between py-5 font-medium ">
      <div className="flex items-center w-40 md:w-56  lg:w-64">
        <img className=" w-12 md:w-16 lg:w-full" src="../images/logo0.png" alt="logo" />
        <img className=" flex " src="../images/logo1.png" alt="logo" />
      </div>

      <ul className="hidden  lg:flex  md:text-lg lg:text-2xl lg:gap-5  text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-black"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/services"
          className="flex flex-col items-center gap-1 group relative cursor-pointer hover:text-black"
        >
          <p>
            Services
            <div className=" z-50 group-hover:block hidden absolute dropdown-menu  shadow-xl border-2 border-blue-200">
              <div className="flex flex-col  gap-2 w-72 py-3 px-3 bg-slate-100 text-blue-950 ">
                {/* <li className="cursor-pointer hover:text-black">
                  <NavLink to="/websitedesigning">Website Designing</NavLink>
                </li> */}
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/websitedevelopment">
                    Website Development
                  </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/softwaredevelopment">
                    Software Development
                  </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/googleadwords">Google Adword</NavLink>
                </li>
              </div>
            </div>
          </p>
        </NavLink>
        <NavLink
          to="/otherservices"
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-black"
        >
          <p>US Outsourcing</p>
        </NavLink>
        <NavLink
          to="/aboutus"
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-black"
        >
          <p>About Us</p>
        </NavLink>
        <NavLink
          to="/careers"
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-black"
        >
          <p>Careers</p>
        </NavLink>
        <NavLink
          to="/contactus"
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-black"
        >
          <p>Contact Us</p>
        </NavLink>
      </ul>

      <img
        onClick={() => setVisible(true)}
        src="../images/menu_icon.png"
        className="w-5 cursor-pointer lg:hidden "
        alt=""
      />

      {/* side bar menu */}
      <div
        className={`absolute z-50 top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src="dropdown_icon.png" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border group  relative hover:text-black "
            to="/services"
          >
            Services
           <div className=" z-50 hidden group-hover:block  absolute dropdown-menu  shadow-xl border-2 border-blue-200">
              <div className="flex flex-col  gap-2 w-72 py-3 px-3 bg-slate-100 text-blue-950 ">
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/websitedesigning">Website Designing</NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/websitedevelopment">
                    Website Development
                  </NavLink>
                </li>
                <li className="cursor-pointer hover:text-black">
                  <NavLink to="/softwaredevelopment">
                    Software Development
                  </NavLink>
                </li>
                {/* <li className="cursor-pointer hover:text-black">
                  <NavLink to="/websitedesigning">Graphic Designing</NavLink>
                </li> */}
              </div>
            </div>
            
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/otherservices"
          >
            US Outsourcing
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/careers"
          >
            Careers
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
