"use client";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Sidebar} from "flowbite-react";
import { HiMenu, HiX } from 'react-icons/hi'; 
import { Home, Role, Customers, Wallets, Transact,Reports,  Setting} from "./Svg_icon";
import ChildComponent from './ChildComponent';
export default function SideBar() {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  return (
    <>
    <Sidebar aria-label="Default sidebar example" className='hidden  lg:block h-screen shadove  max-w-[16rem]' style={{ backgroundColor: 'transparent' }}>
      <Sidebar.Items className='px-5 pt-20 max-w-[12rem]'>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/overview" icon={()=> <ChildComponent className="hover:bg-[#5B5AFB]" icon={Home} />} className="transition ease-out duration-300 transform hover:bg-custom-blue pl-3 font-medium text-[#817D7D]  active:font-semibold active:text-[#5B5AFB]">
            <Link to='/overview'>Overview</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Role} /> } className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]" >
            <Link to='/user'>User & Roles</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Customers} /> } className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"  >
          <Link to='/custoner'>Customers</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Wallets} /> } className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]">
          <Link to='/user'>Wallet</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Transact} />}  className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]" >
          <Link to='/user'>Transactions</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Reports} />} className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]">
          <Link to='/user'>Reports</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={()=> <ChildComponent icon={Setting} />} className="transition ease-out duration-300 transform hover:scale-105 pl-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]">
          <Link to='/user'>Settings</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    <div>
    {isSidebarOpen ? (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <HiX className="text-white text-2xl" />
          </div>
        </div>
        <Sidebar className="Sidebar bg-white w-64 h-full overflow-y-auto">
          <h1 className="text-3xl">mobile screen</h1>
        </Sidebar>
      </div>
    ) : (
      <div className="md:hidden">
        <div className="fixed top-0 left-0 mt-4 ml-4">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <HiMenu className="text-gray-700 text-2xl" />
          </div>
        </div>
      </div>
    )}
  </div>
    </>
  );
}
