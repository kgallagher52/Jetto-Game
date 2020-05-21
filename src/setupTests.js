import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme' // Creating virtual doms with adapter
import EnzymeAdapter from 'enzyme-adapter-react-16'
Enzyme.configure( { adapter: new EnzymeAdapter() } ) /* Will be refactored to be a boilerplate */
