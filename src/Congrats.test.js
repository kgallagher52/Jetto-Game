import React from 'react'
import { shallow } from 'enzyme' // Creating virtual doms with adapter

import { findByTestAttr, checkProps } from '../test/testUtils'
import Congrats from './Congrats' // What will be handing to shallow
 
const defaultProps = { success: false }

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps}/>)
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
 
  test('Does not throw warning with expected props', () => {
    const expectedProps = { success: false }
    checkProps(Congrats, expectedProps)
  })
  
  
})
