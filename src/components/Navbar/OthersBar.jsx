import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Typography} from "@mui/material";

const availableLinks = [
  { text: 'Home', href: '/', description: "Navigate to the home page of the website." },
  { text: 'Contact', href: '/checkout/contactus', description: "Redirect to the contact page for reaching out to the website's administrators or support team." },
  { text: 'About Us', href: '/checkout/aboutus', description: "Provides information about the website or organization, including its mission, team, and history." },
  { text: 'Videos', href: '/videos/Video', description: "Explore a collection of videos available on the website." },
  { text: 'Music', href: '/videos/Music', description: "Access a selection of music content available on the website." },
  { text: 'VFX', href: '/videos/VFX', description: "View videos featuring visual effects (VFX)." },
  { text: 'Account', href: '/account', description: "View account details" },
  { text: 'CGI', href: '/videos/CGI', description: "Explore videos showcasing computer-generated imagery (CGI)." },
  { text: 'Trailers', href: '/videos/Trailer', description: "Watch trailers of upcoming movies, series, or projects." },
  { text: 'Commeds', href: '/videos/Commed', description: "Access comedy videos or sketches available on the website." },
  { text: 'Team', href: '/checkout/aboutus', description: "Learn about the team behind the website or organization." },
  { text: 'Organization', href: '/checkout/aboutus', description: "Discover information about the organization behind the website, including its structure and objectives." },
  { text: 'News', href: '/checkout/news', description: "Stay updated with the latest news and announcements related to the website or organization." },
  { text: 'Help Center', href: '/checkout/contactus', description: "Access resources and support to address any issues or inquiries users may have." },
  { text: 'Features', href: '/checkout/features', description: "Learn about the features and functionalities offered by the website or platform." },
];


export default function OthersBar() {
  // State to store user input
  const [searchInput, setSearchInput] = useState('');
  const handleNavigation=()=>{
    setSearchInput('')
  }

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
        <div className="absolute py-6 !min-h-[10vh]  !max-h-[50vh] top-[18rem] overflow-y-scroll transform -translate-y-1/2  mx-auto md:w-[50%] sm:w-[80%] w-[90%] bg-[#000000b7] rounded-lg grid grid-cols-1 gap-4 z-30 px-4">
          {filteredLinks.map((link, index) => (
            <Link key={index} onClick={handleNavigation} to={link.href} className="text-blue-600 hover:underline p-4 border-2 rounded-md ">
              <Typography fontSize={20}>
                {link.text}
              </Typography>
              <Typography fontSize={15} className="pl-4 text-blue-500">
                {link.description}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
