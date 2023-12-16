// Write your code here
import {format} from 'date-fns'
import './index.css'

const EMPTY_STAR_URL =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

const FULL_STAR_URL =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

const AppointmentItem = props => {
  const {appointDetails, isFavorite} = props
  const {title, date, id, isStarred} = appointDetails
  const clickOnStar = () => {
    isFavorite(id)
  }
  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const jsxElement = (
    <li className="appoint-item-container">
      <div>
        <p className="title-heading">{title}</p>
        <p className="date-desc">{newDate}</p>
      </div>
      <button
        className="star-btn"
        type="button"
        data-testid="star"
        onClick={clickOnStar}
      >
        <img src={isStarred ? FULL_STAR_URL : EMPTY_STAR_URL} alt="star" />
      </button>
    </li>
  )
  return jsxElement
}
export default AppointmentItem
