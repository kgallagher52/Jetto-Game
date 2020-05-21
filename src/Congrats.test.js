import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme' // Creating virtual doms with adapter
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats' // What will be handing to shallow

Enzyme.configure( {adapter: new EnzymeAdapter() }) /* Will be refactored to be a boilerplate */

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props}/>)
} 

describe('Congrats', () => {

  test('renders without error', () => {
    
  })
  
  test('renders no text when sucess props is false', () => {
    
  })

  test('renders non-empty congrats message when success prop is true', () => {
    
  })
  
  
})


