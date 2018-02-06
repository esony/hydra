/**
 * Courses
 * 
 */

import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Item from './Item'
import css from './List.css'

@observer
export class List extends Component {
  render() {
    const {data, onSelect} = this.props

    const list = data.map(item => (
      <Item key={item.id} id={item.id} name={item.name} onSelect={onSelect} />
    ))

    return (
      <div className={css.container}>
        <div>
          <h1>Select course</h1>
          <div className={css.list}>{list}</div>
        </div>
      </div>
    )
  }
}

export default List
