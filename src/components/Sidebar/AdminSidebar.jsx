import { useEffect, useState } from 'react';
import { personsImgs } from '../../hooks/images';
import { adminNavigationLinks } from '../../data/data';
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import { MdExitToApp } from 'react-icons/md'; 


const Sidebar = ({admin}) => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  // Start with loader shown initially

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);
  const handleLogout = () => {
    localStorage.removeItem('anfilms_client_token');
    localStorage.removeItem('anfilms_admin_token');
     window.location.href = '/'; 
  };

  return (
    <div className={ `sidebar ${sidebarClass} bg-sidebar` }>
    <div className='fixed'>
      <div className="user-info cursor-pointer">
          <div className="info-img img-fit-cover">
              <img src={admin.image?admin.image:personsImgs.person_one } alt="child" />
          </div>
          <span className="info-name !text-[#000]">{admin.role?admin.role:`ADMIN`}</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              adminNavigationLinks.map((navigationLink) => (
                <li className="nav-item" key = { navigationLink.id }>
                  <a href={`${navigationLink.link}`} className={ `nav-link !text-[#1d1c1ce6] ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      {navigationLink.icon}
                      <span className="nav-link-text !text-[#000]">{ navigationLink.title }</span>
                  </a>
                </li>
              ))
            }
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-item flex gap-4 hover:bg-[#20ff5493] font-extrabold fixed bottom-3 py-3 px-2 rounded-md !text-[#fff]">
                {/* Add logout icon */}
                <MdExitToApp size={20} color='#ff0000' />
                <span className="nav-link-text !text-[#fff]">Logout</span>
              </button>
            </li>
          </ul>
      </nav>
    </div>
  </div>
  )
}

export default Sidebar
