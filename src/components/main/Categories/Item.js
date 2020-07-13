import React from 'react'
import CopyClipboard from 'react-copy-to-clipboard'
import list from '../../../img/list.png'

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.content.join('\n'),
    })
  }

  render() {
    return (
      <div className="item">
        <div className="item-header">
          <h4>{this.props.title}</h4>
          <span
            className="close-btn"
            title="Remove card"
            id={this.props.itemId}
            onClick={(e) => {
              this.props.removeCard(e)
            }}
          >
            ✖
          </span>
        </div>
        <div className="item-content">
          {this.props.content.map((line) => {
            return <code className="line">{line}</code>
          })}
          <CopyClipboard text={this.state.value}>
            <img
              src={list}
              alt="clipboard"
              className="clipboard-icon"
              title="Copy to clipboard"
            />
          </CopyClipboard>
          {this.props.comment !== '' && this.props.comment ? (
            <div className="comments">
              <span className="comment-line">
                {this.props.comment}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
