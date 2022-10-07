// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionGoogle, arrowClicked} = props
  const {suggestion} = suggestionGoogle

  const btnClicked = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="suggestions-list">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={btnClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow-icon"
          className="arrow-button"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
