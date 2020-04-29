import React, { Component } from 'react'
import Header from './header.js';
import ImmageList from './immageList.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImmageList />
        
      </div>
    )
  }
}
