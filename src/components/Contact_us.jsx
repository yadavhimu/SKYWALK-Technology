
import Swal from 'sweetalert2'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact_us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2yrholb', 'template_u4j4loo', form.current, {
        publicKey: 'hNBfJ23oKfzJK8N8K',
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact_main">
      <div className="inside_contact mt-10">
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

        <div className=" lg:ml-20  lg:w-[50%] mt-14">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <label></label>
              <input
                type="text"
                className="w-[100%] lg:w-[60%] h-16"
                placeholder="Full Name"
                name='from_name'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="email"
                className="w-[100%] lg:w-[60%] h-16 "
                placeholder="Email"
                name='from_email'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="number"
                className="w-[100%] lg:w-[60%] h-16"
                placeholder="Phone"
                name='from_phone'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <input
                type="text"
                className="w-[100%] lg:w-[60%] h-16 "
                placeholder="Subject"
                name='from_subject'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <textarea
                className="w-[100%] lg:w-[60%] h-20"
                id=""
                placeholder="Type your message here"
                name='message'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <button
              className="mt-20 w-[100%] lg:w-[60%] bg-yellow-400 h-10 font-bold text-lg"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* <div className=" mt-20 sm:mt-32">
        <h1 className="text-3xl text-red-900 font-semibold ">HeadOffice :</h1>
        <div className="box_contact lg:flex ">
          <div className="flex mt-5">
            <img className="w-16 lg:w-24" src="./images/location.svg" alt="" />
            <p className="ml-2 text-lg font-semibold">
              1168 Judges Avenue,
              <br /> Orlando Florida
              <br />
              3281744411
            </p>
          </div>
          <div className="flex mt-5 lg:ml-44">
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
      </div> */}
      <div className="mt-14 sm:mt-32">
        <h1 className=" text-3xl text-red-900 font-semibold ">Corporate Office :</h1>
        <div className="box_contact lg:flex ">
          <div className="flex mt-5 ">
            <img className="w-16 lg:w-24" src="./images/location.svg" alt="" />
            <p className="ml-2 text-lg font-semibold">
              <br />Flat No 1315 Raj Enclave,Gooba Garden
              <br />Kanpur,Uttar Pradesh
              <br/>208017
            </p>
          </div>
          <div className="flex mt-5 lg:ml-[64px]">
            <img className="w-16 lg:w-24" src="./images/mail.png" alt="" />
            <p className="ml-4 mt-7 text-lg lg:text-xl font-semibold">
            vikkygupta1356@gmail.com
            </p>
          </div>
          <div className="flex mt-5 lg:ml-[40px] ">
            <img className="w-16 lg:w-24" src="./images/phone.png" alt="" />
            <p className="ml-4 mt-7 text-xl font-semibold">
              +91 8604398677
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
