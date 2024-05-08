import { owners } from "../../data/data";
import { iconsImgs, personsImgs } from "../../hooks/images";
// import "./Savings.css";

const OwnerDetails = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Owners</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="" />
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-items">
                {
                    owners.map((saving) => (
                        <div className="grid-item" key = { saving.id }>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                    <div className="avatar img-fit-cover">
                                        <img src={ personsImgs.person_one } alt="" />
                                    </div>
                                    <p className="text text-silver-v1">{ saving.title } : { saving.name }</p>
                                </div>
                                <div className="grid-item-top-r">
                                    <span className="text-silver-v1">{ saving.saving_amount }</span>
                                </div>
                            </div>
                            <div className="grid-item-bottom py-3">
                                <div className="grid-item-badges">
                                    <span className="grid-item-badge">Date taken { saving.date_taken }</span>
                                    <span className="grid-item-badge">shares { saving.shares} %</span>
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
    </div>
  )
}

export default OwnerDetails
