import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordion />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Accordion sections='sections' />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
  