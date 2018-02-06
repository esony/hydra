// @flow

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import css from './Root.css'
import Menu from '../../components/Menu'
import Landing from '../../landing/Landing'

const Root = () => (
  <Router>
    <div className={css.routes}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/courses" component={Menu} />
    </div>
  </Router>
)

export default Root
