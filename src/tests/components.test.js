import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
// import Header from '../components/Header';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Test UI of the webpage', () => {
  it('Calculator displays on the page', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote displays on the page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home displays on the page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
