import React from "react";
import Swal from 'sweetalert2'

const Career_ = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "69bcf56e-9748-4d7a-a861-a2c4533ccd93");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

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
          <span className="text-red-900 font-medium">SKYWALK Technology</span>{" "}
          you will be a part of a company that has a strong commitment to its
          employees.From our professional work environment to our excellent
          benefits , to our ongoing training, we take care of the people that
          make us strong.
        </p>
      </div>

      <div className="lg:flex w-full mt-10 lg:mt-32">
        <div className=" w-full   lg:ml-20  mt-14">
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <label></label>
              <input
                type="text"
                className="w-[100%] lg:w-[60%] h-16"
                placeholder="Full Name"
                name='name'
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
                name='email'
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
                name='phone'
                required
              />
              <hr className="border-2 border-orange-500 w-[100%] lg:w-[60%]" />
            </div>
            <div className="input-box">
              <label></label>
              <select name='Position' className="Select Position w-[100%] lg:w-[60%] h-16">
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
        <div className="w-[100%] sm:w-full">
          <img src="./images/careerpage.webp" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Career_;
