import { personsImgs } from "../hooks/images";
import {
    MdLibraryMusic,
    MdOutlineDriveFolderUpload,
    MdManageAccounts,
    MdSettings,
    MdVideoLibrary,
    MdSpaceDashboard,
    MdScience
} from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import {GiAnimalHide, GiCeremonialMask} from "react-icons/gi";
// eslint-disable-next-line
import {
    FaUserLock,
    FaFilm,
    FaPlayCircle,
    FaThumbsUp,
    FaMobileAlt,
    FaList,
    FaShareAlt,
    FaDownload,
    FaUserAlt, FaBriefcase, FaLaptop, FaClipboardCheck, FaMoneyBillAlt,FaHubspot

} from 'react-icons/fa';
import { CgGames } from "react-icons/cg";
import { HiHomeModern } from "react-icons/hi2";
import {FaArrowTrendUp, FaUsersRectangle} from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import React from "react";



export const adminNavigationLinks = [
    { id: 1, title: 'Dashboard',link: '/admin', icon : < MdSpaceDashboard size={30}/> },
    { id: 2, title: 'Subscribers',link: '/admin/subs', icon : <FaUsersRectangle size={30}/>},
    { id: 3, title: 'Videos',link: '/admin/Videos', icon : <MdVideoLibrary size={30}/> },
    { id: 4, title: 'Music',link: '/admin/Musics', icon : <MdLibraryMusic size={30}/> },
    { id: 5, title: 'Upload',link: '/admin/upload', icon : <MdOutlineDriveFolderUpload size={30}/>},
    { id: 6, title: 'Requests',link: '/admin/request', icon : <MdOutlineMessage   size={30}/>},
    { id: 9, title: 'Account',link: '/admin/account', icon : <MdManageAccounts size={30}/>},
    { id: 10, title: 'Settings',link: '/admin/settings', icon : <MdSettings size={30}/>}
];

export const homeNavigationLinks = [
    { id: 783, title: 'Home', link: '/', icon : <HiHomeModern size={25}/> },
    { id: 93,  title: 'Videos',link: '/videos/Videos', icon : <MdVideoLibrary size={27}/> },
    { id: 272, title: 'Movies',link: '/videos/Movies', icon : <MdLocalMovies   size={27}/> },
    { id: 233, title: 'CGIs',link: '/videos/CGIs', icon : <GiAnimalHide  size={27}/> },
    { id: 344, title: 'Challenges',link: '/videos/Challenges', icon : <GiCeremonialMask size={27}/> },
    { id: 34431, title: 'Games',link: '/videos/Games', icon : <CgGames size={27}/> },
    { id: 3405, title: 'HUBs',link: '/videos/HUBs', icon : <FaHubspot size={27}/> },
    { id: 346, title: 'Trends',link: '/videos/Trends', icon : <FaArrowTrendUp  size={27}/> },
    { id: 366, title: 'Science',link: '/videos/Science', icon : <MdScience  size={27}/> },
];

export const videoRate = [
    {
        id: 11, 
        name: "VFX",
        image: personsImgs.person_four,
        date: "",
        amount: 27
    },
    {
        id: 12, 
        name: "Climbing Mountains",
        image: personsImgs.person_three,
        date: "",
        amount: 21
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "",
        amount: 30
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "On Videos",
        due_date: "23/12/04",
        amount: 0.00
    },
    {
        id: 252,
        title: "On Music",
        due_date: "23/12/10",
        amount: 0.00
    },
    {
        id: 25,
        title: "On Movies",
        due_date: "23/12/10",
        amount: 0.00
    },
    {
        id: 26,
        title: "Total",
        due_date: "23/12/22",
        amount: 0.00
    }
];

export const owners = [
    {
        id: 27,
        image: personsImgs.person_one,
        name:"Hirwa Hope",
        title: "PM",
        shares:45,
        date_taken: "23/12/22",
    }
    ,{
        id: 28,
        image: personsImgs.person_two,
        title: "Producer",
        name:"Nshuti Junior",
        shares:45,
        date_taken: "23/12/22",
    },{
        id: 30,
        image: personsImgs.person_three,
        title: "CO-founder",
        name:"Manzi Prince",
        shares:45,
        date_taken: "23/12/22",
    }
]

export const overview=[
    {
        id:31,
        title:"Movies",
        link:"videos/Movie",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
    },{
        id:31,
        title:"Trailers",
        link:"videos/Video",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg"
    },{
        id:31,
        title:"Music",
        link:"videos/Music",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/061.jpg"
    },{
        id:31,
        title:"VFX",
        link:"videos/VFX",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg"
    },{
        id:31,
        title:"Commeds",
        link:"videos/Commeds",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/048.jpg"
    },{
        id:31,
        title:"CGI",
        link:"videos/CGI",
        image:"https://mdbcdn.b-cdn.net/img/new/standard/city/051.jpg"
    },
]

export const features = [
    {
      id: 40,
      title: "User Authentication",
      description: "Allow users to create accounts, log in securely, and personalize their profiles.",
      icon: <FaUserLock />
    },
    {
      id: 41,
      title: "Content Catalog",
      description: "Offer a comprehensive catalog of movies and TV shows for users to browse or search through.",
      icon: <FaFilm />
    },
    {
      id: 42,
      title: "Streaming Player",
      description: "Provide a robust streaming player for smooth playback of high-quality video content.",
      icon: <FaPlayCircle />
    },
    {
      id: 43,
      title: "Recommendation Engine",
      description: "Suggest relevant content to users based on their preferences and viewing history.",
      icon: <FaThumbsUp />
    },
    {
      id: 44,
      title: "Device Compatibility",
      description: "Ensure compatibility with various devices, including desktops, laptops, smartphones, and tablets.",
      icon: <FaMobileAlt />
    },
    // {
    //   id: 45,
    //   title: "Payment Management",
    //   description: "Allow users to subscribe, manage their subscriptions, and make payments securely.",
    //   icon: <FaCreditCard />
    // },
    {
      id: 46,
      title: "Watchlists",
      description: "Let users create and manage watchlists of movies and shows they want to watch later.",
      icon: <FaList />
    },
    {
      id: 47,
      title: "Social Sharing",
      description: "Enable users to share their favorite movies and shows on social media platforms.",
      icon: <FaShareAlt />
    },
    {
      id: 48,
      title: "Offline Viewing",
      description: "Allow users to download content for offline viewing on supported devices.",
      icon: <FaDownload />
    },
    // {
    //   id: 49,
    //   title: "Subtitles and Dubbing",
    //   description: "Provide multiple language options for subtitles and dubbing to cater to diverse audiences.",
    //   icon: <FaClosedCaptioning />
    // }
  ];
  
  
export const contactus=[
  {
  id:60,
  title:"Technical support",
  email:"hirwaohope5@gmail.com",
  phone:"+250 784-976-100",
  label:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
  },{
  id:61,
  title:"Sales questions",
  email:"manzichriss6@gmail.com",
  phone:"+250 798 819 645",
  label:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>
  },{
  id:62,
  title:"Press",
  email:"manzichriss6@gmail.com",
  phone:"+250 798 819 645",
  label:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>
  },{
  id:60,
  title:"Bug report",
  email:"mbabazilouangeliza@gmail.com",
  phone:"+250 784-203-938",
  label:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
</svg>
  },
]

export const team = [
    {
        position: "Chief Executive Officer (CEO)",
        name: "HIRWA RUKUNDO Hope",
        title:"CEO",
        responsibilities: [
            "Provide strategic leadership and direction for Rebavid, setting long-term goals and objectives.",
            "Oversee the overall operations and performance of the company, ensuring alignment with the mission and vision.",
            "Represent Rebavid in external engagements, including partnerships, investor relations, and industry events.",
            "Lead the executive team, fostering a culture of innovation, collaboration, and accountability."
        ],
        icon: <FaUserAlt className="inline-block mr-2" />,
        image:personsImgs.hope_one,
        social: {
            linkedin: "https://www.linkedin.com/in/hirwa-rukundo-hope-114153265/",
            twitter: "#!",
            instagram: "https://www.instagram.com/__.hirwa.__2/",
            portfolio:"https://hirwarukundohope.onrender.com"
        },
        svg: <svg className="absolute text-gray-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
            <path fill="currentColor"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    },
    {
        position: "Chief Operating Officer (COO)",
        name: "MANZI PRINCE",
        title:"COO",
        responsibilities: [
            "Manage day-to-day operations and ensure efficient execution of business strategies.",
            "Oversee content acquisition, licensing agreements, and production initiatives.",
            "Coordinate with technology teams to maintain and enhance the platform's performance and user experience.",
            "Streamline internal processes and workflows to optimize productivity and resource allocation."
        ],
        icon: <FaBriefcase className="inline-block mr-2" />,
        image: personsImgs.prince_one,
        social: {
            linkedin: "#!",
            twitter: "#!",
            instagram: "https://www.instagram.com/prince_manzi1",
            portfolio:"https://manzichriss.netlify.app/"
        },
        svg: <svg className="absolute text-gray-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
            <path fill="currentColor"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    }
    ,
    {
        position: "Chief Technology Officer (CTO)",
        name: "Mbabazi Louange Liza",
        title:"CTO",
        responsibilities: [
            "Lead the development and implementation of Rebavid's technology strategy, including platform architecture, infrastructure, and security.",
            "Oversee software development, quality assurance, and technical operations to deliver a seamless and reliable user experience.",
            "Drive innovation and continuous improvement initiatives to stay ahead of technological advancements and industry trends.",
            "Collaborate with cross-functional teams to prioritize product features and enhancements based on user feedback and market demand."
        ],
        image: personsImgs.liza_one,
        social: {
            linkedin: "https://www.linkedin.com/in/mbabazi-louange-liza-6272a5261/",
            twitter: "#!",
            instagram: "https://www.instagram.com/__lis_a.a.h/",
            portfolio:"https://mportfolio-yttf.onrender.com"
        },
        svg: <svg className="absolute text-gray-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
            <path fill="currentColor"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>,
        icon: <FaLaptop className="inline-block mr-2" />
    },
    {
        position: "Chief Marketing Officer (CMO)",
        name: "",
        title:"CMO",
        responsibilities: [
            "Develop and implement comprehensive marketing strategies to drive user acquisition, engagement, and retention.",
            "Lead brand development efforts, positioning Rebavid as a leading destination for Rwandan entertainment.",
            "Manage advertising campaigns, social media presence, and public relations activities to enhance brand visibility and awareness.",
            "Analyze market trends and user feedback to inform product development and content curation decisions."
        ],
        icon: <FaClipboardCheck className="inline-block mr-2" />,
        image: "",
        social: {
            linkedin: "#!",
            twitter: "#!",
            instagram: "#!",
            portfolio:"#!"
        },
        svg: <svg className="absolute text-gray-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
            <path fill="currentColor"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    },
    {
        position: "Chief Financial Officer (CFO)",
        name: "",
        title:"CFO",
        responsibilities: [
            "Oversee financial planning, budgeting, and forecasting processes to ensure the financial health and sustainability of Rebavid.",
            "Manage financial reporting and analysis, providing insights to support strategic decision-making.",
            "Monitor cash flow, revenue streams, and expense management to optimize profitability and efficiency.",
            "Establish and maintain relationships with investors, banks, and financial institutions to secure funding and capital as needed."
        ],
        icon: <FaMoneyBillAlt className="inline-block mr-2" />,
        image: "",
        social: {
            linkedin: "#!",
            twitter: "#!",
            instagram: "#!",
            portfolio:"#!"
        },
        svg: <svg className="absolute text-gray-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
            <path fill="currentColor"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    }
];


