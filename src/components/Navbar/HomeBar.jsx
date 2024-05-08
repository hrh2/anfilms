import React from 'react';

import anfilms from '../../assets/anfilms.png'
const Navbar = () => {
  // State to manage the navbar's visibility

  return (
    

<nav className="border-gray-200 bg-[#1d1a1ac4] z-40 absolute top-0 left-0 !w-[100vw] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={anfilms} className="h-[4rem]" alt="Flowbite Logo" />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap !text-white">anfilms</span> */}
  </a>
  <div className="flex md:order-2 bg-inherit">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden  !text-gray-400 hover:bg-gray-100 !hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 !focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4  !text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm  border rounded-lg  focus:border-blue-500  !border-gray-600 !placeholder-gray-400 text-white focus:ring-blue-500 !focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 !text-gray-400 !hover:bg-gray-700 !focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 !text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm border rounded-lg  focus:border-blue-500  !border-gray-600 !placeholder-gray-400 !text-white focus:ring-blue-500 !focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   !border-gray-700">
        <li>
          <a href="/" className="block py-3 px-4 text-white rounded md:bg-transparent  md:p-0 md:!text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/auth/login" className="block py-3 px-4 rounded  md:hover:text-blue-700 md:p-0 md:!hover:text-blue-500 !text-white  hover:text-white md:!hover:bg-transparent !border-gray-700">Login</a>
        </li>
        <li>
          <a href="/auth/signup" className="block py-3 px-4 rounded   md:hover:text-blue-700 md:p-0 !text-white md:!hover:text-blue-500  hover:text-white md:!hover:bg-transparent !border-gray-700">Signup</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;