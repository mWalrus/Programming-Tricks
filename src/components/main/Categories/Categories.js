import React from 'react'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      // newLang: null,
      // clickedNewLang: false,
    }
  }

  componentDidMount() {
    this.setState({
      categories: ['HTML/CSS', 'Javascript', 'Java'],
    })
  }

  // setNewLangLetter(e) {
  //   this.setState({ newLang: e.target.value })
  // }

  // toggleNewLangState(e) {
  //   if (e.target.classList.contains('new-lang-area')) return
  //   this.setState({ clickedNewLang: !this.state.clickedNewLang })
  // }

  // getTextArea() {
  //   return (
  //     <textarea
  //       className="new-lang-area"
  //       onChange={this.setNewLangLetter.bind(this)}
  //       onKeyUp={this.checkKey.bind(this)}
  //     ></textarea>
  //   )
  // }

  // checkKey(e) {
  //   console.log(e.target)
  //   if (e.target.value === '') return
  //   if (e.key === 'Enter') {
  //     e.target.value = ''
  //     this.setState({
  //       categories: [...this.state.categories, this.state.newLang],
  //       newLang: null,
  //       clickedNewLang: false,
  //     })
  //   }
  // }

  render() {
    return (
      <div
        className="language-select"
        style={{
          gridTemplateColumns: `repeat(${this.state.categories.length}, 1fr)`,
        }}
      >
        {this.state.categories.map((category) => {
          return (
            <div
              className="selection"
              onClick={(e) => {
                this.props.toggleMenu(e)
              }}
              id={this.state.categories.indexOf(category) + 1}
            >
              {category}
            </div>
          )
        })}
        {/* <div
          className="selection create-new"
          onClick={this.toggleNewLangState.bind(this)}
        >
          {this.state.clickedNewLang ? this.getTextArea() : '+'}
        </div> */}
      </div>
    )
  }
}
