/* @flow */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { Times } from '../src';

describe('<Times/>', () => {
  it('renders n children', () => {
    const wrapper = shallow((
      <Times
        n={3}
        render={n => <div className="child" key={n} />}
      />
    ));
    expect(wrapper.find('.child').length).toBe(3);
  });
});
