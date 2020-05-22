import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [ { guessedWord: 'fire', letterMatchCount: 3 } ]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 * setupProps - Overide props if there are props but if there are not it will set props
 */

const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('If no words are guessed', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = setup({ guessedWords:[] })
  })
	test('Renders without error', () => {
    const component = findByTestAttr(wrapper, 'guessed-words-component')
    expect(component.length).toBe(1)
  });
  
  
	test('Renders instructions to guess word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  });
});

describe('If there are words guesssed.', () => {});
