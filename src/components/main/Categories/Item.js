import React from 'react'
import { v4 as uuidv4 } from 'uuid'
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
      value: JSON.parse(this.props.item.code).join('\n'),
    })
  }

  render() {
    return (
      <div className="item">
        <div className="item-header">
          <h4>{this.props.item.title}</h4>
          <span
            className="close-btn"
            title="Remove card"
            id={this.props.item.id}
            onClick={(e) => {
              this.props.removeCard(e)
            }}
          >
            ✖
          </span>
        </div>
        <div className="item-content">
          <div className="item-code">
            {JSON.parse(this.props.item.code).map((line) => {
              return (
                <code className="line" key={uuidv4()}>
                  {line}
                </code>
              )
            })}
          </div>
          <CopyClipboard text={this.state.value}>
            <img
              src={list}
              alt="clipboard"
              className="clipboard-icon"
              title="Copy to clipboard"
            />
          </CopyClipboard>
          {this.props.item.comment !== 'null' &&
          this.props.item.comment ? (
            <div className="comments">
              <span className="comment-line">
                {this.props.item.comment}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
