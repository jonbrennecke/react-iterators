/* @flow */
/* global describe, it, expect */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Times } from '../src';

configure({ adapter: new Adapter() });

// $FlowFixMe
describe('<Times/>', () => {
  // $FlowFixMe
  it('renders n children', () => {
    const wrapper = shallow((
      <Times
        n={3}
        render={n => <div className="child" key={n} />}
      />
    ));
    // $FlowFixMe
    expect(wrapper.find('.child').length).toBe(3);
  });
});
