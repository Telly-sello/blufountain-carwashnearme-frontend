import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button type="button" className="px-3 py-1 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500">
      {" "}
      {children}
    </button>

  //   <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-gray-100 text-black-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
  //   {" "}
  //   {children}
  // </button>

// <button type="button" class="px-2 py-1 text-sm font-normal text-gray-900 bg-white border border-gray-100 rounded-l-full rounded-r-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
//{" "}
//{children}
//</button> */}
  );
};

export default ButtonOutline;
