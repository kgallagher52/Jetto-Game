import React from 'react'
import Enzyme, { shallow } from 'enzyme' // Creating virtual doms with adapter
import EnzymeAdapter from 'enzyme-adapter-react-16';


import { findByTestAttr } from '../test/testUtils'
import Congrats from './Congrats' // What will be handing to shallow

Enzyme.configure( { adapter: new EnzymeAdapter() } ) /* Will be refactored to be a boilerplate */

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
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'congrats-component')
    expect(component.length).toBe(1)
  })
  
  test('renders no text when success props is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'congrats-component')
    expect(component.text()).toBe('')
  })

  test('renders non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(0)
  })
  
  
})


