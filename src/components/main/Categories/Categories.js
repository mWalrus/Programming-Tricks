import React from 'react'

export default class Categories extends React.Component {
  render() {
    return (
      <div className="language-select">
        <div
          className="selection"
          onClick={(e) => {
            this.props.toggleMenu(e)
          }}
          id="1"
        >
          HTML/CSS
        </div>
        <div
          className="selection"
          onClick={(e) => {
            this.props.toggleMenu(e)
          }}
          id="2"
        >
          Javascript
        </div>
        <div
          className="selection"
          onClick={(e) => {
            this.props.toggleMenu(e)
          }}
          id="3"
        >
          Java
        </div>
      </div>
    )
  }
}
