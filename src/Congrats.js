import React from 'react'
import PropTypes from 'prop-types'

/***
 * Functional react component for congratualatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Renderd component (or null if 'success' prop is not equal to true)
 */


const Congrats = ({ success }) => {
   return (
    success ?
     <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    :
      <div data-test="congrats-component"/>
  )
}

/* Making a more strict type what prop types we are expecting*/
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
