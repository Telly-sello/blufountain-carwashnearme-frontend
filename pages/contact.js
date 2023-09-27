import React from 'react';
import Layout from '../components/Layout/Layout';
import SideBar from '../components/SideBar';

const Contact = () => {
 
  return (
    <Layout >
      <div className='flex mt-3'>
      <div className="ml-36 mt-44">

<SideBar />
</div>
    <div className="bg-gray-10  ml-96  mt-44  justify-center  flex flex-col shadow-md">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl text-blue-300 font-semibold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white-300 px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default Contact;
