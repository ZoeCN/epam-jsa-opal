'use strict';

import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import subscription1 from '../NavigationBarComponent/assets/subscription_1.png';
import subscription2 from '../NavigationBarComponent/assets/subscription_2.png';
import subscription3 from '../NavigationBarComponent/assets/subscription_3.png';
import subscription4 from '../NavigationBarComponent/assets/subscription_4.png';

class NavigationBar extends React.Component {
  render() {
    let subscription = this.props.subscriptions.map(function(channel) {
      return (
        <Link className="subscription" key={channel.id} to={channel.url}>
          <img src={channel.avatar}></img>
        </Link>
      );
    });

    return (
      <nav className="navigationbar">
        <a className={this.props.selected === 'home' ? 'selected homebutton' : 'homebutton'} href="/home">Home</a>
        <a className={this.props.selected === 'trending' ? 'selected trendingbutton' : 'trendingbutton'} href="/trending">Trending</a>
        <a className={this.props.selected === 'feed' ? 'selected feedbutton' : 'feedbutton'} href="/feed">Feed</a>
        <a className={this.props.selected === 'history' ? 'selected historybutton' : 'historybutton'} href="/history">History</a>
        <a className={this.props.selected === 'watchlater' ? 'selected watchbutton' : 'watchbutton'} href="/watchlater">Watch later</a>
        <a className={this.props.selected === 'like' ? 'selected likedbutton' : 'likedbutton'} href="/liked">Liked</a>
        <div className="obstaclehorizantal"></div>
        <span>Subscription</span>
        {subscription}
        <a className="setting" onclick="return false">setting</a>
      </nav>
    );
  }
}
NavigationBar.defaultProps = {
  subscriptions: [
    {
      avatar: subscription1,
      url: '/111',
      id: 'sub1',
    },
    {
      avatar: subscription2,
      url: '/222',
      id: 'sub2',
    },
    {
      avatar: subscription3,
      url: '/333',
      id: 'sub3',
    },
    {
      avatar: subscription4,
      url: '/333',
      id: 'sub4',
    },
  ],
};
export default NavigationBar;
