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

  render() {
    const {appointList, inputTitle, inputDate} = this.state

    const jsxElement = (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div>
            <form onSubmit={this.onAddSubmit}>
              <label className="title-date">TITLE</label>
              <input
                onChange={this.onChangeTitle}
                className="title-input"
                placeholder="Title"
                value={inputTitle}
              />
              <label className="title-date">DATE</label>
              <input
                onChange={this.onChangeDate}
                type="date"
                className="title-input"
                value={inputDate}
              />
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <hr />
          </div>
          <div>
            <div className="app-star-container">
              <h1>Appointments</h1>
              <p>Starred</p>
            </div>
            <ul>
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
