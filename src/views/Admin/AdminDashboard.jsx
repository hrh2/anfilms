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
            <div className="!h-[40vh] overflow-y-scroll">
                <VideoRate />
            </div>
            <Cards />
        </div>
        <div className="content-grid-two">
            <div className="!h-[60vh] overflow-y-scroll">
                <Subscribers/>
                {/*<Financial/>*/}
            </div>
            <div className="grid-two-item">
                <div className="subgrid-two">
                    <Subscriptions/>
                    <div className="!h-[40vh] overflow-y-scroll">
                        <Financial/>
                    </div>
                </div>
            </div>
            <div className="grid-two-item">
                <div className="subgrid-two">
                    <OwnerDetails/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
