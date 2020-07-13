import React from 'react'
import Item from './Item'

export default class ItemContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          title: 'test',
          content: [
            'css-rule: fix-content;',
            'css-rule: fix-content;',
            'css-rule: fix-content;',
          ],
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: '0',
        },
        {
          title: 'test',
          content: [
            'css-rule: fix-content;',
            'css-rule: fix-content;',
            'css-rule: fix-content;',
          ],
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: '0',
        },
        {
          title: 'test',
          content: [
            'css-rule: fix-content;',
            'css-rule: fix-content;',
            'css-rule: fix-content;',
          ],
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: '0',
        },
        {
          title: 'test',
          content: [
            'css-rule: fix-content;',
            'css-rule: fix-content;',
            'css-rule: fix-content;',
          ],
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: '0',
        },
        {
          title: 'test',
          content: [
            'css-rule: fix-content;',
            'css-rule: fix-content;',
            'css-rule: fix-content;',
          ],
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: '0',
        },
      ],
    }
  }

  componentDidMount() {}

  removeCard(e) {
    console.log(e.currentTarget.id)
    let items = this.state.items
    items.splice(parseInt(e.currentTarget), 1)
    this.setState({
      items,
    })
  }

  render() {
    return (
      <div className="items">
        {this.state.items.map((item) => (
          <Item
            title={item.title}
            content={item.content}
            comment={item.comment}
            itemId={item.id}
            removeCard={this.removeCard.bind(this)}
          />
        ))}
      </div>
    )
  }
}
