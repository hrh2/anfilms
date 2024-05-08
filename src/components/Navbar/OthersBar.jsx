import React, { useState } from 'react';

const availableLinks = [
  { text: 'Home', href: '/' },
  { text: 'Contact', href: '/checkout/contactus' },
  { text: 'About Us', href: '/checkout/aboutus' },
  { text: 'videos', href: '/videos' },
  { text: 'music', href: '/musics' },
];

export default function OthersBar() {
  // State to store user input
  const [searchInput, setSearchInput] = useState('');

  // Function to filter links based on user input
  const filteredLinks = availableLinks.filter(link =>
    link.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <nav className="relative flex flex-col items-center justify-center w-full py-2 bg-[#0000009d] lg:py-4">
      <div className="flex mx-auto md:w-[30%] w-[80%] items-center justify-between">
        <input
          type="search"
          className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-green-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-white focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none !text-white placeholder:text-gray-300"
          placeholder="Search for your next move"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-describedby="button-addon2"
        />
        <span
          className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal !text-white [&>svg]:w-5"
          id="basic-addon2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {searchInput && (
        <div className="absolute py-6 !h-[20vh] top-[13rem]  transform -translate-y-1/2  mx-auto md:w-[50%] sm:w-[80%] w-[90%] bg-[#000000b7] rounded-lg grid grid-cols-1 gap-4 z-30">
          {filteredLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-blue-500 hover:underline px-4">
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
