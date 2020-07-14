import React from 'react'
import Item from './Item'
import AddItem from './AddItem'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default class ItemContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  async componentDidMount() {
    await this.getItems()
  }

  async sendNewItemToDatabase(item) {
    if (!item.title || !item.code) return
    const post = await axios.post(
      `http://localhost:3001/db/${this.props.route}/set`,
      {
        title: item.title,
        code: JSON.stringify(item.code.split('\n')),
        comment: !item.comment ? 'null' : item.comment,
      }
    )

    const response = post.data
    console.log(response)
    await this.getItems()
  }

  // async componentDidUpdate() {
  //   await this.getItems()
  //   return
  // }

  async getItems() {
    const res = await axios.get(
      `http://localhost:3001/db/${this.props.route}/get`
    )
    if (this.state.items === res.data) return
    this.setState({
      items: res.data,
    })
  }

  async removeCard(e) {
    // console.log(e.currentTarget.id)
    await axios.get(
      `http://localhost:3001/db/${this.props.route}/remove/${e.currentTarget.id}`
    )
    // console.log(req.data)
    await this.getItems()
  }

  render() {
    return (
      <div className="items">
        {this.state.items.map((item) => (
          <Item
            item={item}
            removeCard={this.removeCard.bind(this)}
            key={uuidv4()}
          />
        ))}
        <AddItem
          category={this.props.route}
          sendItem={this.sendNewItemToDatabase.bind(this)}
        />
      </div>
    )
  }
}
