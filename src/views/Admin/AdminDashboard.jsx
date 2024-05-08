import Cards from "../../components/Cards/Bank";
import VideoRate from "../../components/Cards/VideoRate";
import Report from "../../components/Cards/Report";
import Subscribers from "../../components/Cards/Subscribers";
import Subscriptions from "../../components/Cards/Subscriptions";
import OwnerDetails from "../../components/Cards/Owners";
import Financial from "../../components/Cards/Requests";

const ContentMain = () => {
  return (
    <div className="main-content-holder p-4">
        <div className="content-grid-one">
            <Report />
            <VideoRate />
            <Cards />
        </div>
        <div className="content-grid-two">
            <Subscribers />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Financial />
              </div>
            </div>
            <div className="grid-two-item">
              <div className="subgrid-two">
                <OwnerDetails />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
