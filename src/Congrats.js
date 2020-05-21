import React from 'react'


/***
 * Functional rreact component for congratualatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Renderd component (or null if 'success' prop is not equal to true)
 */


 export default (props) => {
   if(props.success) {
    return (
     <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    )
    } else {
      return(<div data-test="congrats-component"/>)
    } 
}

