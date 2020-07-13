import React from 'react'
import Header from './components/header/Header'
import MainContainer from './components/main/MainContainer'
import './css/main.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Header />
        <MainContainer />
      </div>
    )
  }
}
