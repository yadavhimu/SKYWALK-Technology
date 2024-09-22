import React from "react";

const Google_Adwords = () => {
  return (
    <div>
      <div className="flex gap-1 justify-center mt-8">
        <h1 className="text-3xl lg:text-6xl  text-blue-950">Digital Marketing</h1>
      </div>

      <div className="w-[100%] mt-6">
        <div className="lg:flex ">
          <div className="w-[100%] grid-cols-2 mr-4 mt-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl flex justify-end text-yellow-500">
              Our Digital Marketing experts will <br />
              help your business stay on top of the
              <br /> search engines
            </h1>
            <p className="text-xl flex  lg:justify-end mt-10">
              Billions of searches are conducted every second. With the {" "}
              light deft touch of a professional SEO, you can grow traffic
              and increase the reach of your brand in unprecedented ways.
            </p>
            <div className="lg:flex ml-5 lg:ml-48 mt-10">
              <ul className="list-disc text-xl font-medium">
                <li>eCommerce SEO</li>
                <li>Enterprise SEO</li>
                <li>Local SEO</li>
                <li>Video SEO</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%]">
            <img src="./images/SEO.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-10 lg:flex">
        <div className="w-[100%] mt-24">
          <img src="./images/social.jpeg" alt="" />
        </div>
        <div className="w-[100%] mt-20 lg:ml-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-yellow-500">
            Social media marketing services for <br />
            all bussiness.
          </h1>
          <p className="text-xl mt-3">
            With Android projected to dominate the application space in
             the coming years, enter and thrive with a custom app built
             exclusively for your business. As the stellar android mobile
             app development company, we analyze and deliver
             intelligent solutions to help bring startups and enterprises
             vision to life.
          </p>

          <ul className="list-disc text-xl mt-4 ml-4 font-medium">
            <li>Facebook marketing</li>
            <li>Instagram marketing</li>
            <li>Twitter marketing</li>
            <li>LinkedIn marketing</li>
            <li>Youtube marketing</li>
            <li>Pinterest marketing</li>
          </ul>
        </div>
      </div>

      <div className="w-[100%] mt-14">
        <div className="lg:flex ">
          <div className="w-[100%] grid-cols-2 mr-4 mt-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl flex lg:justify-end text-yellow-500">
              Want More Clicks, Leads, and
              <br /> Sales? PPC Management Services
              <br /> by a Top PPC Company
            </h1>
            <p className="text-xl flex justify-end mt-10">
              We want to help you make your PPC campaign a success.
               Get in touch today for more information on how our PPC
               management services can into your overall business goals.
               We are experts in such platforms like Google Adwords
               and Bing Ads and will create a marketing strategy that is
               uniquely tailored to your business needs.
            </p>
            <div className="flex  ml-5 lg:ml-48 mt-10">
              <ul className="list-disc text-xl font-medium">
                <li>Pay per Click</li>
                <li>Google Adwords</li>
                <li>Lead Based Marketing</li>
                <li>Search Advertising</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%]">
            <img src="./images/PPC.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-10 lg:flex">
        <div className="w-[100%] mt-24 flex lg:justify-end">
          <img className="" src="./images/content_marketing.png" alt="" />
        </div>
        <div className="w-[100%] mt-20 lg:ml-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-yellow-500">
            When we say we’re a content
            <br /> marketing agency, we don't just create
            <br />
            content for you. We drive results.
          </h1>
          <p className="text-xl mt-3">
            Our Content Marketing Strategists take a scientific approach
            <br /> to inbound marketing and content marketing campaigns
            <br /> using hard data to craft the perfect strategy to achieve
            client
            <br /> goals.
          </p>

          <ul className="list-disc text-xl mt-4 ml-4 font-medium">
            <li>Content marketing</li>
            <li>SEO Copywriting</li>
            <li>Guest Posting</li>
          </ul>
        </div>
      </div>

      <div className="w-[100%] mt-14">
        <div className="lg:flex ">
          <div className="w-[100%] grid-cols-2 mr-4 mt-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl flex lg:justify-end text-yellow-500">
              Mobile App Marketing Services To
              <br /> Enhance User Acquisition
            </h1>
            <p className="text-xl flex justify-end mt-10">
              Delta Soft System App Marketing Agency helping brands <br /> and
              start-ups grow their mobile business through <br /> understanding
              customer needs and creating tailored <br /> marketing strategies
              to engage audience and facilitate rapid <br /> user acquisition.
              We will help you outshine your <br /> competitors through
              understanding the right marketing <br /> channels for your mobile
              app and then crafting promotion and
              <br /> marketing accordingly.
            </p>
            <div className="flex ml-5  lg:ml-48 mt-10">
              <ul className="list-disc text-xl font-medium">
                <li>App Store Optimizing</li>
                <li>Mobile App Marketing</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%]">
            <img src="./images/mobile_marketing.jpeg" alt="" />
          </div>
        </div>
      </div>

      <p className="flex justify-center mt-10 text-3xl text-center text-gray-600">
        We provide digital marketing services which employs data to provide you
        with<br/> full-service for your needs
      </p>
    </div>
  );
};

export default Google_Adwords;
