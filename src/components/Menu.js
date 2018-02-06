import React, {Component} from 'react'
import List from '../list/List'
import {observer} from 'mobx-react'
import css from './Main.css'
import Header from './Header'
import Footer from './Footer'
import store from '../store.js'

@observer
export class Menu extends Component {
  componentDidMount() {
    //Make API calls
  }

  SaveCourse = courseID => {
    console.log('Course saved!!!')
    store.SaveCourse(courseID)
    store.fetchSubjects()
  }
  SaveSubject = subjectID => {
    console.log('Subject saved!!!')
    store.SaveSubject(subjectID)
    store.fetchQuestions()
  }

  render() {
    const {courses} = store

    return (
      <div className={css.wrapper}>
        <Header />
        <div className={css.content}>
          <List data={courses} onSelect={this.SaveCourse} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Menu
