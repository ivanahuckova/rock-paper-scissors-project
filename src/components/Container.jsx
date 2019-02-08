import React from 'react';
import Header from './Header';
import History from './History';
import MainBoard from './MainBoard';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  // container holds state of application
  render() {
    return (
      <div className="container">
        <Header />
        <History history={[0, 1, 2, 0]} />
        <MainBoard />
        <WeaponSelector />
      </div>
    );
  }
}
