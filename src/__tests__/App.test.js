import React from 'react';
import { shallow, mount } from 'enzyme'
import App from '../../src/components/App';
import CommentBox from '../components/CommentBox';

let wrapper;
beforeEach(() => {
  wrapper = mount(<App />)  
})
afterEach(() => {
  wrapper.unmount()
})
it('renders without crashing', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1)
});
