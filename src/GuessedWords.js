import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({guessedWords}) => {
  return (
  guessedWords.length === 0 ?
      <div data-test="guessed-words-component">
        <span data-test="guess-instructions">Try to guess the secret word!</span>
      </div>
    : 
      <div data-test="guessed-words-component">
      
      </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
