import React from 'react'
import Categories from './Categories/Categories'
import ItemContainer from './Categories/ItemContainer'

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlCss: false,
      js: false,
      java: false,
    }
  }

  toggleMenu(e) {
    switch (e.currentTarget.id) {
      case '1':
        this.setState({
          htmlCss: !this.state.htmlCss,
          js: false,
          java: false,
        })
        break
      case '2':
        this.setState({
          htmlCss: false,
          js: !this.state.js,
          java: false,
        })
        break
      case '3':
        this.setState({
          htmlCss: false,
          js: false,
          java: !this.state.java,
        })
        break
      default:
        break
    }
  }

  htmlCssContainer() {
    if (!this.state.htmlCss) return
    return (
      <div className="section html-css">
        <h2 className="section-header">HTML/CSS</h2>
        <ItemContainer route="htmlcss" />
      </div>
    )
  }

  jsContainer() {
    if (!this.state.js) return
    return (
      <div className="section js">
        <h2 className="section-header">JS</h2>
        <ItemContainer route="js" />
      </div>
    )
  }

  javaContainer() {
    if (!this.state.java) return
    return (
      <div className="section java">
        <h2 className="section-header">Java</h2>
        <ItemContainer route="java" />
      </div>
    )
  }

  render() {
    return (
      <div className="app-main">
        <Categories toggleMenu={this.toggleMenu.bind(this)} />
        <div className="sections">
          {this.htmlCssContainer()}
          {this.jsContainer()}
          {this.javaContainer()}
        </div>
      </div>
    )
  }
}
