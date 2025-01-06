import React from "react";

const Refund_Policy = () => {
  return (
    <div>
      <h1 className="text-3xl flex justify-center mt-24 font-semibold">
        Refund Policy
      </h1>


      <p className="mt-10 text-xl">
        VIKAS GUPTA believes in helping its customers as far as possible, and
        has therefore a liberal cancellation policy. Under this policy:
      </p>
      <ol className="list-disc ml-6 text-lg mt-10">
        <li className="mt-5">
          Cancellations will be considered only if the request is made
          immediately after placing the order. However, the cancellation request
          may not be entertained if the orders have been communicated to the
          vendors/merchants and they have initiated the process of shipping
          them.
        </li>
        <li className="mt-5">
          VIKAS GUPTA does not accept cancellation requests for perishable items
          like flowers, eatables etc. However, refund/replacement can be made if
          the customer establishes that the quality of product delivered is not
          good.
        </li>
        <li className="mt-5">
          In case of receipt of damaged or defective items please report the
          same to our Customer Service team. The request will, however, be
          entertained once the merchant has checked and determined the same at
          his own end. This should be reported within 7 Days days of receipt of
          the products. In case you feel that the product received is not as
          shown on the site or as per your expectations, you must bring it to
          the notice of our customer service within 7 Days days of receiving the
          product. The Customer Service Team after looking into your complaint
          will take an appropriate decision.
        </li>
        <li className="mt-5">
          In case of complaints regarding products that come with a warranty
          from manufacturers, please refer the issue to them. In case of any
          Refunds approved by the VIKAS GUPTA, it’ll take 1-2 Days days for the
          refund to be processed to the end customer.
        </li>
      </ol>
    </div>
  );
};

export default Refund_Policy;
