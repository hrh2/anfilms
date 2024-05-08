import { FaBell } from "react-icons/fa";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { ImSearch } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";



const ContentTop = ({error}) => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top bg-admin px-5 text-white py-3 ">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <MdMenuOpen  size={30}/>
            </button>
            {error&&<h3 className="content-top-title text-red-500">{error}</h3>}
        </div>
        <div className="content-top-btns px-4 pt-2">
            <button type="button" className="search-btn content-top-btn">
                <ImSearch  size={30}/>
            </button>
            <button className="notification-btn content-top-btn">
                <FaBell size={30}/>
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
