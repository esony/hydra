import {observable, action} from 'mobx'

class Store {
  @observable activeCourse = undefined
  @observable activeSubject = undefined

  @observable
  courses = [
    {id: 'ASE-1000', name: 'Hydrauliikan perusteet'},
    {id: 'ASE-6030', name: 'Tietoverkkopohjainen automaatio'},
    {id: 'ASE-6050', name: 'Hydrauliikan suunnittelukurssi'},
  ]
  @observable
  subjects = [
    {id: '123456', name: 'Valves'},
    {id: '492387', name: 'Graphs'},
    {id: '312453', name: 'Stuff'},
  ]

  @observable
  questions = [
    {id: '1', name: 'How much?'},
    {id: '2', name: 'Where go?'},
    {id: '3', name: 'What do?'},
  ]

  @action
  fetchCourses = () => {
    console.log('Courses fetched!')
  }

  @action
  fetchSubjects = () => {
    console.log('Subjects fetched!')
  }

  @action
  fetchQuestions = () => {
    console.log('Questions fetched!')
  }

  SaveCourse(courseID) {
    this.activeCourse = courseID
    console.log(this.activeCourse)
  }
  SaveSubject(subjectID) {
    this.activeSubject = subjectID
    console.log(this.activeSubject)
  }
}

export default new Store()
