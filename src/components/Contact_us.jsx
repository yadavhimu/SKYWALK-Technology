import React from "react";

const Contact_us = () => {
  return (
    <div className="contact_main">
      <div className="inside_contact ">
        <h1 className=" text-4xl sm:text-6xl flex justify-center text-blue-950 sm:mb-10">
          Contact us
        </h1>
        <hr className="border-orange-400 sm:w-1/2 lg:ml-96" />
        <p className=" mt-5 text-lg sm:text-2xl sm:mt-14 text-center">
          {" "}
          We design, build and support websites and apps for clients worldwide.
          We make your <br />
          business stand out. Interested? Let's chat.{" "}
        </p>
        <div className=" lg:flex items-center">
          <div className=" lg:flex sm:mt-24">
            <h1 className="mt-5 text-2xl sm:text-4xl ml-32 text-orange-500">
              {" "}
              We are here to <br /> help.
            </h1>
            <p className=" mt-5 sm:text-2xl items-center sm:ml-14">
              {" "}
              You already have a project in mind and want to work with us? Fill
              <br />
              out the form below and let us know right away in which direction
              it should go.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-20">
        <div className="inside_details flex justify-center">
          <h1 className=" text-4xl">Let's get in touch!</h1>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-xl sm:text-2xl">We will be happy to answer your question</p>
        </div>
      </div>

      <div className=" lg:flex">
        <div className=" lg:w-[35%] md:ml-20 lg:ml-40 ">
          <div className="left_side_data">
            <div className="side_data flex">
              <img src="./images/chat.jpeg" alt="" />
              <p className="mt-8 ml-2 text-lg">
                Chat With us <br /> Ask a question and get an answer.
              </p>
            </div>
          </div>
          <div className="left_side_data mt-14">
            <div className="side_data flex">
              <img src="./images/call.jpeg" alt="" />
              <p className="mt-8 ml-2 text-lg">
                Give us a call <br /> We are here for you 24/7.
              </p>
            </div>
          </div>
          <div className="left_side_data mt-14">
            <div className="side_data flex">
              <img src="./images/social.png" alt="" />
              <p className="mt-8 ml-2 text-lg">
                We're Social <br /> Follow us to get updates.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full ml-20 sm:ml-0 md:ml-20 lg:w-[50%] mt-14">
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
              <input
                type="text"
                className="w-[60%] h-16 "
                placeholder="Subject"
                required
              />
              <hr className="border-2 border-orange-500 w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <textarea
                className="w-[60%] h-20"
                id=""
                placeholder="Type your message here"
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
      </div>

      <div className=" mt-20 sm:mt-32">
        <h1 className="ml-20 text-3xl text-red-900 sm:font-semibold sm:ml-40">HeadOffice :</h1>
        <div className="box_contact lg:flex justify-evenly">
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/location.svg" alt="" />
            <p className="ml-2 text-lg font-semibold">
              1168judge Avenue,
              <br /> Orlando Florida
              <br />
              3281744411
            </p>
          </div>
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/mail.png" alt="" />
            <p className="ml-4 mt-7 text-lg lg:text-xl font-semibold">
              contact@deltasoftsystem.com
            </p>
          </div>
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/phone.png" alt="" />
            <p className="ml-4 mt-7 text-xl">
              +1 (406) 306-4239
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 sm:mt-32">
        <h1 className="ml-20 text-3xl text-red-900 font-semibold sm:ml-40">Corporate Office :</h1>
        <div className="box_contact lg:flex justify-evenly">
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/location.svg" alt="" />
            <p className="ml-2 text-lg font-semibold">
              1168judge Avenue,
              <br /> Narayanadeep Annexe, 7/18,Tilak
              <br /> Nagar,Kanpur,Uttar Pradesh
              <br/>208002
            </p>
          </div>
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/mail.png" alt="" />
            <p className="ml-4 mt-7 text-lg lg:text-xl font-semibold">
              info@deltasoftsystem.com
            </p>
          </div>
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/phone.png" alt="" />
            <p className="ml-4 mt-7 text-xl font-semibold">
              +91 -9569526179
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
