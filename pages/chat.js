import Layout from "../components/Layout/Layout";
import SideBar from "../components/SideBar";
import React from "react";

const ChatPage = () => {
  // Mock chat messages (you can replace this with real data)
  const messages = [
    { user: "User 1", text: "Hello, how are you?" },
    { user: "User 2", text: "Im good, thanks! How about you?" },
    // Add more messages here...
  ];

  return (
    <Layout>
      <div className="flex justify-betwen mt-3">
        <div className="ml-36 mt-44">
          <SideBar />
        </div>
        <div className="bg-gray-10 h-[400px] ml-96  mt-44 w-[500p] justify-center  flex flex-col shadow-md">
          <div className="bg-white p-4 border- shadow-md">
            <h1 className="text-2xl text-blue-300 font-bold">
              Chat with Support
            </h1>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.user === "User 1" ? "text-left" : "text-right"
                }`}
              >
                <span className="text-gray-600 font-bold">{message.user}:</span>
                <p className="bg-blue-100 p-2 rounded-lg inline-block">
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 border-t shadow-md">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-200 text-white p-2 rounded-r-md hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
