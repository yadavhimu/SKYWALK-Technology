import React from "react";

const Software_Development = () => {
  return (
    <div>
      <div className="flex gap-1 justify-center mt-8">
        <h1 className="text-4xl lg:text-6xl  text-blue-950">Software Development</h1>
      </div>

      <div className="w-[100%] mt-6">
        <div className="lg:flex">
          <div className="w-[100%] lg:grid-cols-2 lg:mr-4">
            <h1 className=" text-2xl lg:text-5xl flex justify-end text-yellow-500">
              Custome Web Application
            </h1>
            <p className=" text-lg lg:text-xl flex justify-end mt-5">
              Earlier SaaS was the key model that companies adopted,
               but that is no longer the case considering increased
               costs, limited customizations and vague data ownership
               terms. Moreover, as business workflows become more
               elaborate, custom software that can solve business
               needs without having to work around the limitations of
              off-the-shelf software become necessary.
            </p>
            <div className="flex justify-around lg:ml-48 mt-10">
              <ul className="list-disc">
                <li>PHP</li>
                <li>Mysql</li>
                <li>Java</li>
                <li>MicrosoftASP.NET</li>
              </ul>
              <ul className="list-disc">
                <li>Microsoft MVC5</li>
                <li>Microsoft WPF</li>
                <li>C#</li>
                <li>Mysql Lite</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] lg:mt-0 mt-8">
            <img src="./images/asset 2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-10 lg:flex">
        <div className="w-[100%]">
          <img src="./images/asset 3.png" alt="" />
        </div>
        <div className="w-[100%] mt-20 lg:ml-10">
          <h1 className=" text-2xl lg:text-5xl text-yellow-500">
            Transform your app ideas <br /> into successful businesses?
          </h1>
          <p className="text-lg lg:text-xl mt-5">
            With Android projected to dominate the application space in
             the coming years, enter and thrive with a custom app built
             exclusively for your business. As the stellar android mobile
             app development company, we analyze and deliver
             intelligent solutions to help bring startups and enterprises
             vision to life.
          </p>
        </div>
      </div>

      <div className="w-[100%] mt-6">
        <div className="lg:flex">
          <div className="w-[100%] grid-cols-2 mr-4 mt-5">
            <h1 className="text-2xl lg:text-5xl flex justify-end text-yellow-500">
              Turns your vision into
              reality
            </h1>
            <p className="text-lg lg:text-xl flex justify-end mt-5">
              Our expert team of top-notch custom iOS apps
              developers is developing custom iOS mobile solutions
               from many years now. We follow a blend of Objective-C
               and Apple Inc. latest programming platform – Swift for
               developing custom iPhone apps that can do wonders for
               their owners in terms of revenue and brand value.
            </p>
          </div>
          <div className="w-[100%] lg:mt-0 mt-5">
            <img src="./images/asset 4.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-10 lg:flex">
        <div className="w-[100%]">
          <img src="./images/asset 3.png" alt="" />
        </div>
        <div className="w-[100%] mt-5 lg:ml-10">
          <h1 className="text-2xl lg:text-5xl text-yellow-500">
            The best windows <br />
            application development
            <br />
            services
          </h1>
          <p className="text-lg lg:text-xl mt-5">
            When it comes to choosing the best smartphone, most of
            the contemporary people love to go with Windows
            Phones. Windows phones are considered as the most
             popular devices available in the global market to choose
           from. We at Orange Mantra have been using significant
             SDK for Windows Mobile Application Development, and
             have excelled it successfully.
          </p>
        </div>
      </div>

     <div className="text-center mt-16">
      <h1 className=" text-2xl  lg:text-5xl">
       <span className=" text-yellow-500">Delta Soft System</span>provides Software Development
        <br /> Solutions customized to meet your needs
      </h1>
      <p className="text-lg lg:text-xl mt-6">
      Understanding your requirements of Software Development and objectives is important to us. We listen and work<br/> together to create a truly unique experience.
      </p>
      </div>
    </div>
  );
};

export default Software_Development;
