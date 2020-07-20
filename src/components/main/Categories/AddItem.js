import React from 'react'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      newItem: {
        title: null,
        code: null,
        comment: null,
      },
    }
  }

  setItemData(e, id) {
    if (id === 1) {
      this.setState({
        newItem: {
          title: e.target.value,
          code: this.state.newItem.code,
          comment: this.state.newItem.comment,
        },
      })
    } else if (id === 2) {
      this.setState({
        newItem: {
          title: this.state.newItem.title,
          code: e.target.value,
          comment: this.state.newItem.comment,
        },
      })
    } else if (id === 3) {
      this.setState({
        newItem: {
          title: this.state.newItem.title,
          code: this.state.newItem.code,
          comment: e.target.value,
        },
      })
    }
  }

  render() {
    if (this.state.show) {
      return (
        <div className="add-item">
          <h4>{'Add item for ' + this.props.category}</h4>
          <span
            onClick={() => {
              this.setState({
                show: false,
                newItem: {
                  title: null,
                  code: null,
                  comment: null,
                },
              })
            }}
          >
            ⨯
          </span>
          <input
            className="add-item-title"
            placeholder="Item title"
            name="title"
            onChange={(e) => {
              this.setItemData(e, 1)
            }}
          ></input>
          <textarea
            className="add-item-code"
            placeholder="Item code"
            name="code"
            onChange={(e) => {
              this.setItemData(e, 2)
            }}
          ></textarea>
          <textarea
            className="add-item-comment"
            placeholder="Item comment"
            name="comment"
            onChange={(e) => {
              this.setItemData(e, 3)
            }}
          ></textarea>
          <button
            className="submit-btn"
            onClick={() => {
              this.props.sendItem(
                this.state.newItem,
                this.props.category.replace('/', '')
              )
              this.setState({ show: false })
            }}
          >
            Add
          </button>
        </div>
      )
    }
    return (
      <div
        className="add-new-btn"
        onClick={() => {
          this.setState({ show: true })
        }}
      >
        <h4>Add new item</h4>
      </div>
    )
  }
}
