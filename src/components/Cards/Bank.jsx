import { iconsImgs } from "../../hooks/images";
import Alert from '@mui/material/Alert';


const Cards = () => {
  return (
    <div className="grid-common grid-c1 gap-y-4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Payments</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="" />
            </button>
        </div>
        <div className="grid-c1-content">
            <p>Total Estate</p>
            <div className="lg-value">$0.00</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden">Momo Code  *** </span>
                <span className="!text-red-500">no code yet</span>
            </div>
            <div className="card-logo-wrapper">
                {/* <div>
                    <p className="text text-silver-v1 expiry-text">Expires</p>
                    <p className="text text-sm text-white">12/22</p>
                </div> */}
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>
        </div>
        <Alert severity="warning">This page is still under development</Alert>
    </div>
  )
}

export default Cards
