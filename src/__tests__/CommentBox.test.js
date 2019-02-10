/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import CommentBox from '../../src/components/CommentBox';

let wrapper;
beforeEach(() => {
  wrapper = mount(<CommentBox />);  
})
afterEach(() => {
  wrapper.unmount()
})
describe('<CommentBox />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      expect(wrapper.find('h4').length).toEqual(1)
    });
  });
  test('has a test area user can type in ', () => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new c' }
    })
    wrapper.update()
    // console.log(wrapper.find('textarea').prop('value').debug())
    expect(wrapper.find('textarea').prop('value')).toEqual('new c')
  })
  test('when form is submitted, text area get emptied', () => {
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
});
