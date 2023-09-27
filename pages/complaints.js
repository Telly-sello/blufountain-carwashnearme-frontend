import React from "react";
import Layout from "../components/Layout/Layout";
import SideBar from "../components/SideBar";

const ComplaintsPage = () => {
 
  return (
    <Layout >
      <div className=" flex mt-3">
        <div className="ml-36 mt-44">
          <SideBar />
        </div>

        <div className="bg-gray-10  ml-96  mt-44  justify-center  flex flex-col shadow-md">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h1 className="text-2xl text-blue-500 font-semibold mb-4">
              Submit a Complaint
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="complaint" className="block text-gray-300">
                  Complaint:
                </label>
                <textarea
                  id="complaint"
                  name="complaint"
                  className="w-full h-32 px-3 py-2 border rounded-lg focus:outline-none  focus:border-blue-300"
                  placeholder="Type your complaint here..."
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-blue-300"
                  placeholder="Your name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white-300 font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit Complaint
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComplaintsPage;
