import React from "react";
const Career_ = () => {
  return (
    <div className="">
      <div className=" sm:w-[100%]">
        <img
          className=" sm:w-[100%] mt-10 overflow-hidden "
          src="./images/carrerimg.webp"
          alt=" career img"
        />
        <h1 className=" text-2xl font-medium sm:text-4xl text-center mt-10 sm:font-bold text-blue-950">
          We Enjoy, We Learn, We Grow
        </h1>

        <p className=" lg:text-2xl lg:text-center mt-8">
          Our team is growing fast. We come to work with energy and enthusiasm,
          we know how meaningful our work is to our clients.
        </p>
        <p className="lg:text-2xl lg:text-center mt-8">
          When you join{" "}
          <span className="text-red-900 font-medium">Delta Soft System</span>{" "}
          you will be a part of a company that has a strong commitment to its
          employees.From our professional work environment to our excellent
          benefits , to our ongoing training, we take care of the people that
          make us strong.
        </p>
      </div>
        
        <div className="lg:flex w-full mt-10">
      <div className=" w-full ml-20 sm:ml-0 md:ml-20  mt-14">
          <form>
            <div className="input-box">
              <label></label>
              <input
                type="text"
                className="w-[60%] h-16"
                placeholder="Full Name"
                required
              />
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="email"
                className="w-[60%] h-16 "
                placeholder="Email"
                required
              />
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="number"
                className="w-[60%] h-16"
                placeholder="Phone"
                required
              />
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <select className="Select Position w-[60%] h-16">
                <option value="Position">Position</option>
                <option>Software Developer</option>
                <option>Test Engineer</option>
                <option>Team Lead</option>
                <option>Process Analyst</option>
                <option>Operations Manager</option>
                <option>Digital Marketing</option>
                <option>SEO Developer</option>
                <option>Process Associate</option>
                <option>Chat Process</option>
                </select>
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="Date"
                className="w-[60%] h-16 "
                placeholder="Subject"
                required
              />
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            
            <button
              className="mt-20 w-[60%] bg-yellow-400 h-10 font-bold text-lg"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" sm:w-full">
          <img src="./images/careerpage.webp" alt="" />
        </div>
        </div>

      {/* <div className="lg:flex sm:ml-20  sm:w-[100%]">
        <div className=" mt-10  lg:mt-32 w-[100%]" >
          <form>
            <div className="input-group  sm:flex h-10 gap-6 mb-8 ">
              <div className="input-box">
                <label></label>
                <input
                  type="text"
                  className="field  sm:bg-pink-200 h-10 text-lg p-4"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input-box">
                <label></label>
                <input
                  type="text"
                  className="field sm:bg-pink-200 h-10 text-lg p-4 "
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="input-group sm:flex h-10 gap-6 mb-8">
              <div className="input-box">
                <label></label>
                <input
                  type="email" 
                  className="field sm:bg-pink-200 h-10 text-lg p-4"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-box">
                <label></label>
                <input
                  type="text"
                  className="field sm:bg-pink-200 h-10 text-lg p-4"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="input-group  sm:flex h-10 gap-6 mb-8">
              <div className="input-box w-40 md:w-[40%]">
                <select className="Select Position sm:bg-pink-200 ml-3 sm:ml-0 h-10 w-full">
                <option value="Position">Position</option>
                <option>Software Developer</option>
                <option>Test Engineer</option>
                <option>Team Lead</option>
                <option>Process Analyst</option>
                <option>Operations Manager</option>
                <option>Digital Marketing</option>
                <option>SEO Developer</option>
                <option>Process Associate</option>
                <option>Chat Process</option>
                </select>
              </div>
              <div className="input-box ">
                <label></label>
                <input
                  type="Date"
                  className="field sm:bg-pink-200 h-10 text-lg p-4 sm:w-[100%]"
                  placeholder="Availabe Date"
                  required
                />
              </div>
            </div>
            <div className="sm:w-[75%]">
                <p className=" sm:bg-pink-200 mt-14 sm:h-10 text-lg sm:pl-3 sm:pt-1">Share Your Resume at hr@deltasoftsystem.com </p>
              </div>
              <button className="bg-blue-950  sm:ml-28 mt-5 text-white w-60  h-10 text-lg" type="submit">Submit</button>
          </form>
        </div>
        <div className=" sm:w-[80%]">
          <img src="./images/careerpage.webp" alt="" />
        </div>
      </div> */}

    </div>
  );
};

export default Career_;
