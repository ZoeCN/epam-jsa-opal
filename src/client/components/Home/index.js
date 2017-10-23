'use strict';

import React from 'react';
import Header from '../header';
import NavigationBar from '../NavigationBar';
import SuggestedVideos from '../SuggestedVideos';
import VideoComponent from '../VideoComponent';
import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='homecontainer'>
        <Header className='header'/>
        <div className='main'>
          <NavigationBar className='navigationBar'/>
          <div className='videoComponent'> <VideoComponent /> </div>
          <div className='suggestedVideos'> <SuggestedVideos /> </div>
        </div>
      </div>
    );
  }
}

export default Home;

