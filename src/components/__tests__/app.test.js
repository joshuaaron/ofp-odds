import React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components/App';
import { InputField } from 'components/InputField';
import { Header } from 'components/Header';
import { DisplayCardsWrapper } from 'components/DisplayCardsWrapper';

let wrapped;
beforeEach(() => {
	wrapped = shallow(<App />);
});
afterEach(() => {
	wrapped.unmount();
});

it('renders the Header component', () => {
	expect(wrapped.find(Header).length).toEqual(1)
});
it('renders the DisplayCardsWrapper component', () => {
	expect(wrapped.find(DisplayCardsWrapper).length).toEqual(1)
});
it('renders the InputField component', () => {
	expect(wrapped.find(InputField).length).toEqual(1)
});