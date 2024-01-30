import CountdDown, { zeroPad } from 'react-countdown';
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import Button from "../../../common/button";

import msgIcon from "../../../assets/images/icon/message-favorite.svg";
import openseaIcon from "../../../assets/images/icon/opensea.svg";
import mediumIcon from "../../../assets/images/icon/med.svg";
import hoverShape from "../../../assets/images/icon/hov_shape_s.svg";
import Particle from "./Particles";
import UpcomingStyleWrapper from "./Upcoming.style";


const CountdownElement = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown_wrapper">
      <div className="count_number">
        <span className="count_value">{zeroPad(days)}</span> <span className="label">Days</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(hours)} </span> <span className="label">Hours</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(minutes)} </span>
        <span className="label">Minutes</span>
      </div>
      <div className="count_number">
        <span className="count_value"> {zeroPad(seconds)} </span>
        <span className="label">Seconds</span>
      </div>
    </div>
  )
}

const Upcoming = () => {

  return (
    <UpcomingStyleWrapper>
      <Particle />
      <div className="container-fluid">
        <div className="upcoming_content">
          <h2 className="title">MINT COMING SOON</h2>
          <div className="time_count">

            <CountdDown date={Date.now() + 1675076996} renderer={CountdownElement} />

            <div className="note">
              <h5>
                Leave Your Email to Be Notified About Presales & Whitelist
              </h5>
            </div>
          </div>

          <div className="input_box">
            <input type="email" placeholder="Email Address" />
            <button>
              {" "}
              Notify Me <img src={msgIcon} alt="icon" />
            </button>
          </div>

          <div className="cta_btns">
            <Button lg variant="outline">
              {" "}
              <FaDiscord /> Join Discord{" "}
            </Button>
            <Button lg variant="outline">
              {" "}
              <FaTwitter /> Join Twitter{" "}
            </Button>
          </div>
        </div>
        <div className="social_links">
          <a href="#">
            <img src={openseaIcon} alt="icon" />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
          <a href="#">
            <FaLinkedinIn />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
          <a href="#">
            <FaInstagram />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
          <a href="#">
            <FaTelegramPlane />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
          <a href="#">
            <FaFacebook />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
          <a href="#">
            <img src={mediumIcon} alt="icon" />
            <span className="hover_shape">
              <img src={hoverShape} alt="shape" />
            </span>
          </a>
        </div>
      </div>
    </UpcomingStyleWrapper>
  );
};

export default Upcoming;
