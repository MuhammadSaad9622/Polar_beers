import { useModal } from "../../../../utils/ModalContext";
import CountdDown from "../../../../common/countDown"
import Counter from "../../../../common/counter";
import Particle from "../../../../common/particle/v1";
import Button from "../../../../common/button";

import data from "../../../../assets/data/particle/bannerV2Particles";
import BannerStyleWrapper from "./Banner.style";


const Banner = () => {
  const { mintModalHandle } = useModal();

  return (
    <BannerStyleWrapper className="bithu_v2_baner_sect" id="home">
      <div className="container">
        <div className="bithu_v2_baner_content">
          <h2>
            {" "}
            <span className="banner-emot">🎉</span>Public Sale{" "}
            <span>Live !</span>
          </h2>
          <h3>
            <span className="count">
              <Counter end={5555} duration={5555} />
            </span>{" "}
            / 5555 Minted
          </h3>
          <div className="bithu_v2_timer">
            <h4>TIME LEFT</h4>
            <div className="timer">
              <CountdDown date={Date.now() + 1675076996} />
            </div>
          </div>
          <div className="bithu_v2_baner_buttons text-center">
            <Button lg variant="mint" onClick={() => mintModalHandle()}>
              Mint Now
            </Button>
          </div>

          <Particle className="v2_baner_stars" particles={data} />
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
