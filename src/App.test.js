import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//TO RUN Jest type: npm test
//to run tests again: a
//to run only failed tests again: f
//to stop "watch" mode: q



//this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

