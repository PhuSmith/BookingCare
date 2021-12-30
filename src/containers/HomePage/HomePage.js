import React, { Component } from 'react';
import HomeHeader from './Header/HomeHeader';
import Banner from './Banner/Banner';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <Banner />
      </>
    );
  }
}
