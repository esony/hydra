import React, {Component} from 'react'
import css from './Landing.css'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

export default class Landing extends Component {
  render() {
    return (
      <div className={css.bg}>
        <Header />
        <div className={css.logo}>HYDRA</div>
        <div className={css.entry}>
          <Link to="/courses">
            <button className={css.btn}>Play the game</button>
          </Link>
        </div>
      </div>
    )
  }
}
