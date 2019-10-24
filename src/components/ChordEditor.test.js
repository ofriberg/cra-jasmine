import React from 'react';

import ChordEditor from './ChordEditor';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('<ChordEditor/>', () => {
  it('renders an editor area', () => {
    const editor = shallow(<ChordEditor/>);
    expect(editor.find('textarea').length).toEqual(1);

  });
})
