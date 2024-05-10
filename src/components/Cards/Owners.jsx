import { team } from "../../data/data";
import { iconsImgs, personsImgs } from "../../hooks/images";
import {Link} from "react-router-dom";
// import "./Savings.css";

const OwnerDetails = () => {
  return (
    <Link to="/admin/board" className="subgrid-two-item grid-common grid-c6 !h-[47vh] overflow-y-scroll">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Board</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="" />
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-items">
                {
                    team.map((member) => (
                        <div className="grid-item" key = { member.name+member.title }>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                    <div className="avatar img-fit-cover">
                                        <img src={member.image?member.image:personsImgs.person_one } alt="" />
                                    </div>
                                    <p className="text text-silver-v1">{ member.title } : { member.name?member.name:"Currently None" }</p>
                                </div>
                                <div className="grid-item-top-r">
                                    <span className="text-silver-v1">{ member.saving_amount }</span>
                                </div>
                            </div>
                            <div className="grid-item-bottom py-3">
                                <div className="grid-item-badges">
                                    <span className="grid-item-badge">Date taken { member.date_taken }</span>
                                    <span className="grid-item-badge">shares { member.shares} %</span>
                                </div>
                                <div className="grid-item-progress">
                                    <div className="grid-item-fill"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Link>
  )
}

export default OwnerDetails
