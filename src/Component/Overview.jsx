import React, { useState } from "react";
import SideBar from "./Sidebar";
import { Dropdown } from "flowbite-react";
import NotificationBell from "./NotificationBell";
import { Card } from "flowbite-react";
import { AiOutlineWifi } from "react-icons/ai";

export default function Overview() {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} | ${currentDate.toLocaleTimeString()}`;

  // Sample data for the table
  const tableData = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  return (
    <>
      <div className="flex flex-grow">
        <div className="block">
          <SideBar />
        </div>
        <div className="flex flex-col pt-5 w-full bg-[#E4E4E4] shadow-inner">
          <div className="flex items-center ps-5 pr-3 justify-between pb-2 border-b-2  border-gray-300">
            <h1 className="text-[2.5rem] font-medium text-[#272727]">
              Overview
            </h1>
            <div className="flex items-center gap-5">
              <NotificationBell />

              <div className="flex items-center">
                <div className="block bg-[#FFFFFF] p-2 rounded">
                  <h2 className="">OS</h2>
                </div>
                <Dropdown label="" inline>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[10px] ps-4 pr-2 pt-7">
            <Card href="#" className="max-w-sm bg-custom-gradient">
              <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="block bg-white bg-opacity-25 rounded-full p-2">
                  <AiOutlineWifi className="text-white" />
                </div>
                <h1 className="text-lg text-white font-normal">
                  Wallet Balance
                </h1>
              </div>
              <h2 className="font-normal py-3 text-white text-4xl dark:text-gray-400">
                N500,000.00
              </h2>
              <h2 className="block max-w-fit text-sm rounded-lg text-white font-medium bg-white bg-opacity-10 p-2 uppercase">
                wallet
              </h2>
            </Card>
            <Card href="#" className="max-w-sm bg-custom-blueish">
              <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="block bg-blue-600 bg-opacity-25 rounded-full p-2">
                  <AiOutlineWifi className=" text-white" />
                </div>
                <h1 className="text-lg text-white font-normal">
                  Commission Balance
                </h1>
              </div>
              <h2 className="font-normal py-3 text-white text-4xl dark:text-gray-400">
                N230,000.00
              </h2>
              <h2 className="block max-w-fit text-sm rounded-lg text-white font-medium bg-white bg-opacity-10 p-2 uppercase">
                Commission
              </h2>
            </Card>
            <Card href="#" className="max-w-sm bg-white">
              <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="block bg-[#5B5AFB] bg-opacity-25 rounded-full p-2">
                  <AiOutlineWifi className=" text-[#5B5AFB]" />
                </div>
                <h1 className="text-lg text-[#434343] font-normal">
                  Credit Transaction
                </h1>
              </div>
              <h2 className="font-normal py-3 text-[#434343] text-4xl dark:text-gray-400">
                N500,000.00
              </h2>
              <h2 className="block max-w-fit text-sm rounded-lg text-[#5B5AFB] font-medium bg-[#5B5AFB]  bg-opacity-25 p-2 uppercase">
                wallet
              </h2>
            </Card>
            <Card href="#" className="max-w-sm bg-white">
              <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="block bg-[#5B5AFB] bg-opacity-25 rounded-full p-2">
                  <AiOutlineWifi className=" text-[#5B5AFB]" />
                </div>
                <h1 className="text-lg text-[#434343] font-normal">
                  Debit Transaction
                </h1>
              </div>
              <h2 className="font-normal py-3 text-[#434343] text-4xl dark:text-gray-400">
                N500,000.00
              </h2>
              <h2 className="block max-w-fit text-sm rounded-lg text-[#5B5AFB] font-medium bg-[#5B5AFB]  bg-opacity-25 p-2 uppercase">
                wallet
              </h2>
            </Card>
          </div>
          <div className="flex flex-col py-5 px-4 m-4 rounded-lg bg-white overflow-x-auto">
            <h1 className="text-xl font-normal text-[#434343] pb-5 ">Recent Transactions</h1>

            <table>
      <thead>
        <tr>
          <th>Merchant </th>
          <th></th>
          <th></th>
          <th>Description</th>
          <th>Date and Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{formattedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </>
  );
}
