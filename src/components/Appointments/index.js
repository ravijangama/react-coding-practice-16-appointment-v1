// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointList: [], inputTitle: '', inputDate: ''}

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeDate = event => {
    this.setState({inputDate: event.target.value})
  }

  onAddSubmit = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const newAppoint = {
      id: uuidv4(),
      title: inputTitle,
      date: inputDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointList: [...prevState.appointList, newAppoint],
      inputTitle: '',
      inputDate: '',
    }))
  }

  setFavorite = id => {
    this.setState(prevState => ({
      appointList: prevState.appointList.map(eachAppoint => {
        if (eachAppoint.id === id) {
          return {...eachAppoint, isStarred: !eachAppoint.isStarred}
        }
        return eachAppoint
      }),
    }))
  }

  clickOnStarred = () => {
    const {appointList} = this.state
    this.setState({
      appointList: appointList.filter(
        eachAppoint => eachAppoint.isStarred === true,
      ),
    })
  }

  render() {
    const {appointList, inputTitle, inputDate} = this.state

    const jsxElement = (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="form-image-container">
              <form onSubmit={this.onAddSubmit} className="form-container">
                <h1 className="main-heading">Add Appointment</h1>

                <label htmlFor="input" className="title-date-label">
                  TITLE
                </label>
                <input
                  onChange={this.onChangeTitle}
                  className="title-date-input"
                  placeholder="Title"
                  value={inputTitle}
                  id="input"
                />

                <label htmlFor="date" className="title-date-label">
                  DATE
                </label>
                <input
                  onChange={this.onChangeDate}
                  type="date"
                  className="title-date-input"
                  value={inputDate}
                  id="date"
                />
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="app-image"
              />
            </div>
            <hr className="hr" />
            <div className="app-star-container">
              <h1 className="appointments-heading">Appointments</h1>
              <button
                type="button"
                className="starred-btn"
                onClick={this.clickOnStarred}
              >
                Starred
              </button>
            </div>
            <ul className="app-ul-container">
              {appointList.map(eachAppoint => (
                <AppointmentItem
                  key={eachAppoint.id}
                  appointDetails={eachAppoint}
                  isFavorite={this.setFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Appointments
