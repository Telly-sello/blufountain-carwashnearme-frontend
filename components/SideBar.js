import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="secondary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          border: 1,
        }}
      >
        {collapsed ? (
          <div className="">
            <div className="flex border  hover:bg-blue-500 hover:text-white-300 w-20 border-blue-500 text-blue-500 p-1 rounded-lg shadow-md">
              <MenuFoldOutlined />
              <h1 className="ml-2 -mt-1"> Close </h1>
            </div>

            <div className=" mx-auto mt-6 rounded-lg shadow-md bg-white-500">
              <aside className="w-64" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                  <ul className="space-y-2">
                  <li>
                      <a
                        href="http://localhost:3000"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex ml-3">
                          BluFountain
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3001"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                      <Image 
                       src={"/assets/hairdresser.png"}
                       width={20} 
                       height={26}/>
                        <span className="ml-3">Find A Barber</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3002"
                       
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                       <Image 
                       src={"/assets/haircut.png"}
                       width={20} 
                       height={26}/>
                        <span className="flex ml-3">
                          Book A Saloon
                        </span>
                       
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3003"
                     
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                      <Image 
                       src={"/assets/talk to clients.png"}
                       width={20} 
                       height={26}/>
                        <span className="flex ml-3">
                          Get A Lawyer
                        </span>
                      
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://localhost:3004"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                       <Image 
                       src={"/assets/value mycar.png"}
                       width={20} 
                       height={26}/>
                        <span className="flex ml-3">
                          CarWash NearMe
                        </span>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex ml-3">
                         My Engineer
                        </span>
                      </a>
                    </li> */}
                  
                
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="flex border w-20 border-blue-500 hover:bg-blue-500 hover:text-white-300 text-blue-500 p-1 rounded-lg shadow-md">
          <MenuFoldOutlined />
          <h1 className="ml-2 -mt-1 "> View </h1>
        </div>
        )}
      </Button>
    </div>
  );
};
export default SideBar;
