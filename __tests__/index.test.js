import React from 'react';
import {shallow} from 'enzyme';

import Index from '../pages/index.js';

describe('on Index', () => {
  it('shows the "Nextagram" title', () => {
    const index = shallow(<Index/>);

    expect(index.find('h1').text()).toEqual('▲ Nextagram');
  });
});
