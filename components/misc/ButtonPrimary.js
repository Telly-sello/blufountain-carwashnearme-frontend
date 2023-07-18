import React from "react";

const ButtonPrimary = ({ children}) => {
  return (
    // <button
    //   className={
    //     "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
    //     addClass
    //   }
    // >
    //   {children}
    // </button>

    <button type="button" className="px-2 py-1 text-sm font-normal text-gray-900 bg-white border border-gray-100 rounded-l-full rounded-r-full hover:bg-blue-400 hover:text-white-500 focus:z-10 focus:bg-blue-400 focus:text-white-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
{" "}
{children}
</button> 
  );
};

export default ButtonPrimary;
