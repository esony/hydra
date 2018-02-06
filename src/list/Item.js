/** 
 * List item
 */

import React from 'react'
import css from './Item.css'

const Item = props => {
  const {id, name, onSelect} = props

  return (
    <div>
      <button className={css.btn} onClick={() => onSelect(id)}>
        {id} - {name}
      </button>
    </div>
  )
}

export default Item
