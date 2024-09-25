import React from 'react'

const Refund_Policy = () => {
  return (
    <div>
      <h1 className='text-3xl flex justify-center mt-24 font-semibold'>Refund Policy</h1>

      <p className='text-2xl text-gray-500 mt-20 font-medium'>Money Back Guarantee & Refund Policy</p>

      <p className='mt-10 text-xl'>At Delta Soft System we want to ensure that you are 100% happy with your purchase.</p>
      <ol className='list-disc ml-6 text-lg'>
        <li>
        If you have technical or sales queries, do not hesitate to contact us.
        </li>
        <li>
        If after you attempted to resolve issues with Support staff and feel the product(s) you purchased does/do not the best fit your requirements, we want to make things right.
        </li>
      </ol>
      <p className='text-xl'>
      Our policy offers a full, no-hassle refund within 14 days of your date of purchase. We’d love to know what went wrong and how we can improve.
      </p>
      <p className='text-xl'>
      Delta Soft System makes every attempt to process the refund as quickly as possible. But our payment processor or your financial institution can take up to 20 days for the refund to reflect in your bank account/card.
      </p>
    </div>
  )
}

export default Refund_Policy
