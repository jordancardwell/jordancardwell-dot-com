import React from 'react';
import styled from 'styled-components';
// import H1 from '../../components/H1';

import launchVid from '../../assets/nightrocket_100kbps_white.mp4';
// import launchVid from '../../assets/nightrocket_1.3_white.mp4';
// import launchVid from '../../assets/nightrocket_3.2_white.mp4';

const BlockPlaceholder = styled.div`
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  background-color: ${({ color }) => color};
`;

const HeroWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  top: 0;
  z-index: -1;
`;

// TODO: change Hero and Fold to flex
const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Fold = styled.div`
  font-family: Argon;
  margin-top: 70vh;
  overflow: hidden;
  color: white;
  height: 30vh;
  width: 100vw;
  background-color: black;
`;

// const VideoWrapper = styled.div`
//   position: absolute;
//   min-width: 100vw;
//   height: 100vh;
//   overflow: hidden;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: -1;
// `;

const Video = styled.video`
  position: absolute;
  width: 70vw;
  max-height: 100vh;
  bottom: -1px;
  right: 0;
  z-index: -1;
`;

// const LogotypeTop = styled.div`
//   font-family: Argon;
//   position: absolute;
//   font-weight: 100;
//   font-size: 11rem;
//   color: #1F1F1F;
//   bottom: 0;
//   left: 0;
//   transform: translate(0, 50%)
// `;

// const LogotypeBottom = styled.div`
//   font-family: Argon;
//   position: absolute;
//   font-weight: 100;
//   font-size: 11rem;
//   color: #1F1F1F;
//   top: 0;
//   left: 0;
//   transform: translate(0, -50%)
// `;

const Logotype = styled.div`
  font-family: Argon;
  position: absolute;
  font-weight: 100;
  font-size: 11rem;
  color: ${props => (props.top ? 'white' : '#1F1F1F')};
  top: ${props => (props.top ? 0 : 'initial')};
  bottom: ${props => (props.bottom ? 0 : 'initial')};
  left: 0;
  transform: ${props => (props.top ? 'translate(0, -53%)' : 'translate(0, 47%)')};
  cursor: pointer;
`;

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Home = () => (
  <div>
    <HeroWrapper className="video-container">
      <Hero>
        <div className="video-filter" />
        <Logotype bottom>JC</Logotype>
        <Video autoPlay loop className="fillWidth">
          <source src={launchVid} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade your browser.
        </Video>
        {
          // todo: gracefully degrade to image

          // <div className="poster hidden">
          //   <img src="PATH_TO_JPEG" alt="" />
          // </div>
        }
      </Hero>
    </HeroWrapper>
    <Fold>
      <RelativeWrapper>
        <Logotype top>JC</Logotype>
      </RelativeWrapper>
    </Fold>
    <BlockPlaceholder color="#F6F7F8" />
    <BlockPlaceholder color="#2EC4B6" />
    <BlockPlaceholder color="#FF3366" />
    <BlockPlaceholder color="#271B52" />
  </div>
);

export default Home;
