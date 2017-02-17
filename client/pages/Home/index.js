import React from 'react';
import H1 from '../../components/H1';
import launchVid from '../../assets/nightrocket_100kbps_white.mp4';

const Home = () => (
  <div>
    <H1>Home</H1>
    <div className="video-container">
      <div className="video-filter" />
      <video autoPlay loop className="fillWidth">
        <source src={launchVid} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      {
        // todo: gracefully degrade to image
      }
      <div className="poster hidden">
        <img src="PATH_TO_JPEG" alt="" />
      </div>
    </div>
  </div>
);

export default Home;
