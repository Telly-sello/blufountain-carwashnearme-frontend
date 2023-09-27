import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Image from "next/image";

const DropdownApp = ({ user, name }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          className="flex"
          rel="noopener noreferrer"
          href="http://localhost:3000"
        >
          <svg
            className="flex-shrink-0 w-5 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
          <p className="ml-1 text-black-600">BluFountain</p>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          className="flex"
          rel="noopener noreferrer"
          href="http://localhost:3001"
        >
          <Image src={"/assets/hairdresser.png"} width={20} height={19} />{" "}
          <p className="ml-1 text-black-600">Find A Barber</p>
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
        className="flex"
        rel="noopener noreferrer"
        href="http://localhost:3002"
      >
        <Image src={"/assets/haircut.png"} width={20} height={19} />{" "}
        <p className="ml-1 text-black-600">Book A Saloon</p>
      </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          className="flex"
          rel="noopener noreferrer"
          href="http://localhost:3003"
        >
          <Image src={"/assets/talk to clients.png"} width={20} height={19} />{" "}
          <p className="ml-1 text-black-600"> Get A Lawyer</p>
        </a>
      ),
    },
    // {
    //   key: "5",
    //   label: (
    //     <a
    //     className="flex"
    //     rel="noopener noreferrer"
    //     href="http://localhost:3004"
    //   >
    //     <Image src={"/assets/value mycar.png"} width={20} height={19} />{" "}
    //     <p className=" ml-1 text-black-600">CarWash NearMe</p>
    //   </a>
    //   ),
    // },
    // {
    //   key: "5",
    //   danger: true,
    //   label: (
    //     <div className="flex">
    //       <svg
    //         className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //       <a rel="noopener noreferrer" href="/">
    //         Sign Out
    //       </a>
    //     </div>
    //   ),
    //   disabled: true,
    // },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div className="text-[17px] flex -mt-1 font-thin">
            <p className="pr-1">Apps</p>
            <div className="-mt-1">
              <DownOutlined />
            </div>
          </div>
        </Space>
      </a>
    </Dropdown>
  );
};
export default DropdownApp;
