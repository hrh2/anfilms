import React, { useEffect, useState } from 'react';
import { personsImgs } from '../../hooks/images';
import { homeNavigationLinks } from '../../data/data';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import {MdExitToApp, MdManageAccounts} from 'react-icons/md'; // Importing logout icon
import { Link } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const [activeLinkIdx] = useState(1);
  const [sidebarclassName, setSidebarclassName] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarclassName('sidebar-change');
    } else {
      setSidebarclassName('');
    }
  }, [isSidebarOpen]);

  const handleLogout = () => {
    localStorage.removeItem('anfilms_client_token');
    localStorage.removeItem('anfilms_admin_token');
     window.location.href = '/'; 
  };

  return (
    <div className={`sidebar ${sidebarclassName} relative !bg-gradient-to-tl from-[#20f48e26] to-[#030303f5]`}>
      <div className='fixed'>
        <div className="user-info cursor-pointer">
          <Link to={user.lastName ?"/account":"/admin"}>
          <div className="info-img img-fit-cover">
              <img src={user.image ? user.image : personsImgs.person_one} alt="child" />
          </div>
          <span className="info-name !text-[#fff]">{user.lastName ? user.lastName : user.role? user.role : "Am in"}</span>
          </Link>
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            {homeNavigationLinks.map((navigationLink) => (
                <li className="nav-item" key={navigationLink.id}>
                  <Link to={`${navigationLink.link}`}
                        className={`nav-link !text-[#fff] ${navigationLink.id === activeLinkIdx ? 'active' : null}`}>
                    {navigationLink.icon}
                    <span className="nav-link-text !text-[#fff]">{navigationLink.title}</span>
                  </Link>
                </li>
            ))}
            <li className="nav-item" key={"Constant"}>
              <Link to={`/account`}
                    className={`nav-link !text-[#fff]`}>
                <MdManageAccounts size={27}/>
                <span className="nav-link-text !text-[#fff]">Account</span>
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout}
                      className="nav-item flex gap-4 hover:bg-[#20ff5493] font-extrabold fixed bottom-3 py-3 px-2 rounded-md !text-[#fff]">
                {/* Add logout icon */}
                <MdExitToApp size={20} color='#ff0000'/>
                <span className="nav-link-text !text-[#fff]">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
