import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from '../pages';

Enzyme.configure({adapter: new Adapter()});

describe('on Index', () => {
  it('shows the "Nextagram" title', () => {
    const index = shallow(<Index/>);

    expect(index.find('h1').text()).toEqual('▲ Nextagram');
  });

  it('shows the "Nextagram" description', () => {
    const index = shallow(<Index/>);

    expect(index.find('p').text()).toEqual('A next app!');
  });
});
