import { FaBell } from "react-icons/fa";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { ImSearch } from "react-icons/im";
import { MdMenuOpen } from "react-icons/md";
import ChatBox from "../Cards/ChatBox";



const ContentTop = ({user,error}) => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top  px-5 py-4 !text-[#fff] !bg-gradient-to-r !from-[#00000045] !to-[#000000d5] !mb-0 shadow-lg">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <MdMenuOpen  size={30}/>
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns px-4 pt-2 flex">
            <ChatBox user={user} />
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
