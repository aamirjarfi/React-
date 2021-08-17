import React, {useState} from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import {Button} from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Ok Fine</HeroH1>
        <HeroP>
          lorem ipsum dolor sit Lorem ipsum dolor sit auptatem mollitia tenetur,
          sequi pariatur voluptatibus illum iste dolorum velit blanditiis
          ducimus ullam, a minus facilis earum quos?
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signUp" onMouseEnter={hover} onMouseLeave={hover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
